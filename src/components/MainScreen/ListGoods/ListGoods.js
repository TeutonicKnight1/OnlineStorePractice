import React from "react";
import "./listGoods.css";
import ElementListGoods from "./ElementListGoods/ElementListGoods";
import { useSelector } from "react-redux";

const ListGoods = () => {
    const DATA = useSelector((state) => state.counter.data.DATA);
    // useEffect(() => {
    //     const storedCartData = localStorage.getItem('cartData');
    //     if (storedCartData) {
    //         setCart(JSON.parse(storedCartData));
    //     }
    // }, []);
    
    return (
        <div className="list-goods">
            {DATA.map((props) => (
                <ElementListGoods key={props.id} {...props}/>
            ))}
        </div>
    )
}
export default ListGoods