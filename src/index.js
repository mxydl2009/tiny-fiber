import React from './react'
import { render } from './react' 

const root = document.getElementById('root')
const jsx = (
  <div>
    <p>hello react</p>
    <p>
      hi reconciliation
    </p>
  </div>
)

render(jsx, root)