import React from 'react'
import './Mailsection.scss'
const Mailsection = () => {
    return (
        <section className='mailsection text-center mb-3'>
            <div className="container">
            <h5 className='text-danger'>JOIN OUR NEWSLETTER</h5>
            <h2 className='display-1'>Subscribe to get Updated <br /> with new offers</h2>
            <div className="input-group d-flex justify-content-center mt-5">
                <input type="text" />
                <button className='btn btn-danger'>SUBSCRIBE NOW</button>
            </div>
            </div>
        </section>
    )
}

export default Mailsection