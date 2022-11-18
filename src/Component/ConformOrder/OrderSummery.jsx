import React from 'react';

function OrderSummery({subtotal,shipingCharge,tax,totalPrice}) {
  return (
    <>
       <p  className='mx-auto mt-3 text-center text-lg font-medium'>Order Summery</p>
       <div className="divider m-1"></div>
       <ul className='flex flex-wrap justify-between mx-4 my-2'>
          <li className='text-sm'>Subtotal:</li>
          <li className='text-sm'>{subtotal}</li>
       </ul>  
       <ul className='flex flex-wrap justify-between mx-4 my-2'> 
          <li className='text-sm'>Shipping Charges:</li>
          <li className='text-sm'>{shipingCharge ? shipingCharge :0}</li>
        </ul>
        <ul className='flex flex-wrap justify-between mx-4 my-2'>
          <li className='text-sm'>GST:</li>
          <li className='text-sm'>{tax}</li>
        </ul>
       <div className="divider m-1"></div>
       <ul className='flex flex-wrap justify-between mx-3'>
         <li className='text-base font-semibold'>Total Amount</li>
         <li className='text-sm font-semibold'>Rs. {totalPrice}</li>
       </ul>
    </>
  )
}

export default OrderSummery;