import { configureStore } from "@reduxjs/toolkit";
import jokerreducer from "./Feature";
import favoritereducer from "./Favorite_feature";
import searchreducer from "./Search_feature";


const store = configureStore({
    reducer:{
        jokex:jokerreducer,
        favouritex: favoritereducer,
        searchx: searchreducer,
    },
});

export default store;