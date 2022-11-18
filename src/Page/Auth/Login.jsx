import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {NavLink,useNavigate} from "react-router-dom";
import { loginUser,clearError } from "../../Actions/User";
import {Oval} from "react-loader-spinner";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const [email,setEmail] = useState('');
  const [password,setPasword] = useState('');
  const [inputError,setInputError] = useState('');
  const {error,loading} = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(()=>{
  if(inputError){
    toast.error(inputError);
    setInputError("")
  }  
  if(error){
    toast.error(error);
    dispatch(clearError());
  }
  },[error,inputError,dispatch])


  const handleSubmit = (e)=>{
    e.preventDefault();
    if(email ===""){
      setInputError("Please Enter Email");
    }
    else if(password ===""){
      setInputError("Please Enter Password");
    }
    else{
      dispatch(loginUser(email,password,navigate,toast)) 
    }
    
  }

  const handelGuestLogin =()=>{
      setEmail("admin@gmail.com")
      setPasword("12345678")
  }

  return (
    <>
      {loading ? 
        <div className='m-auto my-28 w-28'><Oval 
          height={60}
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
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input" password={email}  onChange={(e)=>{setEmail(e.target.value)}}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input" value={password} onChange={(e)=>{setPasword(e.target.value)}}  required/>
          <label className="label">
            <NavLink className="label-text-alt link link-hover">Forgot password?</NavLink>
          </label>
        </div>
        
        <div className="form-control  ">
          <button className="btn btn-primary text-white" type="submit" onClick={(e)=>{handleSubmit(e)}}>Login</button>
          <label className="label text-sm	mx-auto" onClick={handelGuestLogin} >
             <NavLink  className=" link link-hover font-medium" to="/signup">Guest Login</NavLink>
        </label>
        </div>
        <label className="label text-sm	mx-auto">
              <span>dont have account?   <NavLink  className=" link link-hover font-medium" to="/signup">Signup</NavLink> </span> 
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

export default Login