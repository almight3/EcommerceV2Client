import React,{useState} from 'react'
import "./CartItem.css";
import {useSelector,useDispatch} from "react-redux";
import {removeFromCart,changeQuantity} from "../../Actions/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CartItem({item}) {
  const {cartItems} =  useSelector((state)=>state.cart);
  const dispatch = useDispatch();
  
  const [quantity,setQuantity] = useState(1);
  const increaseQuantity = ()=>{
       dispatch(changeQuantity('633d84f3aea27e5cfa76c833',quantity + 1))
       setQuantity(quantity + 1)
       toast.info("Item quantity Changed")

  }
  const decreaseQuantity = ()=>{
    if(quantity>1){
      dispatch(changeQuantity('633d84f3aea27e5cfa76c833',quantity - 1))
      setQuantity(quantity - 1)
      toast.info("Item quantity Changed")
    }     
  }


 const handelRemove = ()=>{
     dispatch(removeFromCart('633d84f3aea27e5cfa76c833'))
     toast.success("Item removed from Cart")
}

  return (
    <>
      <div className='border border-slate-100'>
       <div className='flex justify-around  m-7'>
         <img src='https://rukminim1.flixcart.com/image/416/416/koq33ww0/scrub/g/8/e/100-de-tan-face-scrub-tan-removal-face-scrub-for-glowing-skin-original-imag34hnr5t9adzk.jpeg?q=70' alt="cart image" className='w-20' />
        <div>
        <p className='font-normal	'>QUAT De-Tan Face Scrub,Tan Removal </p>
           <button className='px-1.5 mx-6 my-3 bg-gray-200 rounded-full font-medium'
           onClick={()=>increaseQuantity()}>+</button>
           <input type="number" className="w-7 font-medium" value={quantity}/>
           <button className='px-2 m-3 bg-gray-200 rounded-full font-medium'
            onClick={()=>decreaseQuantity()}>-</button>
           <button className='btn-remove font-medium text-sm' onClick={()=>handelRemove()}>Remove</button>
        </div>
        <p className='font-medium'>Rs. 5000</p>
       </div>
       <div>
          
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