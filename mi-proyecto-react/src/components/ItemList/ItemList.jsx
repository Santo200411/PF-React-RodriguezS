import './itemList.css'
import Item from '../Item/Item.jsx'

const ItemList = ({products}) =>{
    return(
        <>
            {products?.map(prod => <Item key= {prod.id} {...prod} /> )}
        </>
    )
}

export default ItemList