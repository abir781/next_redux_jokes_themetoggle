import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchjoke = createAsyncThunk(
    "jokex/fetchjoke",
    async()=>{
        const res = await fetch ("https://v2.jokeapi.dev/joke/Any?type=single");
        const data = await res.json();
        return data.joke;
    }
)

const jokeslice= createSlice({
    name:'jokes',
    initialState:{
        jokesboolean:false,
        jokesdata:"",
        toggleboolean: false,
        loading: false,
        error:null,
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
    extraReducers: (builder) =>{
        builder
           .addCase(fetchjoke.pending, (state)=>{state.loading = true;})
           .addCase(fetchjoke.fulfilled, (state, action)=>{
              state.jokesdata = action.payload;
              state.loading = false;
           })
           .addCase(fetchjoke.rejected, (state, action) =>{
             state.error = action.error.message;
             state.loading = false;
           });

    }
});

export const {setjokesboolean,setjokesdata,settoggleboolean} = jokeslice.actions;
export default jokeslice.reducer;