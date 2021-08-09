import { sheduleUpdate } from '../reconciliation'

export class Component {
  constructor(props) {
    this.props = props
  }
  setState(partialState) {
    sheduleUpdate(this, partialState)
  }
  render() {}
}