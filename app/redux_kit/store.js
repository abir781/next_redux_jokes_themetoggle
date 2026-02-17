import { configureStore } from "@reduxjs/toolkit";
import jokerreducer from "./Feature";


const store = configureStore({
    reducer:{
        jokex:jokerreducer
    },
});

export default store;