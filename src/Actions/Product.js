import axios from "axios";
import { ANIMESTOREAPI } from "../Service/Service";
export const getProduct = (anime,page=1,category,ratings,price)=>async(dispatch)=>{
  try{
    dispatch({
        type:"allProductRequest"
    });
    let link =  `${ANIMESTOREAPI}/api/v1/products?page=${page}&ratings[gte]=${ratings ? ratings : 1}&price[gte]=${price[0] ?price[0]:100}&price[lte]=${price[1]?price[1]:600}`
    if (category) {
      link = `${ANIMESTOREAPI}/api/v1/products?page=${page}&ratings[gte]=${ratings ? ratings : 1}&price[gte]=${price[0] ?price[0]:100}&price[lte]=${price[1]?price[1]:600}&category=${category}`;
    }
    if(anime){
      page=1
      link =  `${ANIMESTOREAPI}/api/v1/products?anime=${anime}&page=${page}&ratings[gte]=${ratings ? ratings : 1}&price[gte]=${price[0] ?price[0]:100}&price[lte]=${price[1]?price[1]:600}`
    }

    const {data} = await axios.get(link);
    dispatch({
        type:"allProductSuccess",
        payload:data
    })

   }
   catch(error){
     dispatch({
        type:"allProductFailure",
        payload:error.response.data.message,
     })
    console.log(error)
   } 
};

export const getProductDetails = (id)=>async(dispatch)=>{
  try{
   dispatch({
       type:"productDetailsRequest"
   });

   const {data} = await axios.get(`${ANIMESTOREAPI}/api/v1/product/${id}`);
   
   dispatch({
       type:"productDetailsSuccess",
       payload:data
   })

  }
  catch(error){
    dispatch({
       type:"productDetailsFailure",
       payload:error.response.data.message,
    })
  } 
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type:"ClearError" });
};
