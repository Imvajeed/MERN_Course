import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetAllProducts = createAsyncThunk('/getAllProducts',async (_,thunk)=>{
    try{
        const responce = await axios.get('https://dummyjson.com/products').catch(error=>thunk.rejectWithValue(error));

        return await responce.data;
    }catch(e){
        return thunk.rejectWithValue(e);
    }

})


const ProductsSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        cartItems:[],
        error:null,
        isLoading: 'pending',
        catTotalPrice:0
    },reducers:{
        addToCart : (state,action)=>{
            const item = state.cartItems.find(ele=>ele.id===action.payload.id);
            if(item){
                state.cartItems = state.cartItems.map((ele)=>ele.id===action.payload.id?{...ele,count:ele.count+1}:ele)
                
            }else{
                state.cartItems = [...state.cartItems,{...action.payload,count:1}];
            }
            state.catTotalPrice += action.payload.price;

        },
        increaseCount:(state,action)=>{
            state.cartItems = state.cartItems.map(ele=>ele.id===action.payload.id?{...ele,count:ele.count+1}:ele)
            state.catTotalPrice += action.payload.price;
        },
        decreseCount:(state,action)=>{
            state.cartItems = state.cartItems.map(ele=>ele.id===action.payload.id?{...ele,count:ele.count-1}:ele)
            state.catTotalPrice -= action.payload.price;
        },
        removeFromCart:(state,actions)=>{
            state.cartItems = state.cartItems.filter(ele=>ele.id!==actions.payload.id);
            state.catTotalPrice -= actions.payload.count*actions.payload.price;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(GetAllProducts.fulfilled,(state,actions)=>{
            state.products = actions.payload.products;
            state.isLoading = 'success';
            state.error = null;
        }).addCase(GetAllProducts.rejected,(state,action)=>{
            state.error = action.error;
            state.isLoading = 'failed';
        }).addCase(GetAllProducts.pending,(state)=>{
            state.isLoading = 'pending';
        })
    }
})


export const {addToCart,removeFromCart,decreseCount,increaseCount} = ProductsSlice.actions;

export default ProductsSlice.reducer