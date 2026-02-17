import { createSlice } from "@reduxjs/toolkit";

const jokeslice= createSlice({
    name:'jokes',
    initialState:{
        jokesboolean:false,
        jokesdata:"",
    },
    reducers:{
        setjokesboolean:(state)=>{
            state.jokesboolean=true;
        },
        setjokesdata:(state,action)=>{
            state.jokesdata=action.payload;
        }
    },
});

export const {setjokesboolean,setjokesdata} = jokeslice.actions;
export default jokeslice.reducer;