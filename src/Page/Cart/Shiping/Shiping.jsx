import React,{useState} from 'react';
import { Country, State}  from 'country-state-city';
import {useDispatch,useSelector} from "react-redux";
import {shipingInfoData} from "../../../Actions/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormStepper from '../../../Component/Stepper/FormStepper';
import {useNavigate } from 'react-router-dom';

function Shiping() {
 
  const dispatch = useDispatch();
  const {shipingInfo} = useSelector((state)=>state.cart);
  const navigate = useNavigate();
  const [address,setAddress] = useState(shipingInfo.address);
  const [country,setCountry] = useState(shipingInfo.Country);
  const [state,setState] = useState(shipingInfo.state);
  const [city,setCity]   = useState(shipingInfo.city);
  const [pincode,setPinCode] = useState(shipingInfo.pincode);
  const [number,setNumber] = useState(shipingInfo.number);

  const handleSubmit = (e)=>{
  e.preventDefault();
  if(number.length < 10 ){
    toast.error("Number is less then 10")
    return;
  }
  if(number.length > 10 ){
    toast.error("Number is greater then 10")
    return;
  }
  dispatch(shipingInfoData({address,country,state,city,pincode,number}))
  navigate("/conform/order")
  }

  return (
    <div>
     <FormStepper step={1} />
      <form className='flex flex-col items-center m-7' onSubmit={(e)=>handleSubmit(e)}> 
      <h4 className='mx-auto text-center text-2xl font-medium'>Shiping Details</h4>
       <div>
           <div className='flex flex-col'>
              <label className='mx-4 mt-2'>Address</label>
              <input type="text" placeholder='Address' className='p-3 m-1 w-80 shadow' required value={address} onChange={(e)=>setAddress(e.target.value)}  />
           </div> 
           <div className='flex flex-col'>
              <label  className='mx-4 mt-2'>Country</label>
              <select required value={country} className='p-3 m-1 w-80 shadow' onChange={(e)=>setCountry(e.target.value)}>
                 <option>Country</option>
                 {Country &&  Country.getAllCountries().map((item)=>(<option key={item.isoCode} value={item.isoCode}>{item.name}</option>))}
              </select>
           </div> 
            {country && (<div className='flex flex-col'>
              <label  className='mx-4 mt-2'>State</label>
              <select value={state} className='p-3 m-1 w-80 shadow-lg' onChange={(e)=>setState(e.target.value)}>
                <option>State</option>
                {State && State.getStatesOfCountry(country).map((item)=>
                (<option key={item.isoCode} value={item.isoCode}>{item.name}</option>))}
              </select>
            </div>)}  
            <div className='flex flex-col'>
            <label  className='mx-4 mt-2'>City</label>
             <input type="text" placeholder='City' className='p-3 m-1 w-80 shadow' value={city} required onChange={(e)=>{setCity(e.target.value)}} />
           </div> 
           <div className='flex flex-col'>
              <label  className='mx-4 mt-2'>Pin Code</label>
              <input type="number" placeholder='PinCode' className='p-3 m-1 w-80 shadow' value={pincode} required onChange={(e)=>setPinCode(e.target.value)} />
           </div> 
           <div className='flex flex-col'>
             <label  className='mx-4 mt-2'>Mobile No.</label>
             <input type="number" placeholder='Number' className='p-3 m-1 w-80 shadow' required value={number} onChange={(e)=>setNumber(e.target.value)}/>
           </div> 
        </div>

        <button type='submit' className='btn mt-4 px-8 text-white'>Continue</button>
       </form>
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
    </div>
  )
}

export default Shiping;