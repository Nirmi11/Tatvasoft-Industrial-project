import React,{useEffect,useState} from 'react'

function Users(props) {
    const [change, setchangeName]=useState(props.user)
    useEffect(()=>{
        console.log(" useEffect function called!!")
    })
  return (
    <div>
        <h1>{change.name}</h1>
        <h1>{change.id}</h1>

        <button onClick={()=>setchangeName({name:"kiara", id:6})}>click</button>
    </div>
  )
}

export default Users