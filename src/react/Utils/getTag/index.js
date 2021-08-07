const getTag = vdom => {
  switch(typeof vdom.type) {
    case 'string':
      return 'host_component'
      break
    default:
      return 'host_component'
      break
  }
}

export default getTag