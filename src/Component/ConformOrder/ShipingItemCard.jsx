import React from 'react'
import {useDispatch} from 'react-redux';
import {removeFromCart} from "../../Actions/Cart";
function ShipingItemCard({item}) {
  const dispatch = useDispatch();
  const handelRemove = ()=>{
       dispatch(removeFromCart(item.id))
  }
  return (
   
    <div className='border-b-2	 border-stone-700'>
      <div className='flex justify-around items-center p-3 m-2  '>
         <img src={item.image} alt="cart iem" className='w-28 h-24 object-cover ' />
        <div className='flex flex-col justify-center items-center'>
        <p className='text-sm'>{item.name}</p>
        <button className='btn-remove font-medium text-sm m-3 w-20' onClick={handelRemove} >Remove</button>
        </div>
        <p className='font-medium'>{item.price} x {item.quantity}</p>
       </div>
    </div>
  )
}

export default ShipingItemCard