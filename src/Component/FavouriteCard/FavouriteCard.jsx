import React from 'react'
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { RemoveFromFavourite } from '../../Actions/Favourite';
import {addToCart} from "../../Actions/Cart";
import {FaHeart} from  "react-icons/fa";
import { Rating } from '@smastrom/react-rating';
import {  toast } from 'react-toastify';

function FavouriteCard({product}) {
    const dispatch = useDispatch();
    const {cartItems} =  useSelector((state)=>state.cart);
    const handelCart = ()=>{
      dispatch(addToCart(product._id))
      toast.success("product added to cart")
    }

    const handelRemoveFromFav = ()=>{
        dispatch(RemoveFromFavourite(product._id))
    }
    return (
    <div className=" h-96 w-56 border border-black boder-box	bg-white shadow-xl m-8 relative">
        <figure><img src={product.image} alt="product" 	className='h-64 w-full object-cover text-lg'/></figure>
        <p className='text-l px-3    decoration-gray-400 font-semibold text-center'>{product.name.slice(0,22)}..</p>
        <p className='text-l px-2 mx-2 m-1 font-normal text-center'>Rs. {product.price} <small className='badge badge-primary badge-outline text-sm ml-4'>{product.category}</small></p>
        <div className="rating rating-sm px-4 m-1 flex justify-center">
        <Rating style={{ maxWidth: 90 }} value={product.ratings} readOnly={true} />       
        </div>
        <div className='flex justify-center items-center w-full border-t border-black cursor-pointer'>
          <FaHeart color='#ef4444' size={22} className='w-4/12 mx-auto' onClick={handelRemoveFromFav} />
          {
              cartItems.some(cart=>cart.id===product._id) ? <button className='p-3  font-medium  bg-black text-white w-8/12	' onClick={handelCart}><Link to="/cart">View Cart</Link></button> : <button className='p-3  font-medium  bg-black text-white w-8/12' onClick={handelCart}>Add To Cart</button>
          }
        </div>
      </div>
  )
}

export default FavouriteCard