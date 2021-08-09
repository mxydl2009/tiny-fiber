import { createDOMElement } from '../../DOM'
import { createReactInstance } from '../createReactInstance'

const createStateNode = (fiber) => {
  if (fiber.tag === 'host_component') {
    return createDOMElement(fiber)
  } else {
    // 如果是组件，则创建组件实例
    return createReactInstance(fiber)
  }
}

export default createStateNode