import './nav.css'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { cart } = useContext(CartContext)

    let cantidad = cart.length

    return(
        <div className='center num'>
            <Link to={`/cart`}>
                <i className="fa fa-shopping-cart"></i> 
                <p id='numCarrito' className='num'>{cantidad}</p>
            </Link>
        </div>
    )
}

export default CartWidget