import React from 'react'

const Ninjas = ({ ninjas, deleteNinja }) => {
    // console.log(this.props);

    // const ninjaList = ninjas.map(ninja => {
    //     if (ninja.age > 15) {
    //         return (
    //             <div className='ninjas' key={ninja.id}>
    //                 <p>Name: {ninja.name}</p>
    //                 <p>Age: {ninja.age}</p>
    //                 <p>Belt: {ninja.belt}</p>
    //             </div>
    //         )
    //     } else {
    //         return null;
    //     }
    // })

    return (
        <div className="ninjaList">
            {
                ninjas.map(ninja => {
                    return ninja.age > 20 ? (
                        <div className='ninjas' key={ninja.id}>
                            <p>Name: {ninja.name}</p>
                            <p>Age: {ninja.age}</p>
                            <p>Belt: {ninja.belt}</p>
                            <button onClick={() => { deleteNinja(ninja.id) }}>Delete Ninja</button>
                        </div>
                    ) : null;
                })
            }
        </div>
    )
}

export default Ninjas;
