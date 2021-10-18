import React from 'react'

export default class ClassCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  decrement() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment} type='button'>
          +
        </button>
        <button onClick={this.decrement} type='button'>
          -
        </button>
      </div>
    )
  }
}
