import React from 'react';
import "./conformOrder.css";
import {useDispatch} from 'react-redux';
import {removeFromCart} from "../../Actions/Cart";
function ShipingInfo({address,userName,phoneNo,price,quantity}) {
  const dispatch = useDispatch();
  
  return (
   <>
    <p className='mx-5 mt-3 text-lg font-medium'>ShipingInfo</p>
     <ul className='flex flex-wrap mx-4 my-1'>
         <li className='text-sm mx-1'>Name:</li>
         <li className='text-sm mx-1'>{userName}</li>
     </ul>
     <ul className='flex flex-wrap  mx-4 my-1'>
         <li className='text-sm mx-1'>Phone:</li>
         <li className='text-sm mx-1'>{phoneNo}</li>
     </ul>
     <ul className='flex flex-wrap mx-4 my-1'>
         <li className='text-sm mx-1'>Address:</li>
         <li className='text-sm mx-1'>{address}</li>
     </ul>
     <div className='mt-4'>
       <div className='flex justify-around p-3 m-2'>
         <img src='https://rukminim1.flixcart.com/image/416/416/koq33ww0/scrub/g/8/e/100-de-tan-face-scrub-tan-removal-face-scrub-for-glowing-skin-original-imag34hnr5t9adzk.jpeg?q=70' alt="cart image" className='w-14' />
        <div>
        <p className='text-sm'>QUAT De-Tan Face Scrub</p>
        <button className='btn-remove font-medium text-sm m-3' >Remove</button>
        </div>
        <p className='font-medium'>{price} x {quantity}</p>
       </div>
       <div>
          
       </div>
    </div>
   </>
  )
}

export default ShipingInfo