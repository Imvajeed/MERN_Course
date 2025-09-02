import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { data } from "react-router-dom";

const  API_URL = import.meta.env.VITE_API_URL;

export const UserLogin = createAsyncThunk('/auth/login',async (userData, thunk)=>{
    try{
        const responce = await axios.post(`${API_URL}/auth/login`,{username:userData.username,password:userData.password}).catch(erorr=>thunk.rejectWithValue(erorr));
        
        return await responce.data;
    }catch(e){
        thunk.rejectWithValue(e);
    }

})

const UserSlice = createSlice({
    name:'user',
    initialState:{
        data:JSON.parse(localStorage.getItem('userData')),
        isLoggedIn:localStorage.getItem('isLoggedIn')==='true'?true:false,
        error:null,
        token:null,
    },
    reducers:{
        logeOutUser:(state)=>{
            localStorage.setItem('isLoggedIn',false);
            localStorage.setItem('userData','{}');
            state.isLoggedIn = false;
            state.data = {}
            state.token = null;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(UserLogin.fulfilled,(state,action)=>{
            state.data = action.payload;
            console.log(state.data);
            if(state.data){
                state.isLoggedIn = true;
                localStorage.setItem('isLoggedIn',true);
                localStorage.setItem('userData',JSON.stringify(state.data));
            }
            state.error = null;
            state.token = state.data.accessToken;
        }).addCase(UserLogin.rejected,(state,action)=>{
            state.data = null;
            state.error = action.error;
            state.isLoggedIn = false;
            state.token = nulll;
        }).addCase(UserLogin.pending,(state)=>{
            state.data = {};
        })
    }
})


export const {logeOutUser} = UserSlice.actions
export default UserSlice.reducer