import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import MainContext from '../../../context/context';

const Details = () => {
    const { addBasket } = useContext(MainContext);
    const { id } = useParams();
    const [detail, setDetail] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/Product/${id}`)
            .then(res => setDetail(res.data))
            .catch(err => setError(err));
    }, [id]);

    if (error) {
        return <div>Error loading product details.</div>;
    }

    if (!detail) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Helmet>
                <title>Details</title>
            </Helmet>
            <main>
                <div className="container">
                    <div className="row m-5">
                    <div className="col-6"><img width={"100%"} height={"280px"} src={detail.image} alt={detail.title} /></div>
                    <div className="card__info col-6">
                        <h4 className='h4'>{detail.title}</h4>
                        <h3>{detail.price}</h3>
                        <p>{detail.description}</p>
                        <div className="costume__card__btn">
                            <button className='h5' onClick={() => addBasket(detail)}> + Add to cart</button>
                            <button><i className="fa-regular fa-heart"></i></button>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Details;
