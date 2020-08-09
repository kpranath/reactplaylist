import React, { Component } from 'react'

export class Ninjas extends Component {
    render() {
        // console.log(this.props);
        const { ninjas } = this.props;

        const ninjaList = ninjas.map(ninja => {
            return (
                <div className='ninjas'>
                    <p>Name: {ninja.name}</p>
                    <p>Age: {ninja.age}</p>
                    <p>Belt: {ninja.belt}</p>
                </div>
            )
        })
        return (
            <div className="ninjaList">
                {ninjaList}
            </div>
        )
    }
}

export default Ninjas;
