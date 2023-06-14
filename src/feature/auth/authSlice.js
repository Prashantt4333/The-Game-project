import { createSlice } from "@reduxjs/toolkit";


let initialState ={
    userInfo:{
        fname:'prashant'
    },
    token:null,
    loading:null,
    success:null,
    error:null
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:{}
});

 export const selectUserInfo =(state)=> state.auth ;

export default authSlice.reducer;