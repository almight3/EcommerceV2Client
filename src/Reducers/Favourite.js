import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    favouriteProduct:[]
}

export const favouriteReducer = createReducer(initialState,{
   AddToFavourite:(state,action)=>{
    state.favouriteProduct.push(action.payload)
   },
   RemoveFromFavourite:(state,action)=>{
    state.favouriteProduct = state.favouriteProduct.filter((item)=>item._id !== action.payload)
   }
  
}) 