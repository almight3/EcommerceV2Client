import { useEffect } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar"
import Cart from './Page/Cart/Cart';
import Products  from "./Page/Products/Products";
import ProductDetails from './Page/Products/ProductDetails';
import Signup from './Page/Auth/Signup';
import Login from "./Page/Auth/Login";
import {loadUser} from "./Actions/User"
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import {store}  from "./App/Store"
import Shiping from './Page/Cart/Shiping/Shiping';
import ConformOrder from './Page/Cart/ConformOrder/ConformOrder';
import PaymentForm from './Page/Cart/Payment/PaymentForm';
import Success from "./Page/Cart/Success"
import Footer from "./Component/Footer/Footer"
import Home from './Page/Home/Home';
import Favourite from './Page/Favourite/Favourite';
function App() {
  useEffect(()=>{
  store.dispatch(loadUser());
  },[])
  
  
  return (
  <div className='bg-base-100 z-0 box-content'>
      <BrowserRouter>
         <Navbar />
         <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products/>} />
          {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
          {/* <Route path="/products/:keyword" element={<Products />} /> */}
          <Route path="/products/:search" element={<Products />} />
          <Route path="/products/anime/:category" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path = "/signup" element={<Signup />} />
          <Route path="*" element= <Navigate to="/home" /> />
          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/shiping" element={<Shiping />} />
            <Route path="/conform/order" element={<ConformOrder />} />
            <Route path="/process/payment" element={<PaymentForm />} />
            <Route path="/success" element={<Success />} />
          </Route>
          </Routes>
        <Footer />  
          
            
          
    </BrowserRouter>
  </div>
  )
}

export default App