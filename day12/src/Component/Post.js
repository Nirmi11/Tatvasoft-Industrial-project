
import React, { Component } from 'react'
import axios from 'axios'
export class Post extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:"",
         title:"",
         body:""
      }
    }
    changeHandler=(e)=>
    {
         this.setState({
          [ e.target.name]: e.target.value
         })
         
         
    }
    Submithandler=(e)=>
    {
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=> 
            {
                console.log(response.data)
            })
        .catch(err=>
            {
                console.log(err)
            })
        e.preventDefault();
    }
  render() {
    const {userId,title,body}=this.state
    return (
        <div>
      <form onSubmit={this.Submithandler}>
        <div>
          <div> userId: <input type="text" name="userId" value={userId} onChange={this.changeHandler}/></div>
          <div> title: <input type="text" name="title" value={title} onChange={this.changeHandler}/></div>
          <div> body: <input type="text" name="body" value={body} onChange={this.changeHandler}/></div>
           <button type="submit" >click</button>
</div>
</form>
</div>


     
    )
  }
}

export default Post