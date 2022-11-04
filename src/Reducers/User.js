import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const userReducer = createReducer(initialState,{
  LoginRequest:(state)=>{
   state.loading = true;
  }, 
  LoginSuccess:(state,action)=>{
  state.loading = false;
  state.isAuthenticated = true;
  state.user = action.payload.user;
 
  },
  LoginFail:(state,action)=>{
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },
  SignupRequest:(state)=>{
    state.loading = true;
  }, 
  SignupSuccess:(state,action)=>{
   state.loading = false;
   state.isAuthenticated = true;
   state.user = action.payload.user;
  
   },
   SignupFail:(state,action)=>{
     state.loading = false;
     state.isAuthenticated = false;
     state.error = action.payload;
   },
   LoadUserRequest:(state)=>{
   state.loading = true ;
   },
   LoadUserSuccess:(state,action)=>{
   state.loading=false;
   state.isAuthenticated = true;
   state.user = action.payload.user; 
   },
   LoadUserFail:(state,action)=>{
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload; 
   },
   LogoutRequest:(state)=>{
    state.loading = true;
   },
   LogoutSuccess:(state,action)=>{
    state.loading = false;
    state.user = null;
    state.isAuthenticated = false;
   },
   LogoutFail:(state,action)=>{
   state.loading = false;
   state.error = action.payload;
   state.isAuthenticated = true
   },
   ClearError:(state)=>{
    state.error = null
   }
});


