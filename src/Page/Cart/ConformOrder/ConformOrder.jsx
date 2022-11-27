import React,{} from 'react';
import Stepper from "../../../Component/Stepper/FormStepper";
import {useSelector} from "react-redux";
import OrderSummery from '../../../Component/ConformOrder/OrderSummery';
import ShipingInfo from '../../../Component/ConformOrder/ShipingInfo';
import {Oval} from "react-loader-spinner";
import ShipingItemCard from '../../../Component/ConformOrder/ShipingItemCard';
import axios from "axios";
import {ANIMESTOREAPI} from "../../../Service/Service";
import {Helmet} from "react-helmet";

function ConformOrder() {
 const {cartItems} = useSelector((state)=>state.cart);
 const {user,loading,token} = useSelector((state)=>state.user);
 const subtotal = cartItems.reduce((acc,item)=>{
    acc = acc + item.price * item.quantity
    return acc
  },0);
 const shipingInfo = JSON.parse(localStorage.getItem("shipingInfo"))
 const shipingCharge = subtotal > 1500 ? 0 : 200;  
 const tax = subtotal * 0.18; 
 const totalPrice = subtotal + shipingCharge + tax;
 const address = `${shipingInfo?.country}, ${shipingInfo?.state}, ${shipingInfo?.city}, ${shipingInfo?.address}`;
 
 const handelPayment = async()=>{
   
 
  //  const {data:{id}} = await axios.get(`${ANIMESTOREAPI}/api/v1/payment/key`,{
  //   headers: {
  //       "Content-Type": "application/json",
  //       "authorization":`${token}`
  //   }})
   // creating orders
   const {data:{order}} = await axios.post(`${ANIMESTOREAPI}/api/v1/checkout`,{
      amount:Number(totalPrice),
    },{
      headers: {
          "Content-Type": "application/json",
          "authorization":`${token}`
      }}
    )
    // razorpay 
    var options = {
      key:'rzp_test_aFuGXl6epqMAZC',
      amount: 30000,
      currency: "INR",
      name: "IndianOtakuStore",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, 
      callback_url: `${ANIMESTOREAPI}/api/v1/paymentVerfication`,
      prefill: {
          name: user.name,
          email: user.email,
          contact: "9999999999"
      },
      notes: {
          address: "Razorpay Corporate Office"
      },
      theme: {
          color: "#3399cc"
      }
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.open();
     
  
    // sessionStorage.setItem("orderInfo",JSON.stringify(data));
    // navigate("/process/payment")
 }

  return (
    <>
    <Helmet>
          <meta charSet="utf-8" />
          <title>Conform Order</title>
    </Helmet>
    {
    loading? <div className='m-auto my-28 w-28'><Oval 
    height={60}
    width={60}
    color="#000000"
    wrapperStyle={{}}
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor="#4fa94d"
    strokeWidth={1}
    strokeWidthSecondary={1}
   /></div> :
   <>
   <Stepper step={2} />
      <h3 className='mx-auto my-7 text-center text-2xl font-medium'>Conform Order</h3>
      <div className="flex justify-center w-9/12 h-1/5 mx-auto m-1 ">
          <div className="bg-white shadow-xl w-2/4		flex flex-col	m-2 box-content">
              <ShipingInfo 
                  address={address} 
                  userName={user ? user.name : ""} 
                  phoneNo={shipingInfo.number} 
              />
            <div className='h-96	mt-2 border-t-2	 border-stone-700 overflow-auto'>
            {cartItems && cartItems.map((item=><ShipingItemCard item={item} />))}
            </div>
          </div>
          <div className="w-80 h-72	 bg-white shadow-xl m-2 box-content">
            <OrderSummery 
             subtotal={subtotal} 
             shipingCharge={shipingCharge} 
             tax={tax} 
             totalPrice={totalPrice} 
             />
            <button className='p-3 bg-black text-white font-semibold mx-16 mt-5' onClick={()=>handelPayment()}>Proceed to Payment</button>
          </div>
      </div>
      </>
      }
    </>
  )
}

export default ConformOrder;