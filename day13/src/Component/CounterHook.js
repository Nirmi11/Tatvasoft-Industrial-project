import React ,{useState}from 'react'

function CounterHook() {
    const [count,setCount]=useState(0);
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>click {count} times</button>
    </div>
  )
}
export default CounterHook