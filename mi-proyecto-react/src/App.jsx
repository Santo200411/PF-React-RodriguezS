import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/nav/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {

 
  return (
        <BrowserRouter>
                <NavBar/>
                <Routes>
                        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                        <Route path='/' element={<ItemListContainer/>}/>
                        <Route path='*' element={ <h1> 404 NNOT FOUND </h1>}/>
                </Routes>
        </BrowserRouter>
   );
}

export default App;
