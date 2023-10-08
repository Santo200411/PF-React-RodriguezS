import { createContext, useState } from "react";
import Swal from 'sweetalert2'


export const CartContext = createContext({
    cart: []
}) 



export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    console.log(cart)

    const totalQuantity = () => {
        let total = 0
        if (cart.length > 0){
            cart.forEach(product => {
                total =  total + product.quantity
                
            });
        }
        return total
    }

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
            Swal.fire({
                icon: 'success',
                title: `El producto "${item.title}" fue agregado al carrito`,
            })
        } else {
            console.error('El producto ya esta en el carrito')
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `El producto "${item.title}" ya fue agregado al carrito`,
            })
        }
    }

    const total = () =>{
        let total = 0
            cart.forEach(product => {
                total =  total + product.quantity * product.price
                
            });
        return total
    }

    const removeItem = (itemId) => {
        if (cart.length > 1){
         const cartUpdated = cart.filter(prod => prod.id !== itemId)
         setCart(cartUpdated)
        } else{
          setCart([])
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) =>{
        return cart.some(prod => prod.id === itemId)
    }

    return(
        <CartContext.Provider value ={{cart, addItem, removeItem, clearCart, total, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
