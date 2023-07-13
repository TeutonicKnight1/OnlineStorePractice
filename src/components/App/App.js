import React from "react";
import { Route, Routes } from 'react-router-dom';
import Order from "../Order/Order";
import Cart from "../Cart/Cart";
import MainScreen from "../MainScreen/MainScreen";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#222831'
        },
        secondary: {
            main: '#00ADB5'
        }
    }
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<MainScreen />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/order" element={<Order />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App;