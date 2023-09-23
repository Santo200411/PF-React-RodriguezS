import './nav.css'
import {Link} from 'react-router-dom'

const CategoryList = () => {
    return(
        <div className='center'>
            <div className='nav-links'>
                <Link to={`/category/jewelery`} className='links'>Jewelery</Link>
                <Link to={`/category/electronics`} className='links'>Electronics</Link>
                <Link to={`/category/women's clothing`} className='links'>Women's clothing</Link>  
                <Link to={`/category/men's clothing`} className='links'>Men's clothing</Link>  
            </div>
        </div>
    )
}

export default CategoryList