import './nav.css'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    let total = 0
    
    if (totalQuantity() > 0){
        total = totalQuantity()
    } 

    return(
        <div className='center num'>
            <Link to={`/cart`}>
                <i className="fa fa-shopping-cart"></i> 
                <p id='numCarrito' className='num'>{total}</p>
            </Link>
        </div>
    )
}

export default CartWidget