import React,{useEffect,useState} from 'react'
import ProductCard from '../../Component/ProductCard/ProductCard'
import { useSelector,useDispatch } from "react-redux";
import { getProduct } from "../../Actions/Product";
import { useLocation } from "react-router-dom";
import Pagination from "react-js-pagination";
import {Oval} from "react-loader-spinner";
import "./Product.css";
import NotFound from '../../Component/NotFound/NotFound';

const range = [{range:'100-200'},{range:"200-400"},{range:"500-600"}];

function Products() {

const [page,setPage] = useState(1);  
const [category,setCategory]= useState('');
const [ratings,setRating] = useState(0);
const [filterPrice,setFilterPrice] = useState([])
const [price,setPrice] = useState([100,600]);
const [priceRange,setPriceRange] = useState(range)
const dispatch = useDispatch();
const location = useLocation();
const {loading,error,products,productCount,resultPerPage} = useSelector((state)=>state.products)
// page change
let anime = '';
let keyword = '';
if(location.pathname==="/products/naruto" || location.pathname==="/products/dbz" || location.pathname==="/products/onepiece"){
   anime = location.pathname.split("/")[2]
} 
else{
  keyword = location.pathname.split("/")[2];
  console.log(keyword)
}

const handelPageChange = (e)=>{
 setPage(e)
}

const handelPriceChange = (e)=>{
  const {value,checked} = e.target;
  setPage(1)
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
dispatch(getProduct(anime,page,category,ratings,price,keyword))
},[dispatch,anime,page,category,ratings,price,keyword]);


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
    <div className="flex flex-col content-center z-10 lg:flex-row w-4/6		mx-auto	">
    <div className="flex flex-col	grow-1 w-2/12	bg-base justify-start items-center		">
          <div>
          <ul className='mt-2 text-center'>
            {priceRange.map((price)=>(
            <li className='m-1' >
             <label className='mr-2'>{price.range}</label>
             <input type="checkbox" value={price.range} checked={price?.isChecked || false}
             onChange={handelPriceChange} />
            </li>))
            }
          </ul> 
          
    </div>
    <div className="divider"></div> 
    <div className=''>
        <span className='font-medium text-center'>Categories</span> 
        <ul className='mt-2'>
        <li className='cursor-pointer p-1'  onClick={()=>setCategory("tshirt")}>T-Shirt</li>
        <li className='cursor-pointer p-1'  onClick={()=>setCategory("poster")}>Anime Poster</li>
        <li className='cursor-pointer p-1'  onClick={()=>setCategory("")}>Manga</li>
        </ul>
    </div>  
    <div className="divider"></div> 
    <div>
      <span className='font-medium'>Average Cutomer Ratings</span>
      <ul className='mt-2'>
         <li className='p-1 flex justify-between'>
          <label className=" " htmlFor="ratings">4 Stars and Above</label> 
          <input  type="radio" name="ratings" id="4"  className="radio radio-xs radio-secondary" 
           checked={ratings==4} onChange={()=>setRating(4)} />
         </li>

         <li className='p-1 flex justify-between'>
          <label htmlFor="ratings">3 Stars and Above</label>
          <input type="radio" name="ratings" id="3" className="radio radio-xs	radio-secondary" 
          checked={ratings==3} onChange={()=>setRating(3)} />
         </li>
         <li className='p-1 flex justify-between'>
          <label htmlFor="ratings"> 2 Stars and Above </label>
          <input type="radio" name="ratings" id="2"  className="radio radio-xs	radio-secondary" 
           checked={ratings==2} onChange={()=>setRating(2)} />
         </li>
         <li className='p-1 flex justify-between'>
          <label htmlFor="ratings">1 Stars and Above </label>
          <input type="radio" name="ratings" id="1" className="radio radio-xs	radio-secondary" 
           checked={ratings==1} onChange={()=>setRating(1)} />
         </li>
      </ul>
    </div> 
    </div> 
    <div className="divider lg:divider-horizontal divider-margin"></div> 
    <div className="flex flex-wrap justify-center w-8/12 bg-base rounded-box  box-content">
       {
        products.length === 0 ? <NotFound /> :
        products.map(product=><ProductCard product={product} />)
       }
    </div>
   </div>
   <div className="divider w-4/12	 mx-auto"></div> 
  <div className='pagination-container'>
   {
    products.length !==0 && productCount/resultPerPage > 1 ?  
      <Pagination
        activePage={page}
        itemsCountPerPage={resultPerPage}
        totalItemsCount={productCount}
        pageRangeDisplayed={productCount}
        onChange={handelPageChange}
        nextPageText="Next"
        prevPageText="Prev"
        firstPageText="first"
        lastPageText="last"
        itemClass="page-item"
        linkClass="page-link"
        activeClass="pageItemActive"
        activeLinkClass="pageLinkActive"
    /> : ""

   }
   </div>
  </>
  }
  </>
  )
}

export default Products;