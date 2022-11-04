import React,{useState} from 'react';
import {NavLink,useNavigate,Link} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {logoutUser} from "../../Actions/User";
import {HiOutlineSearch} from "react-icons/hi"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Navbar() {
  const [keyword,setKeyword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector((state)=>state.user) 
  const {cartItems} = useSelector((state)=>state.cart)
  console.log(isAuthenticated)
  
  const handleSearch = (e)=>{
    console.log("serc")
    if(keyword.trim()){
      navigate(`/home/${keyword}`);
    }
    else{
    navigate("/home")
    }
  };
  const handelLogout = ()=>{
    dispatch(logoutUser())
    toast.success("User LogOut Successfully")
    navigate("/home")

  }

  return (
  <>
    <div className="navbar bg-white-100 decoration-neutral-900	mb-4 h-20	 shadow-xl	">
  <div className="w-60">
    <NavLink></NavLink>
  </div>
  <ul className="flex-1 w-96 space-x-6 text-xl	">
   <li><NavLink to="/home">Home</NavLink></li>
   <li><NavLink to="/mens">Men</NavLink></li>
   <li><NavLink to="/womens">Women</NavLink></li>
   <li><NavLink to="/beauty">Accessories</NavLink></li>
    </ul>
  <div className="w-96 ">
      <input type="text" placeholder="Search" className="w-96 px-4 py-2 bg-gray-200 rounded outline-0"
      onChange={(e)=>{setKeyword(e.target.value)}}
      />
      <button className='px-4 py-3 mr-3 bg-black' ><HiOutlineSearch color="white" onClick={()=>{handleSearch()}}/></button>
     
  </div>  
  <div className="flex-none w-40">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm  indicator-item bg-red-500 border-none text-white">{isAuthenticated ? cartItems.length : 0}</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{isAuthenticated ? cartItems && cartItems.length : 0} Items</span>
          <span className="text-black">Subtotal: {isAuthenticated ?cartItems && cartItems.length : 0}</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block text-white"><Link to="/cart">View cart</Link></button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people"  alt="profile"/>
        </div>
      </label>
      <ul tabIndex={0} className=" dropdown-content mt-4 p-2 shadow bg-base-100  h-28	 w-28	">
        <li>
          <NavLink className="justify-between p-3 m-2 text-xs hover:font-bold	">
            Profile
          </NavLink>
        </li>
        <li><NavLink className="justify-between p-3 m-2 text-xs hover:font-bold">Settings</NavLink></li>
       {
        isAuthenticated ? <li><NavLink className="justify-between p-3 m-2 text-xs hover:font-bold" onClick={handelLogout}>Logout</NavLink></li> : 
       <li><NavLink className="justify-between p-3 m-2 text-xs hover:font-bold" to="/login">Login</NavLink></li>
       }
      </ul>
    </div>
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

export default Navbar