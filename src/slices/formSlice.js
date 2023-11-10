import { createSlice } from "@reduxjs/toolkit";

const formSlice =  createSlice({
    name:"Form",
    initialState:{
        isLoading:false,
        searchTerm:"",
        data:[]
    },
    reducers:{
        changeSearchTerm(state,action){
            state.searchTerm = action.payload;
        },
        setHotels(state,action){
            state.data = action.payload;
        }

    }
})

export const formReducer = formSlice.reducer;
export const {changeSearchTerm ,setHotels} = formSlice.actions;