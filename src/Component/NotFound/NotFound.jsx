import React from 'react'
import ProductNotFound from "../../image/NotFound/notfound.svg";
import {useLocation} from "react-router-dom";
function NotFound() {
    const location = useLocation()
  return (
    <div>
       <p className='m-4 text-center text-lg font-normal'>You Searched for {location.pathname.split("/")[2]}</p>
       <img src={ProductNotFound} alt ="product not found" className='w-3/5 mx-auto my-3'/>
       <p className='m-4 text-center text-4xl font-medium'>We couldn't find any matches!</p>
       <p className='text-center font-thin'>try to check spelling or search fot other product</p> 
    </div>
  )
}

export default NotFound