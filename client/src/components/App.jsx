import { Route, Routes } from 'react-router-dom';
import Order from "./Order/Order.jsx";
import Cart from "./Cart/Cart.jsx";
import MainScreen from "./MainScreen/MainScreen.jsx";
import SignLogIn from "./SignLogIn/SignLogIn.jsx";
import User from "./User/User.jsx";
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
                <Route path="/order" element={<Order />}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/signlogin" element={<SignLogIn/>}/>
                <Route path="/admin" element={<a/>}/>
            </Routes>
        </ThemeProvider>
    )
}

export default App;