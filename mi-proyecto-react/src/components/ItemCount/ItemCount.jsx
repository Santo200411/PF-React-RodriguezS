import './itemCount.css'
import {useState} from 'react'


/* let numCarrito = document.getElementById('numCarrito')

numCarrito.addEventListener("click", () => {
    let cantidadTotal = cantidadTotal + quantity
    cantidadTotal.innerText(quantity)
}) */

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return(

        <div className="Counter">
        
            <div>
                <button id='addItem' disabled={!stock}>
                    Add to cart
                </button>
            </div>
        
            <div className="Controls">
                <button className="Button" onClick={decrement}> - </button>
                <h4 className="Number">{quantity}</h4>
                <button className="Button" onClick={increment}> + </button>
            </div>

        </div>


    )


}

export default ItemCount