import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./user.types";
import reducers from "./user.reducer";

const initialState ={
    data: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers ,
})

export const {reducer: userRducer, actions: userActions} = userSlice