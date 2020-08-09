import React from 'react'

const Ninjas = (props) => {
    // console.log(this.props);
    const { ninjas } = props;

    const ninjaList = ninjas.map(ninja => {
        return (
            <div className='ninjas' key={ninja.id}>
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

export default Ninjas;
