import React,{useState} from 'react'
import "./CartItem.css";
import {useDispatch} from "react-redux";
import {removeFromCart,changeQuantity} from "../../Actions/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CartItem({items}) {

  console.log(items)
  const dispatch = useDispatch();
  const [quantity,setQuantity] = useState(1);
  const increaseQuantity = ()=>{
       dispatch(changeQuantity(items.id,quantity + 1))
       setQuantity(quantity + 1)
       toast.success("Item quantity Changed")

  }
  const decreaseQuantity = ()=>{
    if(quantity>1){
      dispatch(changeQuantity(items.id,quantity - 1))
      setQuantity(quantity - 1)
      toast.success("Item quantity Changed")
    }     
  }


 const handelRemove = ()=>{
     dispatch(removeFromCart(items.id))
     toast.success("Item removed from Cart")
}

  return (
    <>
      <div className='border border-slate-100'>
       <div className='flex justify-around items-center	 m-7'>
         <img src={items.image} alt="cart item" className='w-20' />
        <div>
        <p className='font-semibold'>{items.name}</p>
        <span className='font-semibold'>Quantity</span>
           <button className='px-1.5 mx-6 my-3 bg-gray-200 rounded-full font-medium'
           onClick={()=>increaseQuantity()}>+</button>
           <input type="number" className="w-7 font-medium" value={quantity}/>
           <button className='px-2 m-3 bg-gray-200 rounded-full font-medium'
            onClick={()=>decreaseQuantity()}>-</button>
           <button className='btn-remove font-medium text-sm' onClick={()=>handelRemove()}>Remove</button>
        </div>
        <p className='font-medium'>Rs. {items.price}</p>
       </div>
    </div>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="dark"
    />
    </>
  )
}

export default CartItem