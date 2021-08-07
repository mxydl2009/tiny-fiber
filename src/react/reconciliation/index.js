import { createTaskQueue, arrified, createStateNode, getTag } from '../Utils'

const taskQueueManger = createTaskQueue()
// 定义子任务，也就是说，我们构建Fiber树整个任务会被拆分为各个子任务
let subTask = null

const getFirstTask = () => {
  // 从任务队列中获取任务
  const task = taskQueueManger.pop()
  // 返回最外层节点的Fiber对象
  return {
    props: task.props,
    stateNode: task.dom,
    tag: 'host_root',
    effects: [],
    // root Fiber对象不需要effectTag
    // effectTag: null,
    child: null
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

  while(index < numberOfElements) {
    element = arrifiedChildren[index]
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
    newFiber.stateNode = createStateNode(newFiber)
    // 双指针构建链表，newFiber和prevFiber两个指针
    if (index === 0) {
      fiber.child = newFiber
    } else {
      prevFiber.sibling = newFiber
    }
    prevFiber = newFiber
    index ++
  }
}

const executeTask = (fiber) => {
  // 构建fiber的子节点Fiber对象
  reconcileChildren(fiber, fiber.props.children)
  // 如果fiber有子节点，则返回子节点，让execute(子节点)继续构建
  if (fiber.child) {
    return fiber.child
  }
  let currentExecutelyFiber = fiber
  // 父级节点存在时，则一直构建，直到没有父级，表明已经到达了root节点
  while(currentExecutelyFiber.parent) {
    // 如果存在兄弟节点，则构建兄弟节点
    if (fiber.sibling) {
      return fiber.sibling
    }
    // 没有兄弟节点，则构建父级节点
    currentExecutelyFiber = currentExecutelyFiber.parent
  }
  console.log(fiber);
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

}

const performTask = (deadline) => {
  workLoop(deadline)
  if (subTask || !taskQueueManger.isEmpty()) {
    requestIdleCallback(performTask)
  }
}

/**
 * 
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