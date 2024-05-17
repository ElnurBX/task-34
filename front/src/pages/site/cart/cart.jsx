import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
const Cart = () => {
    const {basket, addBasket, deleteBasket } = useContext(MainContext)
    return (
    <div>
        <>
            <Helmet>
                    <title>cart</title>
            </Helmet>
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">image</th>
                        <th scope="col">title</th>
                        <th scope="col">discrip</th>
                        <th scope="col">price</th>
                        <th scope="col">-</th>
                        <th scope="col">count</th>
                        <th scope="col">+</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                {
                    basket.map((item,index) => {
                        return (
                            <tr key={index}>
                                <td scope="col">{index}</td>
                                <td scope="col"><img src={item.item.image} width={"60px"} height={"60px"} alt="" /></td>
                                <td scope="col">{item.item.title}</td>
                                <td scope="col">{item.item.description}</td>
                                <td scope="col">{item.item.price}</td>
                                <td scope="col"><button className='btn btn-danger' onClick={() => deleteBasket(item.item)}>-</button></td>
                                <td scope="col">
                                    {item.count}
                                </td>
                                <td scope="col">
                                <button className='btn btn-primary' onClick={() => addBasket(item.item)}>+</button>
                                </td>

                            </tr>
                        );
                    })
                }

                    </tbody>
                    </table>
                </div>   
        </>
    </div>
    )
}

export default Cart