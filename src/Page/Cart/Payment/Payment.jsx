import {useState,useEffect} from 'react'
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
  loadStripe,
  Elements
  } from '@stripe/react-stripe-js';
import FormStepper from '../../../Component/Stepper/FormStepper';
import {useSelector,useDispatch} from "react-redux";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {createOrder} from "../../../Actions/order";

function Payment() {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const {user} = useSelector((state)=>state.user);
  const {shipingInfo,cartItems} = useSelector((state)=>state.cart);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [stripeApikey,setStripeApiKey] = useState();

  // useEffect(()=>{
  // const getStripeApiKey = async()=>{
  //   const {data} = await axios.get("/api/v1/paymentsapikey");
  //   setStripeApiKey(data.stripeApiKey)
  // };
  // getStripeApiKey(); 
  // },[])
  
  
  const paymentData = {
    amount :Math.round(orderInfo.totalPrice * 100),
  }

  const order = {
   shipingInfo,
   orderItems:cartItems,
   itemPrice:orderInfo.subtotal,
   taxPrice:orderInfo.tax,
   shipingPrice:orderInfo.shipingPrice,
   totalPrice:orderInfo.totalPrice
  }
 
  const submitHandler = async (e)=>{
    e.preventDefault();
    navigate("/success")
  //   console.log(paymentData.amount)
  //  try {
  //   const {data} = await axios.post('/api/v1/payments',{
  //   amount:paymentData.amount
  //   },
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  // }
  //  )
  
  // const client_secret = data.client_secret;

  // if(!stripe || !elements){
  //   return
  // }
  // const result = await stripe.confirmCardPayment(client_secret,{
  //  payment_method:{
  //     card:elements.getElement(CardNumberElement),
  //     billing_details:{ 
  //      name:user.name,
  //      email:user.email,
  //      address:{
  //       line1: shipingInfo.address,
  //       city: shipingInfo.city,
  //       state: shipingInfo.state,
  //       postal_code: shipingInfo.pincode,
  //       country: shipingInfo.country,
  //      }  
  //    }}
  //  })

  //  if(result.error){
  //   toast.error(result.error.message)
  //  }
  //  else{
  //   if(result.paymentIntent.status === "succeeded"){
  //     order.paymentInfo = {
  //       id:result.paymentIntent.id,
  //       status:result.paymentIntent.status
  //     };
  //     console.log(order)
  //     dispatch(createOrder(order))
  //     navigate("/success")
  //   }
  //   else{
  //     toast.error("Error while processing payment")
  //   }
  //  };
  // }
  // catch(error){
  //   console.log(error)
  // toast.error(error.response.data.message);
  // }
};
 
return (
    <div>
       
       <FormStepper step={3} />
        <form className='flex flex-col place-items-center mt-7' onSubmit={(e)=>{submitHandler(e)}}>
          <h1 className='text-xl m-5 font-semibold'>Payments</h1>
          <div className='m-2'>
           <labe className="text-xs text-gray-400" >Card Number</labe>
           <CardNumberElement className='px-4 py-3 bg-white w-64 shadow'  />
          </div>
          <div className='m-2'>
           <labe className="text-xs text-gray-400" > Card Expire</labe>
           <CardExpiryElement  className='px-4 py-3 bg-white w-64 shadow' />
          </div>
          <div className='m-2'>
           <labe className="text-xs text-gray-400" >CVV</labe>
           <CardCvcElement  className='px-4 py-3 bg-white w-64 shadow' />
          </div>
          <button type="submit" className='px-4 py-2 my-4 bg-black text-white w-36 text-lg font-semibold'>Pay</button>
        </form>
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </div>
  )
}

export default Payment