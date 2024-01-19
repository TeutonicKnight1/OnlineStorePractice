import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: "account",
    initialState: {
        email: "",
        password: "",
        login: "",
    },
    reducers:{
        setAccount: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.login = action.payload.login;
        }
    }
})

export default accountSlice.reducer