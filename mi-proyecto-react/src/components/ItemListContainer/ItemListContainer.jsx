import { useEffect, useState } from 'react'
import './itemListContainer.css'
import { getProductByCategory, getProducts } from '../asyncMock'
import ItemList from '../ItemList/ItemList.jsx'
import {useParams} from 'react-router-dom'

const ItemListContainer =({greeting}) =>{
  
    const [ products, setProducts] = useState([])
    const { categoryId }  = useParams()
    const [ filteredProducts, setFilteredProducts] = useState(null)


        useEffect(() =>{
            getProducts().then(data => setProducts(data))
        }, [])

        function useFilters() {

        }
        
        useEffect(() =>{
           
            if (categoryId){

                const filterProducts = products.filter(prod =>prod.category === categoryId)
                setFilteredProducts(filterProducts)
                console.log('1')
             } else {
                setFilteredProducts(null)
                console.log('2')
             }
             console.log(categoryId)

        }, [categoryId, products])

        
        const productsList = filteredProducts ? filteredProducts : products;

        return(
            <main className='itemListContainer'>
                <ItemList products= {productsList}  />
            </main>
    )
}

export default ItemListContainer