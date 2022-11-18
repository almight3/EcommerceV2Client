import {useEffect} from 'react';
import SuccessLogo from "../../image/success-12.svg";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {clearCartItems} from "../../Actions/Cart";
function Success() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
   const timer = setTimeout(()=>{
    navigate("/products")
   },3000)
   dispatch(clearCartItems())
   return ()=>clearTimeout(timer)
   },[navigate,dispatch]) 

  return (
    <>
        <img src={SuccessLogo} alt="Payment-Success-logo" className='w-24 mx-auto mt-44 my-8' />
        <p className='text-2xl font-semibold text-center'>Your Order has been Placed Successfully</p>
    </>
  )
}

export default Success