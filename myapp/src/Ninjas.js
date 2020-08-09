import React, { Component } from 'react'

export class Ninjas extends Component {
    render() {
        // console.log(this.props);
        const { name, age, belt } = this.props;
        return (
            <div className='ninjas'>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Belt: {belt}</p>
            </div>
        )
    }
}

export default Ninjas;
