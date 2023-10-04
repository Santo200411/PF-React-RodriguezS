import "./checkout.css";
import {db} from '../../firebase/client'
import { useContext, useState } from "react";
import {CartContext} from '../../context/CartContext'
import CheckouForm from '../CheckoutForm/CheckoutForm'
import { Timestamp, addDoc, collection, writeBatch } from "firebase/firestore";

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState()
    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({ name, phone, email}) =>{
        setLoading(true)
        try{
            const objOrder ={
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', id)))
        
            const {docs} = productsAddedFromFirestore
        
            docs.forEach(doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find( prod => prod.id === doc.id )
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock : stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'products')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            }
        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Generando orden de compra</h1>
    }

    if(orderId) {
        return <h1>El id de su compra es: {orderId}</h1>

    }


    return(
        <div>
            <h1>Checkout</h1>
            <CheckouForm onConfirm={createOrder} />
        </div>
    )
};

export default Checkout
