import { createSlice } from "@reduxjs/toolkit";

const CustomerSlice = createSlice({
    name: "customer",
    initialState: {
        name: "",
        phone: "",
        city: "",
        country: "",
        state: "",
        road: "",
        postcode: "",
        house_number: "",
        passport: "",
        card: "",
    },
    reducers:{
        setInfoStep1: (state, action) => {
            state.name = action.payload.name;
            state.phone = action.payload.phone;
            state.passport = action.payload.passport;
        },

        setInfoStep2: (state, action) => {
            state.card = action.payload.card;
        },

        setInfoStep3: (state, action) => {
            state.state = action.payload.state;
            state.road = action.payload.road;
            state.house_number = action.payload.house_number;
            state.postcode = action.payload.postcode;
            state.city = action.payload.city;
            state.country = action.payload.country;
        },
    }
})

export const { setInfoStep1, setInfoStep2, setInfoStep3 } = CustomerSlice.actions
export default CustomerSlice.reducer