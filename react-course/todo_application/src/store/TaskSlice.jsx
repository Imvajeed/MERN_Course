import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    values:[]
}
let id = 0;

const taskSlice = createSlice({
    name:'Task',
    initialState:intialState,
    reducers:{
        addTask:(state,payload)=>{
            
            state.values.push({
                id:++id,
                taskName: payload.payload['name'],
                description:payload.payload['desc'],
                completed:false,
            })
        },
        removeTask : (state,payload)=>{
            state.values = state.values.filter((ele)=>ele.id!==payload.payload);
        },

        completeTask : (state,payload)=>{
            console.log("payload id",payload.payload)
            state.values = state.values.map((ele)=>ele.id==payload.payload?{id:ele.id,taskName:ele.taskName,description:ele.description,completed:true}:ele);
        }
        
    }
})


export const {addTask,removeTask,completeTask} = taskSlice.actions;
export default taskSlice.reducer