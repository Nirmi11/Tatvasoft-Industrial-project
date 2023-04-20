import React, { Component } from 'react'
import axios from 'axios'
import UserDetail from './UserDetail'
export class Users extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      User:[],
      errormsg:""
   }
 }
 componentDidMount()
 {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        console.log(response);
        this.setState({
           User:response.data
        })

      })
.catch(error=>console.log(error))
 }
    render() {
        const { User,error} = this.state
    return (
      <div>
        {
            User.map((user)=> {return <UserDetail key={user.id} user={user}/>})
        }
        {error}
      </div>

    )
  }
}

export default Users