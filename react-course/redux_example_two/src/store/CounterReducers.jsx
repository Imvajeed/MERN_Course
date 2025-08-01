import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        addNum:(state)=>{
            state.value++;
        },
        removeNum:(state)=>{
            state.value--;
        }
    }
})

export const {addNum,removeNum} = counterSlice.actions;
export default counterSlice.reducer;