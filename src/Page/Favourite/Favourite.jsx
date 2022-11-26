import React from 'react'
import FavouriteCard from '../../Component/FavouriteCard/FavouriteCard'
import {useSelector} from "react-redux";
function Favourite() {
  const {favouriteProduct} = useSelector(state=>state.favourite)

  return (
    <div className='w-8/12	mx-auto flex flex-wrap justify-center'>
        <h1 className='w-10/12 mx-4 text-2xl font-semibold'>Products In Whislist ({favouriteProduct.length})</h1>
        {
         favouriteProduct.length === 0 ? <h1 className='w-10/12 m-8 text-center text-2xl font-semibold'>Whislist is Empty</h1>:favouriteProduct.map(fav=><FavouriteCard product={fav}/>)
        }
    </div>
  )
}

export default Favourite