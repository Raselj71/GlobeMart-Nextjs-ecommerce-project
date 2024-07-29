import { httpaxios } from "@/helper/httphelper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCurrentUser=createAsyncThunk("user/currentUser",async()=>{
    const respose= await httpaxios.get('/api/currentuser')
    return respose.data
    
})

type userState={
    isloading:boolean,
    error: Object | null | String
    user: Object | null
}

const initialState:userState={
    isloading:false,
    error:null,
    user:null
}
