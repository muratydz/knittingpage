import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Navbar from './component/Navbar/Navbar'
import AllProductPage from './pages/AllProductPage'
import NotFoundPage from './pages/NotFoundPage'
import ProductAbout from './component/ProductAbout/ProductAbout'


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product' element={<AllProductPage />} />
        <Route path='product-about/' element={<ProductAbout />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
