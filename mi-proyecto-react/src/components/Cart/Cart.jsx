import "./cart.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem'
const Cart = ({ id }) => {


  const { cart, clearCart, total} = useContext(CartContext)

  if(cart.length === 0 ){
      return(
          <div className='cart'>
              <h1> No hay items en el carrito. </h1>
              <Link to='/' className='option'> Volver al Inicio </Link>
          </div>
      )
  }
  return(
      <div className='cart'>
          { cart.map(p => <CartItem key= {p.id} {...p}/> )}
          <h3>Total: ${total()}</h3>
          <button onClick={() => clearCart()} className='option'>Clear cart</button>
            <Link to='/checkout' className='option' >Go to Checkout</Link>
       </div>
  )
};

export default Cart
