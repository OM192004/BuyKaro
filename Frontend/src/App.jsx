import './App.css'
import LoginPage from './components/Auth/Login'
import SignInPage from './components/Auth/Signin'
import HomePage from './pages/HomePage'
import { Routes, Route, Router } from 'react-router'
import ProductPage from './pages/ProductPage'
import YourAccount from './pages/YourAccount'
import ProductDetailPage from './components/Products/ProductDetail'
import CartPage from './pages/CartPage'
import ContactUs from './pages/ContactUs'
import OrderPage from './pages/OrderPage'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import AddressPage from './pages/AddressPage'
import AddPaymentMethods from './components/Payment/Payment'


function App() {

  return (
    <div>
      
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/youracc' element={<YourAccount />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/youraddress' element={<AddressPage />} />
        </Routes>
        <Navbar />
        <AddPaymentMethods />
        <Footer />
      {/* 
      */}
    </div>
  )
}

export default App
