import axios from "axios";
export const getProduct = (keyword="",page,category,rating=1,price)=>async(dispatch)=>{
  try{
    dispatch({
        type:"allProductRequest"
  });
    console.log(category)
    let link =  `/api/v1/products?keyword=${keyword}&page=${page}&rating[gte]=${rating}&price[gte]=${price[0] ?price[0]:300}&price[lte]=${price[1]?price[1]:5000}`
    if (category) {
      link = `/api/v1/products?keyword=${keyword}&page=${page}&rating[gte]=${rating}&price[gte]=${price[0] ?price[0]:300}&price[lte]=${price[1]?price[1]:5000}&category=${category}`;
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

   const {data} = await axios.get(`/api/v1/product/${id}`);
   
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
