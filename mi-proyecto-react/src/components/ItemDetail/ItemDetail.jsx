import './itemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({id, title, image, price, description, stock}) =>{

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, title, price
        }

        addItem(item, quantity)
    }
    return(
        <article>
            <div className="grid-ItemDetail">
                <div className="img-ItemDetail">
                    <picture>
                        <img src={image} alt={title}/>
                    </picture>
                </div>

                <div className="desc-ItemDetail">
                    <h1> {title} </h1>
                    <p>Precio: ${price}</p>
                    <div> {description} </div>
                </div>
                

                <div className="btn-ItemDetail">
                    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Productos agregados', quantity)} />
                </div>
            </div>
        </article>
    )
}

export default ItemDetail