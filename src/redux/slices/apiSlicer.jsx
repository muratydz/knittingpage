import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8000"


const initialState = {
    knitting: []
}

export const getAllKnitting = createAsyncThunk("knitting", async() =>{
    const response = await axios.get(BASE_URL + "/knitting")
    return response.data;
})


export const apiSlice = createSlice({
    name:"knitting",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase(getAllKnitting.fulfilled, (state , action) => {
            state.knitting = action.payload;
        })
    }
})

export const {} = apiSlice.actions

export default apiSlice.reducer