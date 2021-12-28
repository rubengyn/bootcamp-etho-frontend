import { configureStore } from "@reduxjs/toolkit";
import { userRducer } from "../user/user.slice";

const store = configureStore({
    reducer: { user: userRducer }
})

export default store