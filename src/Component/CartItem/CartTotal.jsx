import React,{useState,useEffect} from 'react'
import "./CartItem.css"
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';

function CartTotal() {
 
  const {cartItems} = useSelector((state)=>state.cart)
  const [totalAmount,setTotalAmount]  = useState(1);
  
  useEffect(() => {
    const totalAmount = cartItems.reduce((acc,item)=>{
      acc = acc + item.price * item.quantity;
      return acc
    },0)
    setTotalAmount(totalAmount)
    
  },[cartItems]);
 
 return (
    <div>
         <h3 className='text-xl m-4'>Price Details</h3>
          <hr></hr>
          <ul className='m-4 flex justify-between'>
            <li className='text-sm	'>Price ({cartItems.length} items)</li>
            <li className='text-sm font-semibold'> Rs.{totalAmount}</li>
          </ul> 
          <ul className='m-4 text-sm'>
            <li>Delivery By  by Fri Oct 14</li>
          </ul> 
          <hr></hr>
          <ul className='m-4 flex justify-between'>
            <li className='text-lg font-semibold'>Total Price</li>
            <li className='text-sm font-semibold'> Rs. {totalAmount}</li>
          </ul> 
          <hr></hr>
          <Link to="/shiping"><button className='btn-placeorder font-bold text-base'>Checkout</button></Link>
    </div>
  )
}

export default CartTotal