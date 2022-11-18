import axios from "axios";
import { ANIMESTOREAPI } from "../Service/Service";
export const createOrder = (order)=>async(dispatch)=>{
    try{
        dispatch({
            type:"CreatOrderRequest"
        })

        const {data} = await axios.post(`${ANIMESTOREAPI}/api/v1/neworder`,{
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