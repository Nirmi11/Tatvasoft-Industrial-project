import React, { Component } from 'react'

 class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       number:0
    }
  }
  Increment=()=>
  {
  this.setState({
    number:this.state.number+1
  })

  }
  render() {
    return (
      <>
      <div>{this.state.number}</div>
      <button onClick={this.Increment}>Click me</button>
      </>
    )
  }
}

export default Counter