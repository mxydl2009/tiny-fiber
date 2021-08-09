import { updateNodeElement } from '../DOM'
import { createTaskQueue, arrified, createStateNode, getTag, getRoot } from '../Utils'

// setState调用sheduleUpdate来触发调度更新
export const sheduleUpdate = (instance, partialState) => {
  taskQueueManger.push({
    // 用from字段来区别组件状态更新和其他任务
    from: 'class_component',
    instance,
    partialState
  })
  requestIdleCallback(performTask)
}

const taskQueueManger = createTaskQueue()
// 定义子任务，也就是说，我们构建Fiber树整个任务会被拆分为各个子任务
let subTask = null

let pendingCommit = null

// fiber节点是root fiber节点，其中effects数组收集了所有的fiber节点
const commitAllWork = fiber => {
  // 根据effects数组中的fiber关系（父子节点关系）构建DOM树
  fiber.effects.forEach(item => {
    if(item.tag ==='class_component'){
      // 组件的fiber对象备份到组件实例上
      item.stateNode.__fiber = item
    }
    if (item.effectTag === 'placement') {
      // 添加操作
      let fiber = item
      let parentFiber = item.parent
      while(parentFiber.tag === 'class_component' || parentFiber.tag === 'function_component') {
        parentFiber = parentFiber.parent
      }
      if (fiber.tag === 'host_component') {
        parentFiber.stateNode.appendChild(fiber.stateNode)
      }
    } else if (item.effectTag === 'update') {
      // 更新操作
      if (item.type === item.alternate.type) {
        // 节点类型相同
        updateNodeElement(item.stateNode, item, item.alternate)
      } else {
        // 节点类型不同
        item.parent.stateNode.replaceChild(item.stateNode, item.alternate.stateNode)
      }
    } else if (item.effectTag === 'delete') {
      item.parent.stateNode.removeChild(item.stateNode)
    }
  })
  // 备份fiber对象到root DOM节点，便于之后更新过程做对比
  fiber.stateNode.__rootFiberContainer = fiber
}

const getFirstTask = () => {
  // 从任务队列中获取任务
  const task = taskQueueManger.pop()
  if(task.from === 'class_component') {
    // 组件状态更新任务
    // 获取root fiber节点，重新构建fiber树
    const root = getRoot(task.instance)
    task.instance.__fiber.partialState = task.partialState
    return {
      props: root.props,
      stateNode: root.stateNode,
      tag: 'host_root',
      effects: [],
      // root Fiber对象不需要effectTag
      // effectTag: null,
      child: null,
      // 备份旧的fiber树
      alternate: root
    }
  }
  // 返回最外层节点的Fiber对象
  return {
    props: task.props,
    stateNode: task.dom,
    tag: 'host_root',
    effects: [],
    // root Fiber对象不需要effectTag
    // effectTag: null,
    child: null,
    // 备份旧的fiber树
    alternate: task.dom.__rootFiberContainer
  }
}
   /**
   * children可能是对象（因为root的Fiber节点的props.children就是虚拟DOM对象），
   * 也可能是数组（除此以外，其他的children都是数组）
   * 为了统一处理，要把对象形式的children转为数组
   */
const reconcileChildren = (fiber, children) => {
  const arrifiedChildren = arrified(children)
  let index = 0
  let numberOfElements = arrifiedChildren.length
  let element = null
  let newFiber = null
  let prevFiber = null
  let alternate = null
  if (fiber.alternate && fiber.alternate.child) {
    alternate = fiber.alternate.child
  }

  // 如果更新时，新fiber的children为空，则index < numberOfElements不成立，就无法进入循环
  // 但实际上，这时候要执行子节点的删除操作，所以要添加alternate是否存在的判断逻辑
  while(index < numberOfElements || alternate) {
    element = arrifiedChildren[index]

    if (element && alternate) {
      // 更新操作
      // 根据element(虚拟DOM对象)构建Fiber对象
      newFiber = {
        type: element.type,
        props: element.props,
        tag: getTag(element),
        effects: [],
        effectTag: 'update',
        stateNode: null,
        parent: fiber,
        alternate
      }
      if (element.type === alternate.type) {
        // 类型相同，复用原来的DOM节点
        newFiber.stateNode = alternate.stateNode
      } else {
        // 类型不同，创建新的DOM节点
        newFiber.stateNode = createStateNode(newFiber)
      }
    } else if (element && !alternate) {
      // 初始渲染或者添加操作
      // 根据element(虚拟DOM对象)构建Fiber对象
      newFiber = {
        type: element.type,
        props: element.props,
        tag: getTag(element),
        effects: [],
        effectTag: 'placement',
        stateNode: null,
        parent: fiber,
      }
      // 真实DOM对象
      newFiber.stateNode = createStateNode(newFiber)
    } else if (!element && alternate) {
      // 删除操作
      alternate.effectTag = 'delete'
      fiber.effects.push(alternate)
    }
    // 双指针构建链表，newFiber和prevFiber两个指针
    if (index === 0) {
      fiber.child = newFiber
    } else if(element) {
      prevFiber.sibling = newFiber
    }

    if (alternate && alternate.sibling) {
      alternate = alternate.sibling
    } else {
      alternate = null
    }

    prevFiber = newFiber
    index ++
  }
}

const executeTask = (fiber) => {
  // 构建fiber的子节点Fiber对象
  // 当fiber是组件类型时，children是组件内部的元素,需要进一步去将类组件的children做reconcileChildren
  if (fiber.tag === 'class_component') {
    // 更新state
    if(fiber.stateNode.__fiber && fiber.stateNode.__fiber.partialState) {
      fiber.stateNode.state = {
        ...fiber.stateNode.state,
        ...fiber.stateNode.__fiber.partialState
      }
    }
    reconcileChildren(fiber, fiber.stateNode.render())
  } else if (fiber.tag === 'function_component') {
    reconcileChildren(fiber, fiber.stateNode(fiber.props))
  } else {
    reconcileChildren(fiber, fiber.props.children)
  }
  // 如果fiber有子节点，则返回子节点，让execute(子节点)继续构建
  if (fiber.child) {
    return fiber.child
  }
  let currentExecutelyFiber = fiber
  // 父级节点存在时，则一直构建，直到没有父级，表明已经到达了root节点
  while(currentExecutelyFiber.parent) {
    // 使用effects数组收集fiber对象的过程，最终会在root的effects数组中包含了所有fiber对象
    currentExecutelyFiber.parent.effects = currentExecutelyFiber.parent.effects.concat(
      currentExecutelyFiber.effects.concat([ currentExecutelyFiber ])
    )
    // 如果存在兄弟节点，则构建兄弟节点
    if (currentExecutelyFiber.sibling) {
      return currentExecutelyFiber.sibling
    }
    // 没有兄弟节点，则构建父级节点
    currentExecutelyFiber = currentExecutelyFiber.parent
  }
  pendingCommit = currentExecutelyFiber
}

const workLoop = (deadline) => {
  // 如果子任务不存在，则获取子任务
  if (!subTask) {
    // 获取任务
    subTask = getFirstTask()
  }
  // 使用循环来一直执行任务
  while(subTask && deadline.timeRemaining() > 1) {
    // 任务存在且浏览器空余时间＞1ms，执行任务, 并返回下一个任务
    subTask = executeTask(subTask)
  }
  if (pendingCommit) {
    // 执行将fiber渲染到DOM中
    commitAllWork(pendingCommit)
  }
}

const performTask = (deadline) => {
  workLoop(deadline)
  // 当任务存在但空余时间不足时，workLoop函数会退出，然后继续注册空闲时间内的任务执行
  if (subTask || !taskQueueManger.isEmpty()) {
    requestIdleCallback(performTask)
  }
}

/**
 * 将虚拟DOM渲染挂载到页面的dom元素中
 * @param {*} element 
 * @param {*} dom 
 */
export const render = (element, dom) => {
  // 向任务队列添加任务
  // 任务就是根据虚拟DOM构建Fiber对象, 自顶向下，由root这个DOM节点开始，传入虚拟DOM（root也会使用虚拟DOM的形式）
  taskQueueManger.push({
    dom,
    props: { children: element } 
  })
  // 指定在浏览器空闲时间执行任务, performTask函数用于调度任务，由其中的workLoop来具体执行
  requestIdleCallback(performTask)
}