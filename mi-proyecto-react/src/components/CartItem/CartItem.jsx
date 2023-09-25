import "./cartItem.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { Link } from "react-router-dom";

const CartItem = ({ id, title, quantity, price }) => {

  const subtotal = price * quantity

  return (
    <section className="cartItem">
      <div>
        <h2> {title} </h2>
      </div>

      <div>
        <p>Quantity: {quantity}</p>
      </div>

      <section>
        <p>Price P/U: ${price}</p>
      </section>

      <div>
        <p>Subtotal: ${subtotal}</p>
      </div>

      <button></button>
    </section>
  );
};

export default CartItem