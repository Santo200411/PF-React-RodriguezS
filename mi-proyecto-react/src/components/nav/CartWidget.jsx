import './nav.css'
const cartWhite = 'https://w7.pngwing.com/pngs/139/420/png-transparent-white-shopping-cart-illustration-shopping-cart-computer-icons-white-cart-simple-miscellaneous-angle-white.png'
const imgPath2 = 'https://cdn-icons-png.flaticon.com/512/263/263142.png'

const CartWidget = () => {
    return(
        <div className='center cart'>
            <i className="fa fa-shopping-cart"></i> 
            <p id='numCarrito'>0</p>
        </div>
    )
}

export default CartWidget