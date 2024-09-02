import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home.jsx';
import NavBar from './Components/NavBar.jsx';
import Products from './Components/Products.jsx';
import AddProduct from './Components/AddProduct.jsx';
import EditProduct from './Components/EditProduct.jsx';
const App = () => {
  return (
    <div>
      <main>
        <Router>
          <NavBar />
            <section className='container'>
              <Routes>
                  <Route path='' element={<Home />} />
                  <Route path='products' element={<Products />} />
                  <Route path='addproduct' element={<AddProduct />} />
                  <Route path='editproduct/:id' element={<EditProduct />} />
              </Routes>
            </section>
        </Router>
      </main>
    </div>
  )
}

export default App
