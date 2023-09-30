import "./cartItem.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, title, quantity, price }) => {
  const subtotal = price * quantity;
  
  const { removeItem } = useContext(CartContext);

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

      <button className="trash">
        <i
          className="fa fa-trash"
          aria-hidden="true"
          onClick={() => removeItem(id)}
        ></i>
      </button>
    </section>
  );
};

export default CartItem;
