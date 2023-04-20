import React,{useEffect} from 'react';

function Cleanup() {
  useEffect(() => {
    console.log("hello");
  
    return () => {
      console.log("unmounting");
    }
  }, [])
//   return(<div>Hello world</div>)
}

export default Cleanup