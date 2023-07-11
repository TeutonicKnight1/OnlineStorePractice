import React from "react";
import { Route, Routes } from 'react-router-dom';
import Order from "../Order/Order";
import Cart from "../Cart/Cart";
import MainScreen from "../MainScreen/MainScreen";

const App = () => {
    return (
            <Routes>
                <Route path="/" element={<MainScreen />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/order" element={<Order />} />
            </Routes>
    )
}

export default App;