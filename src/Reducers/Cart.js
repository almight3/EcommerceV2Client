import { createReducer } from "@reduxjs/toolkit";
const initialState = {
    cartItems: localStorage.getItem("cartItems") ? 
    JSON.parse(localStorage.getItem("cartItems")) : [],
    shipingInfo:localStorage.getItem("shipingInfo") ? 
    JSON.parse(localStorage.getItem("shipingInfo")):{},
    loading:false
};

export const cartReducer = createReducer(initialState,{
    AddToCart:(state,action)=>{
    const product = action.payload;
    const isItemExist = state.cartItems.find((item)=>item.id===product.id);
    if(isItemExist){
        state.cartItems.map((item)=>item.id === isItemExist.id ? product : item)
    }
    else{
        state.cartItems.push(product);
    }

    },
    RemoveFromCart:(state,action)=>{
    console.log(action.payload)
    state.cartItems = state.cartItems.filter((item)=>item.id !== action.payload);   
    }, 
    ChangeQuantity:(state,action)=>{
        state.cartItems.filter((item)=> item.id===action.payload.id ?(item.quantity = action.payload.quantity) : item)
    },
    ClearCartItems:(state)=>{
       state.cartItems = []
    },
    shipingInfo:(state,action)=>{
        state.loading = true
        state.shipingInfo = action.payload
        state.loading =false
    }
})
