// 创建任务队列
const createTaskQueue = () => {
  const taskQueue = []
  // 返回管理任务队列的管理器对象
  return {
    push: item => taskQueue.push(item),
    pop: () => taskQueue.shift(),
    isEmpty: () => taskQueue.length === 0
  }
}

export default createTaskQueue