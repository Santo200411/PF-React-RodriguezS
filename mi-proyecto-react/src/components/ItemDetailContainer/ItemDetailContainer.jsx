import { useEffect, useState } from "react";
import "./itemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProducts } from "../asyncMock";
const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    console.log(itemId, products);
    if (itemId) {
      const filterProduct = products.find((prod) => prod.id == itemId);
      console.log('holacomoestas', filterProduct)
      setProduct(filterProduct);
      console.log(product);
    } else {
      setProduct(null);

    }
  }, [itemId, products]);

  return (
    <main className="itemDetailContainer">
      <ItemDetail {...product} />
    </main>
  );
};

export default ItemDetailContainer;
