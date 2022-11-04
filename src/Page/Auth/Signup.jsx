import React,{useState,useEffect} from 'react';
import {useNavigate, NavLink} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { signupUser,clearError } from "../../Actions/User";
import {Oval} from "react-loader-spinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [inputError,setInputError] = useState('')
  const {error,loading,isAuthenticated} = useSelector((state)=>state.user);
  const dispatch= useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    if(inputError){
      toast.error(inputError);
      setInputError('')
    }
    if(error){
     toast.error(error);
     dispatch({
      type:"clearError"
     });
    }
    if(isAuthenticated){
      navigate('/home')
    }
    },[isAuthenticated,error,inputError]);

  const handelSubmit = (e)=>{
    e.preventDefault();
    if(name===""){
      setInputError("Please Enter Name");
    }
    else if(email===""){
      setInputError("Please Enter Email");
    }
    else if(password===""){
      setInputError("Please Enter Password");
    }
    else{
      dispatch(signupUser(name,email,password))
    }
    
  }

  return (
   <>
     {
      loading ?
      <div className='m-auto my-28 w-28'>
      <Oval height={60}
            width={60}
            color="#000000"
            wrapperStyle={{}}
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={1}
            strokeWidthSecondary={1}
      />
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
     :
    <>
     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white mx-auto mt-28	">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input" required  onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input" required onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input" required onChange={(e)=>{setPassword(e.target.value)}} /> 
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-white" type='submit' onClick={(e)=>handelSubmit(e)}>Signup</button>
        </div>
        <label className="label text-sm	mx-auto">
              <span>dont have account?   <NavLink  className=" link link-hover font-medium" to="/login">Login</NavLink> </span> 
        </label>
      </div>
    </div>
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
  </>
  }
   </>
  )
}

export default Signup