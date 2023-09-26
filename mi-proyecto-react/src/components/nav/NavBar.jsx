import './nav.css'
import CartWidget from './CartWidget.jsx'
import NavLogo from './NavLogo'
import CategoryList from './CategoryList'
const Navbar = () => {

    return(
        <nav className='nav-grid'>

            <NavLogo className='nav-left-top center'/>

            <div className='nav-center-top center'>
                <input type="text" id="buscador" className='buscador' placeholder="Search..."/>       
                <i className="fa fa-search search-hover"></i>
            </div>
            
            <div className='nav-right-top center'>
                
            </div>

            <div className='nav-left-bottom center'>
               
            </div>

            <CategoryList className='nav-center-bottom center'/>

            <CartWidget className='nav-right-bottom center'/>

        </nav>
    )
}

export default Navbar 