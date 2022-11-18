import React from 'react';
import "./conformOrder.css";
function ShipingInfo({address,userName,phoneNo,price,quantity,item}) {
  
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
   </>
  )
}

export default ShipingInfo