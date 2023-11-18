import { createSlice } from "@reduxjs/toolkit";

const formSlice =  createSlice({
    name:"Form",
    initialState:{
        isLoading:false,
        searchTerm:"",
        data:[],
        count:0
    },
    reducers:{
        changeSearchTerm(state,action){
            state.searchTerm = action.payload;
        },
        setHotels(state,action){
            state.data = action.payload;
        },
        setCount(state,action){
            state.count=state.count+1;
        }

    }
})

export const formReducer = formSlice.reducer;
export const {changeSearchTerm ,setHotels,setCount} = formSlice.actions;