import {useState} from 'react';
import {Link} from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import {FaRegHeart} from "react-icons/fa";
import {FaHeart} from  "react-icons/fa";

function ProductCard({product}) {
  const [rating, setRating] = useState(3);
  return (
   
        <div className=" h-80 w-56	bg-white shadow-xl m-4 relative">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" 	className='h-48 text-lg'/></figure>
        <p className='text-l px-3 decoration-gray-400 font-light text-center'>Solid Hooded Sweatshirt</p>
        <p className='text-l px-4 font-bold text-center'>Rs. 500</p>
        <div className="rating rating-sm px-4 flex justify-center">
        <Rating style={{ maxWidth: 100 }} value={4} readOnly={true} />       
        </div>
        <div className=' absolute top-0 h-full w-full border flex items-end  opacity-0 hover:opacity-100'>
          <div className='flex justify-center items-center w-full border cursor-pointer'>
            <FaRegHeart color='#ef4444' size={22} className='w-4/12 mx-auto'/>
            <button className='p-3  font-medium  bg-black text-white w-8/12	'>Add To Cart</button>
          </div>
        </div>
        </div>
    
  )
}

export default ProductCard;