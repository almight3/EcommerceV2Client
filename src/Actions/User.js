import axios from "axios";

export const loginUser = (email,password)=>async(dispatch)=>{
try{
    dispatch({
        type:"LoginRequest"
    });
    
    const {data} = await axios.post("/api/v1/login",{
        email:email,
        password:password
        },
        {
            headers: {
              "Content-Type": "application/json",
            },
        });
        dispatch({
        type:"LoginSuccess",
        payload:data
        })
        
}
catch(error){
    dispatch({
        type:"LoginFail",
        payload:error.response.data.message
    });
  }
};

export const signupUser = (name,email,password)=>async(dispatch)=>{
    try{
        dispatch({
            type:"SignupRequest"
        })
        const {data} = await axios.post("/api/v1/register",{
            name:name,
            email:email,
            password:password
            },
            {
                headers: {
                  "Content-Type": "application/json",
                },
            });
            dispatch({
            type:"SignupSuccess",
            payload:data
            });
    }
    catch(error){
        console.log(error)
        dispatch({
            type:"SignupFail",
            payload:error.response.data.message
        })
    }
};

export const loadUser = ()=>async(dispatch)=>{
    try{
      dispatch({
            type:"LoadUserRequest"
        })
       const {data} = await axios.get("/api/v1/me");
      dispatch({
        type:"LoadUserSuccess",
        payload:data
      })
    }
    catch(error){
     dispatch({
        type:"LoadUserFail",
        payload:error.response.data.message
     });
    }
};

export const logoutUser = ()=>async(dispatch)=>{
    try{
        dispatch({
            type:"LogoutRequest"
        });
        await axios.get("/api/v1/logout");
        dispatch({
            type:"LogoutSuccess"
        });
    }
    catch(error){
    dispatch({
        type:"LogoutFailure",
        payload:error.response.data.message
    });
    
    }
};

export const clearError = ()=>async(dispatch)=>{
    dispatch({
        type:"ClearError"
    });
}