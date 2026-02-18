import { createSlice } from "@reduxjs/toolkit";


const favoritefeatureslice = createSlice({
    name:'favourites',
    initialState:{
        favouritejokes: [],
    },
    reducers:{
        setfavouritejoke:(state,action)=>{
            state.favouritejokes=[...state.favouritejokes,action.payload]
        }
    }
})

export const {setfavouritejoke} = favoritefeatureslice.actions;
export default favoritefeatureslice.reducer;