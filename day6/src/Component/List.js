import React from 'react'
import Title from './Title'
export default function List() {
    const array = [
        {
            id: 1,
            title: "Tamasha",
            description: "released on 27th November"

        },
        {
            id: 2,
            title: "Rockstar",
            description: "released on 11th November"

        },
        {
            id: 3,
            title: "Dear Zindagi",
            description: "released on 25th November"

        }



    ]

    return (
        <>
            <div>
                {
                  array.map(movie => <Title Title={movie} />)
                }
            </div>

        </>
    )
}
