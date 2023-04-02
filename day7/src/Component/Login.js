import React, { Component } from 'react'
import './style.css'
class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Username:"",
         email:"",
         password:""

      }
    }
    UsernameHandler=(event)=>
    {
        this.setState({
            Username: event.target.value
        })
    }
    emailHandler=(event)=>
    {
        this.setState({
            email: event.target.value
        })
    }
    passwordHandler=(event)=>
    {
        this.setState({
            password: event.target.value
        })
    }
    SubmitHandler =(event) =>
    {
        
            alert(` ${this.state.Username} ${this.state.email} ${this.state.password}`)
            event.preventDefault()
      
    }
  render() {
    return (
        <div>
      <form  className="form"onSubmit = {this.SubmitHandler}>
           <h1 className="heading">Login Form</h1>
        <div className="userdiv">
            <lable>Username:</lable>
            <input type="text" value={this.state.Username} onChange={this.UsernameHandler}/>
        </div>
        <div>
            <lable>Email:</lable>
            <input type="text" value={this.state.email} onChange={this.emailHandler}/>
        </div>
        <div>
            <lable>password:</lable>
            <input type="text"value={this.state.password} onChange={this.passwordHandler}/>
              
        </div>
        <button className='submit' type='submit'>Login </button>
      </form>
      </div>
    )
  }
}

export default Login