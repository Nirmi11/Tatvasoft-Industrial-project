import React, { Component } from 'react';
import Title from '../Title';
class Home extends Component {
    movies = [
        {
            title: "Tamasha",
            desc: "released on 27 november"
        },
        {
            title: "RockStar",
            desc: "released on 11 november"
        },
        {
            title: "Dear zindagi",
            desc: "released on 25 november"
        }
    ]
    render() {
        return (
            <div>
                <h2>This is Home Page</h2>
                {this.movies.map((obj) => {
                    return <Title movie={obj} />
                })}
            </div>
        )
    }
}
export default Home;