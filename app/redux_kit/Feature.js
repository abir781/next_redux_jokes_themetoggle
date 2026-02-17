import { createSlice } from "@reduxjs/toolkit";

const jokeslice= createSlice({
    name:'jokes',
    initialState:{
        jokesboolean:false,
        jokesdata:"",
        toggleboolean: false,
    },
    reducers:{
        setjokesboolean:(state)=>{
            state.jokesboolean=true;
        },
        setjokesdata:(state,action)=>{
            state.jokesdata=action.payload;
        },
        settoggleboolean:(state,action)=>{
            state.toggleboolean=!state.toggleboolean;
        }
    },
});

export const {setjokesboolean,setjokesdata,settoggleboolean} = jokeslice.actions;
export default jokeslice.reducer;