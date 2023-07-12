import { configureStore } from "@reduxjs/toolkit";
import note from "./slice/noteSlice";

export const store=configureStore({
    reducer:{
        app:note
    }
})