import axios from "axios";
export const AddToFavourite =(id)=>async(dispatch,getState)=>{
    const {data} = await axios.get(`/api/v1/product/${id}`)
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