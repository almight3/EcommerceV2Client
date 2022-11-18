import axios from "axios";
import { ANIMESTOREAPI } from "../Service/Service";

export const AddToFavourite =(id)=>async(dispatch,getState)=>{
    const {data} = await axios.get(`${ANIMESTOREAPI}/api/v1/product/${id}`)
    dispatch({
    type:"AddToFavourite",
    payload:data.product        
    });
    localStorage.setItem("FavProduct",JSON.stringify(getState().favourite.favouriteProduct))
}

export const RemoveFromFavourite = (id)=>(dispatch,getState)=>{
    dispatch({
        type:"RemoveFromFavourite",
        payload:id
    });
    localStorage.setItem("FavProduct",JSON.stringify(getState().favourite.favouriteProduct))
}