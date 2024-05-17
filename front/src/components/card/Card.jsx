import React, { useContext } from 'react'
import './Card.scss'
import MainContext from '../../context/context'
import { Link } from 'react-router-dom'
const Card = ({item ,index,}) => {
    const { addBasket } = useContext(MainContext)
  return (
    <div className="col-md-3 col-sm-12">
        <div className="costume__card">
        <img width={"100%"} height={"280px"} src={item.image} alt="" />
            <div className="card__info">
                <Link to={`/detail/${item._id}`} className='h4'>{item.title}</Link>
                <h3>{item.price}</h3>
                <div className="costume__card__btn">
                    <button className='h5' onClick={() => addBasket(item)}> + Add to card</button>
                    <button><i class="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card