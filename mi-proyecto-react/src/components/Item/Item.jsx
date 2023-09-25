import './item.css'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { Link } from 'react-router-dom'


const Item = ({id, title, image, price, stock}) =>{
    return(

        <article className='card' id={id} >
            <picture>
                <img src={image} alt={title}/>
            </picture>

            <header>
                <h2> {title} </h2>
            </header>

            <section>
                <p>
                    Price: ${price}
                </p>
            </section>

            <section className='padding'>
                <Link to={`/item/${id}`} className='Option'> See Details </Link>
            </section>
        </article>
    )
}

export default Item