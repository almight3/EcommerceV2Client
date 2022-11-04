import { createReducer } from "@reduxjs/toolkit";
const initialState={}

export const orderReducer = createReducer(initialState,{
    CreatOrderRequest:(state)=>{
        state.loading = true;
    },
    CreatOrderSuccess:(state,action)=>{
     state.loading = false;
     state.order = action.payload.order;
    },
    CreatOrderFail:(state,action)=>{
     state.loading = false;
     state.error = action.payload;       
    },
    ClearError:(state)=>{
        state.error = null;
    },
});
