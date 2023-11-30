import {configureStore} from "@reduxjs/toolkit";
import { formReducer,setHotels } from "../slices/formSlice";
import axios from 'axios';

const store = configureStore({
    reducer:{
        form:formReducer
    }
})

axios.post("http://localhost:5000/getData")
    .then((response) => {
        // Dispatch the action to set the initial hotels data
        store.dispatch(setHotels(response.data.data.hotels));
    })
    .catch((error) => {
        console.error("Error fetching initial data:", error);
    });


export {store}
export * from "../slices/formSlice";