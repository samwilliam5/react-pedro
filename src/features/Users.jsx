import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../components/Fakedata";

const userSlice=createSlice({
    name:'users',
    initialState:{ value:[UsersData]},
    reducers:{
        addUsers:(state,actions)=>{

        }
    }
})


export default userSlice.reducer