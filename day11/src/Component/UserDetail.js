import React from 'react'

function UserDetail(props) {
    return (
        <div>
            <h1>{props.user.id}</h1>
            <h1>{props.user.title}</h1>
        </div>
    )
}

export default UserDetail
