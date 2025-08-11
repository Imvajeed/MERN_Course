import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './UserSlice'
import ProductReducer from './ProductsSlice'
const store = configureStore({
    reducer:{
        user:UserReducer,
        products:ProductReducer

    }
})

export default store;