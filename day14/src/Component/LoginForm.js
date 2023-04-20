import React, {useState}from 'react'

 function LoginForm() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
 const submitHandller=(e)=>
 {
    alert(`${email},${password}`)
    e.preventDefault()
 }

 
    return (
    <div>
        <form>
          <div>
            Email-<input type="email" name="email" onChange={e=>setEmail(e.target.value)} />
            </div>  
          <div>
            Password-<input type="password" name="password" onChange={e=>setPassword(e.target.value)} />
            </div>  
              
          <button type="submit" onClick={submitHandller}>Submit</button>
        </form>
    </div>
  )
}
export default LoginForm