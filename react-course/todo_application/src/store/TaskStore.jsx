import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './TaskSlice'

const taskStore = configureStore({
    reducer:{
        task:taskReducer
    }
})

export default taskStore;