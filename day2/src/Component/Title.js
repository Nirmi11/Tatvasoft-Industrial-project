import React from 'react'

  function Title(props) {
  return (
    <>
    {/* <div>It is a functional Component in  Title .js file</div> */}
   
    <h1>hello {props.text1} </h1>
    <h1>hello {props.text2} </h1>
    <h1>hello {props.text3}  </h1>


    </>
  )
}
export default Title