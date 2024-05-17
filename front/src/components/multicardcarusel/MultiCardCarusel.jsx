import React, { useState } from 'react'
import Cards from '../cards/Cards'
import './MultiCardCarusel.scss'
const MultiCardCarusel = ({data ,cut}) => {
    const [loc ,setloc] =useState(0)
    return (
        <section className='multi-card-carusel'>
            <div className="container">
                <div className="multi-card-carusel__title d-flex justify-content-between">
                    <h1>Awesome </h1>
                    <div className="multi-card-carusel__button">
                        <button onClick={() => setloc(loc - 100)} >next</button>
                        <button onClick={() => setloc(loc + 100)}>prevuouse</button>
                    </div>
                </div>
                <div className="multi-card-carusel__masive  " >
                    <div style={{transform:`translateX(-${loc}%)`}}>
                    <Cards cut={cut} data={data}/>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default MultiCardCarusel