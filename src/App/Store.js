import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '../Reducers/Cart';
import { productReducer,productDetailReducer } from '../Reducers/Product';
import { userReducer } from '../Reducers/User';
import { orderReducer } from '../Reducers/order';
import { favouriteReducer } from '../Reducers/Favourite';
export const store = configureStore({
    reducer:{
    products:productReducer,    
    productDetails:productDetailReducer,
    user:userReducer,
    cart:cartReducer,
    order:orderReducer,
    favourite:favouriteReducer
    }
});

