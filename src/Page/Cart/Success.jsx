import {useEffect} from 'react';
import SuccessLogo from "../../image/success-12.svg";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {clearCartItems} from "../../Actions/Cart";
import FormStepper from '../../Component/Stepper/FormStepper';
import {Helmet} from "react-helmet";

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
       <Helmet>
          <meta charSet="utf-8" />
          <title>Payment Success</title>
       </Helmet>
        <FormStepper step={3} />
        <img src={SuccessLogo} alt="Payment-Success-logo" className='w-24 mx-auto mt-20 my-8 ' />
        <p className='text-2xl font-semibold text-center mb-20'>Your Order has been Placed Successfully</p>
    </>
  )
}

export default Success