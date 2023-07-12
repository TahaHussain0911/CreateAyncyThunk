import { configureStore } from "@reduxjs/toolkit";
import user from "./slice/userSlice";

export const store=configureStore({
    reducer:{
        app:user
    }
})