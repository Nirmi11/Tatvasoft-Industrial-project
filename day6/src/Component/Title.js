import React from 'react'

export default function Title(props) {
  return (
    <div>
            <h1>{props.Title.title}</h1>
            <p>{props.Title.description}</p>
        </div>
  )
}
