import React from 'react';

function Title(props) {
    return (
        <div>
            <h2>{props.movie.title} :-{props.movie.desc}</h2>
           
        </div>
    )
}
export default Title;