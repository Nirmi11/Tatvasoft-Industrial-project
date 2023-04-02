import React from 'react'
import './style.css'
 function Title(props) {
  return (
    <>
    <h1>{props.title}</h1>
    <p>{props.desc}</p>
    </>
  )
}
export default Title