import React from './react'
import { render, Component } from './react' 

const root = document.getElementById('root')
// const jsx = (
//   <div>
//     <p>hello react</p>
//     <p>
//       hi reconciliation
//     </p>
//   </div>
// )
// const jsx2 = (
//   <div>
//     <div>hello vue</div>
//     {/* <p>
//       hi reconciliation
//     </p> */}
//   </div>
// )
// render(jsx, root)

// setTimeout(render.bind(null, jsx, root), 2000)
// setTimeout(() => {
//   render(jsx2, root)
// }, 2000)

class Greeting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'react'
    }
  }
  render() {
    return (
      <div>
        greeting component, { this.props.title }
        <p>
          name: {this.state.name}
        </p>
        <button onClick={() => { this.setState({ name: 'vue' }) }}>click</button>
      </div>
    )
  }
}

// function FnComponent(props) {
//   return <div>function component, { props.title }</div>
// }

render(<Greeting title="helio" />, root)