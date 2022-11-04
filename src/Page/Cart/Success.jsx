import {useEffect} from 'react';
import SuccessLogo from "../../image/success-12.svg";
import {useNavigate} from "react-router-dom";
function Success() {
  const navigate = useNavigate();
   useEffect(()=>{
   const timer = setTimeout(()=>{
    navigate("/home")
   },3000)
   return ()=>clearTimeout(timer)

   },[]) 

  return (
    <>
        <img src={SuccessLogo} alt="Payment-Success-logo" className='w-24 mx-auto mt-44 my-8' />
        <p className='text-2xl font-semibold text-center'>Your Order has been Placed Successfully</p>
    </>
  )
}

export default Success