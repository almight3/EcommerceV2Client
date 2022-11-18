import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {getProductDetails,clearErrors}  from "../../Actions/Product";
import SimpleImageSlider from "react-simple-image-slider";
import "./Product.css"
import {Oval} from "react-loader-spinner";
import {addToCart} from "../../Actions/Cart"
import { useParams,useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const images = [
  {url: 'https://picsum.photos/seed/a/1600/900'},
  {url: 'https://picsum.photos/seed/b/1920/1080'},
  {url: 'https://picsum.photos/seed/c/1366/768'}
]

function ProductDetails() {
  const {productDetails,error,loading} = useSelector((state)=>state.productDetails);
  const {isAuthenticated} = useSelector((state)=>state.user) 
  const dispatch = useDispatch();
  const {id} = useParams();
  const navigate = useNavigate()
  useEffect(()=>{
  if(error){
    toast.error(error)
    dispatch(clearErrors());
  }
  dispatch(getProductDetails(id))
  },[dispatch,error]);

 const handelCart = ()=>{
  // console.log(matches.id)
  if(isAuthenticated){
    dispatch(addToCart(productDetails._id))
    toast.success("product added to cart")
  }
  else{
     navigate("/login")
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
          </div>    
        :
        <div className='flex w-9/12	justify-center mx-auto'>
        <div className="m-4">
        <SimpleImageSlider
        width={300}
        height={400}
        images={images}
        showBullets={true}
        />
        </div>
        <div className="m-4 w-4/12">
            <div className="m-2">
              <h1 className='text-2xl font-semibold'>Product ka Title hai Bhai</h1>
              <p className='text-sm'>Product Id #<span>132161dfa3d6a4sd23a1ds</span></p>
            </div>  
            <hr/>
            <div className="rating m-3">
            <Rating style={{ maxWidth: 120 }} value={4} readOnly={true} /> 
              <p className='mx-3'>(4 reviews)</p>
          </div>
          <hr/>
          <div className='m-3'>
             <h3 className='ml-4 font-semibold'>Rs. 5000</h3>
          </div>
          <hr />
          <div className='m-3'>Status: <span className='text-green-600 font-semibold text-lg'>InStocks</span></div>
          <div>
              <ul className='flex flex-wrap'>
                <button className='size'>
                  S
                </button>
                <button className='size'>
                  M
                </button>
                <button className='size'>
                  L
                </button>
                <button className='size'>
                  XL
                </button>
              </ul>
              <button className='btn-cart my-3' onClick={()=>handelCart()}>Add to Cart</button>
          </div>
          <hr />
          <div className='m-3'>
             <h4 className='font-semibold'>Description</h4>
             <p className='text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
          </div>
        </div>
    </div>
      }
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

export default ProductDetails;