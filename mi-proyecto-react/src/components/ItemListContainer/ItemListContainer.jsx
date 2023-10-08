import { useEffect, useState } from 'react'
import './itemListContainer.css'
import ItemList from '../ItemList/ItemList.jsx'
import {useParams} from 'react-router-dom'
import { db } from '../../firebase/client.jsx'
import { getDocs, collection, query, where} from 'firebase/firestore'


const ItemListContainer =({}) =>{
  

    const { categoryId }  = useParams()
    const [ filteredProducts, setFilteredProducts] = useState(null)  
    
        
        useEffect(() =>{
           
            const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db,'products')

            getDocs(collectionRef)
                .then(response =>{
                    const productsAdapted = response.docs.map(doc =>{
                        const data = doc.data()
                        return {id: doc.id, ...data}
                    })
                    setFilteredProducts(productsAdapted)
                })
            
        }, [categoryId])

        
        const productsList = filteredProducts

        return(
            <main className='itemListContainer'>
                <ItemList products= {productsList}  />
            </main>
    )
}

export default ItemListContainer