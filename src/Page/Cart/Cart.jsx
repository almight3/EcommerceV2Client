import React from 'react';
import CartItem from '../../Component/CartItem/CartItem';
import CartTotal from '../../Component/CartItem/CartTotal';
import {useSelector} from "react-redux";

function Cart() {
  const {cartItems} = useSelector(state=>state.cart);
  console.log(cartItems)
  return (
    <div className='flex justify-center w-9/12 mx-auto m-1 '>
       <div className='bg-white shadow-xl w-2/4	flex flex-col	m-2'>
          {
             cartItems.length===0 ?<h1 className='w-10/12 m-8 text-center text-2xl font-semibold'>Cart is Empty</h1>   : cartItems.map((items)=>{
              console.log(items)
              return <CartItem items={items}/>
            }) 
            
          }
       </div>
       <div className="w-80 h-72	 bg-white shadow-xl m-2">
          <CartTotal />
      </div>
     
    </div>
  )
}

export default Cart