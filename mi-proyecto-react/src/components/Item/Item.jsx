import './item.css'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { Link } from 'react-router-dom'
/* import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal) */
/* let agregarBtn = document.getElementById('agregarBtn')

agregarBtn.addEventListener("click", () => {
   
})

let productosEnCarrito
if(localStorage.getItem("carrito")){
   productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
   productosEnCarrito = []
   localStorage.setItem("carrito", productosEnCarrito)
} */

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
                <ItemCount initial={1} stock={10} id='agregarBtn' />
            </section>

            <section className='padding'>
                <Link to={`/item/${id}`} className='Option'> See Details </Link>
            </section>
        </article>
    )
}

export default Item