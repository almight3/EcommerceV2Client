import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    products:[]
};

export const productReducer = createReducer(initialState,{
  allProductRequest:(state)=>{
        state.loading = true;
    },
    allProductSuccess: (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.productCount = action.payload.productCount;
        state.resultPerPage = action.payload.resultPerPage;

    },
    allProductFailure:(state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    
});

export const productDetailReducer = createReducer(initialState,{
    productDetailsRequest:(state)=>{
          state.loading = true;
    },
    productDetailsSuccess: (state, action) => {
          state.loading = false;
          state.productDetails = action.payload.product;
    },
    productDetailsFailure:(state, action) => {
          state.loading = false;
          state.error = action.payload;
    },
});

export const ClearError = createReducer(initialState,{
      ClearError:(state)=>{
          state.error = null;        
      }
})

