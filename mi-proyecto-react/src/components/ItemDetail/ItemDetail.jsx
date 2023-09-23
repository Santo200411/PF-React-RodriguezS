import './itemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'

const ItemDetail = ({id, title, image, price, description, stock}) =>{
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