import { createSlice } from "@reduxjs/toolkit";

const formSlice =  createSlice({
    name:"Form",
    initialState:{
        isLoading:false,
        searchTerm:"",
        data:[],
        count:0,
        fav:[]
    },
    reducers:{
        changeSearchTerm(state,action){
            state.searchTerm = action.payload;
        },
        setHotels(state,action){
            console.log("hello",action.payload)
            state.data = action.payload;
        },
        setCount(state,action){
            state.count=state.count+1;
        },
        setFav(state,action){
            state.fav=[...state.fav ,action.payload]
        },
        overRideFav(state,action){
            state.fav=[...action.payload]
        }

    }
})

export const formReducer = formSlice.reducer;
export const {changeSearchTerm,setHotels,setCount,setFav,overRideFav} = formSlice.actions;