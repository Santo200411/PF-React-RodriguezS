import './nav.css'
import {Link} from 'react-router-dom'

const CategoryList = () => {
    return(
        <div className='center'>
            <div className='nav-links'>
                <Link to={`/category/jewelery`} className='links'>Jewelery</Link>
                <Link to={`/category/electronics`} className='links'>Electronics</Link>
                <Link to={`/category/clothing`} className='links'>Clothing</Link>  
            </div>
        </div>
    )
}

export default CategoryList