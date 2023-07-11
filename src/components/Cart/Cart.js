import React from "react";
import { useEffect, useState } from "react";
import "./cart.css";

const Cart = () => {
    const [ CART, setCart ] = useState([]);

    useEffect(() => {
    const storedCartData = localStorage.getItem('cart');
    if (storedCartData) {
        setCart(JSON.parse(storedCartData));
    }
    }, []);

    return (
        <div>
            {CART.map((props, index) => (
                <div key={index}>
                    {
                        props.name
                    }
                </div>
            ))}
        </div>
    )
}

export default Cart;