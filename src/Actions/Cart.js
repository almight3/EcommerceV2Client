import axios from "axios";

export const addToCart = (id,quantity=1)=>async(dispatch,getState)=>{

    const {data} = await axios.get(`/api/v1/product/${id}`)
    dispatch({
    type:"AddToCart",
    payload:{
        id:data.product._id,
        price: data.product.price,
        stock: data.product.Stock,
        quantity
    }
});
console.log("insid add to cart")
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

export const shipingInfoData = (data)=>(dispatch)=>{
        dispatch({
            type:"ShipingInfo",
            payload:data
        })
     localStorage.setItem("shipingInfo",JSON.stringify(data))   
}    