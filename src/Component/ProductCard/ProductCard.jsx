import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import {FaRegHeart} from "react-icons/fa";
import {FaHeart} from  "react-icons/fa";
import {useDispatch,useSelector} from "react-redux";
import {AddToFavourite} from "../../Actions/Favourite";
import { RemoveFromFavourite } from '../../Actions/Favourite';
import {addToCart} from "../../Actions/Cart";
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";


function ProductCard({product}) {
  
  const dispatch = useDispatch();
  const {isAuthenticated} =  useSelector((state)=>state.user);
  const {cartItems} =  useSelector((state)=>state.cart);
  const {favouriteProduct} = useSelector(state=>state.favourite)
  const navigate = useNavigate();

  const handelCart = ()=>{
    // console.log(matches.id)
    if(isAuthenticated){
      dispatch(addToCart(product._id))
      toast.success("product added to cart")
    }
    else{
      toast.error("login to access the resource")
       navigate("/login")
    }
  }

  const handelAddToFav = ()=>{
    if(isAuthenticated){
      dispatch(AddToFavourite(product._id))
      
    }
    else{
      toast.error("login to access the resource")
      navigate("/login")
   }
     
  }
  const handelRemoveFromFav = ()=>{
     dispatch(RemoveFromFavourite(product._id))
  }


  return (
        <div className=" h-[370px] w-56	bg-white shadow-xl m-2 relative">
        <figure><img src={product.image} alt="product" 	className='h-60 w-full object-cover text-lg'/></figure>
        <p className='text-l px-3 decoration-gray-400 font-semibold text-center'>{product.name.slice(0,22)}..</p>
        <p className='text-l px-2 mx-2 mb-1 font-normal text-center'>Rs. {product.price} <small className='badge badge-primary badge-outline text-sm ml-4'>{product.category}</small></p>
        <div className="rating rating-sm px-4 flex justify-center">
        <Rating style={{ maxWidth: 90 }} value={product.ratings} readOnly={true} />       
        </div>
        <div className=' absolute top-0 h-full w-full border flex items-end  opacity-0 hover:opacity-100'>
          <div className='flex justify-center items-center w-full border cursor-pointer'>
            {
              favouriteProduct.some(fav=>fav._id===product._id) ? <FaHeart color='#ef4444' size={22} className='w-4/12 mx-auto' onClick={handelRemoveFromFav} /> :
              <FaRegHeart color='#ef4444' size={22} className='w-4/12 mx-auto' onClick={handelAddToFav}/>
              
            }
            {
              cartItems.some(cart=>cart.id===product._id) ? <button className='p-3  font-medium  bg-black text-white w-8/12	' onClick={handelCart}><Link to="/cart">View Cart</Link></button> : <button className='p-3  font-medium  bg-black text-white w-8/12' onClick={handelCart}>Add To Cart</button>
            }
          </div>
        </div>
        </div>
    
  )
}

export default ProductCard;