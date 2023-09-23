import { useEffect, useState } from 'react'
import './itemListContainer.css'
import { getProductByCategory, getProducts } from '../asyncMock'
import ItemList from '../ItemList/ItemList.jsx'
import {useParams} from 'react-router-dom'
import { db } from '../../firebase/client.jsx'
import { getDocs, collection, query, where, limit, getDoc, doc} from 'firebase/firestore'


const ItemListContainer =({}) =>{
  
    const [ products, setProducts] = useState([])
    const { categoryId }  = useParams()
    const [ filteredProducts, setFilteredProducts] = useState(null)
/*     const productRef = doc(db, 'products', '2z54SFc5WeXtw8TDnY56')
 */
        useEffect(() =>{
            getProducts().then(data => setProducts(data))
        }, [])

        
        useEffect(() =>{
           
            if (categoryId){

                const filterProducts = products.filter(prod =>prod.category === categoryId)
                setFilteredProducts(filterProducts)
             } else {
                setFilteredProducts(null)
             }

        }, [categoryId, products])

        
        const productsList = filteredProducts ? filteredProducts : products;

        return(
            <main className='itemListContainer'>
                <ItemList products= {productsList}  />
            </main>
    )
}

export default ItemListContainer