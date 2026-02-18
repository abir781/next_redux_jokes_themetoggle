import { configureStore } from "@reduxjs/toolkit";
import jokerreducer from "./Feature";
import favoritereducer from "./Favorite_feature";


const store = configureStore({
    reducer:{
        jokex:jokerreducer,
        favouritex: favoritereducer,
    },
});

export default store;