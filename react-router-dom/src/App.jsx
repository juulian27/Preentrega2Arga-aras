import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import CardDetail from './components/CardDetail'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'

function App() {
  const [productos, setProductos] = useState([])

  useEffect (() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => {
        setProductos(data)
      })
  }, [])

  console.log(productos);
  return (
    <div>
      <Navbar />
        <h1>Tienda Online</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path='/products' element={<ProductList productos={productos} />} />
        <Route path='/products/:id' element={<CardDetail />}></Route>
      </Routes>
    </div>
    
  )
}

export default App
