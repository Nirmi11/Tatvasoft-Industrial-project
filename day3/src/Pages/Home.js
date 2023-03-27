import React, { Component } from 'react'
import Title from '../Component/Title'
export class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         title:"",
         Description:""
      }
    }
    onChange()
  {
    this.setState({
        title:"tamasha",
        Description:"it is an amazing movie"
    })
    //   alert(`${this.state.title}  , ${this.state.Description}`)
   
  }

  render() {
    return (
     <>
      <button onClick={()=>this.onChange()}>Click me</button>
        <Title state1={this.state.title} state2={this.state.Description}/>
     
     </>
    )
  }
}

export default Home