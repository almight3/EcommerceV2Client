import axios from "axios";

export const createOrder = (order)=>async(dispatch)=>{
    try{
        dispatch({
            type:"CreatOrderRequest"
        })

        const {data} = await axios.post("/api/v1/neworder",{
            order
        },{
            headers: {
              "Content-Type": "application/json",
            },
        });
        dispatch({
            type:"CreatOrderSuccess",
            payload:data
        })

    }
    catch(error){
        dispatch({
            type:"CreatOrderFail",
            payload:error.response.data.message
        })
    }
}