import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice/ThemeSlice";

const store = configureStore({
    reducer:{
        ThemeSlice:themeSlice
    }})


    export default store;