import axios from "axios";
import { ANIMESTOREAPI } from "../Service/Service";

export const addToCart = (id,quantity=1)=>async(dispatch,getState)=>{

    const {data} = await axios.get(`${ANIMESTOREAPI}/api/v1/product/${id}`)
    dispatch({
    type:"AddToCart",
    payload:{
        id:data.product._id,
        name:data.product.name,
        price: data.product.price,
        image:data.product.image,
        quantity
    }
});
console.log(data.product)
localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));

};

export const removeFromCart = (id)=>async(dispatch,getState)=>{
    dispatch({
        type:"RemoveFromCart",
        payload:id
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const changeQuantity = (id,quantity)=>(dispatch,getState)=>{
    dispatch({
        type:"ChangeQuantity",
        payload:{
            id:id,
            quantity:quantity
        }
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

export const clearCartItems = ()=>(dispatch)=>{
 dispatch({
    type:"ClearCartItems"
 })
 localStorage.removeItem("cartItems")
}

export const shipingInfoData = (data)=>(dispatch)=>{
        dispatch({
            type:"ShipingInfo",
            payload:data
        })
     localStorage.setItem("shipingInfo",JSON.stringify(data))   
    
}    