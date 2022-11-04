import React,{useEffect,useState} from 'react'
import ProductCard from '../../Component/ProductCard/ProductCard'
import { useSelector,useDispatch } from "react-redux";
import { getProduct } from "../../Actions/Product";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import {Oval} from "react-loader-spinner";
import "./Product.css";


const categories = ["Shirts","T-shirts","Jeans","Footwear"];
const range = [{range:'300-500'},{range:"500-1500"},{range:"1500-3000"},{range:"3000-5000"}];

function Products() {

const [page,setPage] = useState(1);  
const [category,setCategory]= useState('');
const [rating,setRating] = useState(null);
const [filterPrice,setFilterPrice] = useState([])
const [price,setPrice] = useState([300,5000]);
const [priceRange,setPriceRange] = useState(range)
const dispatch = useDispatch();
const {keyword} = useParams();
const {loading,error,products,productCount,resultPerPage} = useSelector((state)=>state.products)
console.log(category)
// page change
const handelPageChange = (e)=>{
 setPage(e)
}

const handelPriceChange = (e)=>{
  const {value,checked} = e.target;
  const tempArr = priceRange.map((price)=> price.range === value ? {...price,isChecked:checked} : price);
  setPriceRange(tempArr) 
  if(checked){
    const data = [...filterPrice,value]
    setFilterPrice(data); 
    const start = data[0].split("-");
    const end = data[data.length - 1].split("-");
    const filterData = [start[0],end[1]];
    console.log(filterData)
    setPrice(filterData)
  }  
  else{
    const data = filterPrice.filter(p=> p!==value)
    setFilterPrice(data)
    const start = data.length>0 && data[0].split("-")
    const end = data.length>=1 &&data[data.length - 1].split("-");
    const filterData = [start[0],end[1]];
    console.log(filterData)
    setPrice(filterData)
  }
}


// get all products
useEffect(()=>{
dispatch(getProduct(keyword,page,category,rating,price))
},[dispatch,error,keyword,page,category,rating,price]);


  return (
    <>
  { loading ? <div className='m-auto my-28 w-28'><Oval 
    height={60}
    width={60}
    color="#000000"
    wrapperStyle={{}}
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor="#4fa94d"
    strokeWidth={1}
    strokeWidthSecondary={1}
   /></div>    
  :<>
    <div className="flex flex-col lg:flex-row w-8/12	mx-auto	">
    <div className="flex flex-col	grow-1 w-2/12	bg-base justify-center items-center		">
          <div>
          <ul className='mt-2'>
            {priceRange.map((price)=>(
            <li className='m-1'>
             <label className=''>{price.range}</label>
             <input type="checkbox" value={price.range} checked={price?.isChecked || false}
             onChange={handelPriceChange} />
            </li>))
            }
          </ul> 
          
    </div>
    <div className="divider"></div> 
    <div className='self-stretch pl-4 ml-4'>
        <span className='font-medium'>Categories</span> 
        <ul className='mt-2'>
          {categories.map((category)=><li className='cursor-pointer p-1' key={category} onClick={()=>setCategory(category)}>{category}</li>)}
        </ul>
    </div>  
    <div className="divider"></div> 
    <div>
      <span className='font-medium'>Average Cutomer Ratings</span>
      <ul className='mt-2'>
         <li className='p-1 flex justify-between'>
          <label className=" " htmlFor="rating">4 Stars and Above</label> 
          <input  type="radio" name="rating" id="4" value={4} className="radio radio-xs radio-secondary" 
           checked={rating==4} onChange={(e)=>setRating(e.target.value)} />
         </li>

         <li className='p-1 flex justify-between'>
          <label htmlFor="rating">3 Stars and Above</label>
          <input type="radio" name="rating" id="3" value={3} className="radio radio-xs	radio-secondary" 
          checked={rating==3} onChange={(e)=>setRating(e.target.value)} />
         </li>
         <li className='p-1 flex justify-between'>
          <label htmlFor="rating"> 2 Stars and Above </label>
          <input type="radio" name="rating" id="2" value={2} className="radio radio-xs	radio-secondary" 
           checked={rating==2} onChange={(e)=>setRating(e.target.value)} />
         </li>
         <li className='p-1 flex justify-between'>
          <label htmlFor="rating">1 Stars and Above </label>
          <input type="radio" name="rating" id="1" value={1} className="radio radio-xs	radio-secondary" 
           checked={rating==1} onChange={(e)=>setRating(e.target.value)} />
         </li>
      </ul>
    </div> 
    </div> 
    <div className="divider lg:divider-horizontal"></div> 
    <div className="flex flex-wrap w-8/12 bg-base rounded-box place-items-center box-content">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard /> 
      </div>
   </div>
   <div className="divider w-4/12	 mx-auto"></div> 
  <div className='pagination-container'>
  <Pagination
        activePage={page}
        itemsCountPerPage={resultPerPage}
        totalItemsCount={productCount}
        pageRangeDisplayed={2}
        onChange={handelPageChange}
        nextPageText="Next"
        prevPageText="Prev"
        firstPageText="first"
        lastPageText="last"
        itemClass="page-item"
        linkClass="page-link"
        activeClass="pageItemActive"
        activeLinkClass="pageLinkActive"
    />
   </div>
  </>
  }
  </>
  )
}

export default Products;