import {useState} from 'react';
import {Link} from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


function ProductCard({product}) {
  const [rating, setRating] = useState(3);
  return (
    <Link to= "/product/633d84f3aea27e5cfa76c833" >
        <div className=" h-80 w-56	bg-white shadow-xl m-4">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" 	className='h-48 text-lg'/></figure>
        <p className='text-l pt-1 px-3 decoration-gray-400 font-light'>Solid Hooded Sweatshirt</p>
        <p className='text-l px-4 pb-1 font-bold'>Rs. 500</p>
        <div className="rating rating-sm px-4">
        <Rating style={{ maxWidth: 120 }} value={4} readOnly={true} />       
        </div>
       <ul className='px-3 pt-1'>
           <li className="badge badge-outline mx-1">Clothing</li>
           <li  className="badge badge-outline mx-1">Mens</li> 
       </ul>
        </div>
    </Link>
  )
}

export default ProductCard;