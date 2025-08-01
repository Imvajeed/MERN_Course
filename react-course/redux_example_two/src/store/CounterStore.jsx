import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterReducers'

const store = configureStore({
    reducer:{
        counter:counterReducer,
    }
})

export default store;