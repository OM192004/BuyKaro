import './App.css'
import LoginPage from './components/Auth/Login'
import SignInPage from './components/Auth/Signin'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import ProductCard from './components/Products/ProductCard'
import HomePage from './pages/HomePage'
import { Routes, Route, Router } from 'react-router'
import ProductPage from './pages/ProductPage'
import YourAccount from './pages/YourAccount'
import ProductDetailPage from './components/Products/ProductDetail'
import CartPage from './pages/CartPage'


function App() {

  return (
    <div>
      
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/youracc' element={<YourAccount />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>

        <Navbar />
        <ProductDetailPage />
        <Footer /> 
      {/* 
      */}
    </div>
  )
}

export default App
