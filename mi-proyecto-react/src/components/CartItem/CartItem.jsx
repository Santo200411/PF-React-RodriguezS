import './cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartItem = ({}) =>{

    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0 ){
        return(
            <div className='cart'>
                <h1> No hay items en el carrito, </h1>
                <Link to='/' className='option'> Volver al Inicio </Link>
            </div>
        )
    }
    return(
        <div className='cart'>
            { cart.map(p => <CartItem key= {p.id} {...p}/> )}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='button'>Limpiar carrito</button>
            <Link to='/checkout' className='option'>Go to Checkout</Link>
         </div>
    )
}

export default CartItem