import "./cart.css";

const Cart = ({ id }) => {

  return (
    <article className="card" id={id}>
      <picture>
        <img src={image} alt={title} />
      </picture>

      <header>
        <h2> {title} </h2>
      </header>

      <section>
        <p>Price: ${price}</p>
      </section>
    </article>
  );
};

export default Cart
