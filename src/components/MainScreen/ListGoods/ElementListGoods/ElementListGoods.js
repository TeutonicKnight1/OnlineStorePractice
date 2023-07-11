import React from "react";
import "./elementListGoods.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector, useDispatch } from "react-redux";
import { addGoodsCart, removeGoodsCart } from "../../../../slices/cartSlice";
import { increment, decrement } from "../../../../slices/counterSlice";
import { setSumPrice } from "../../../../slices/headerSumPriceSlice";

const ElementListGoods = (props) => {
    const dispatch = useDispatch();
    const {id, name, price, image} = props;
    const cart = useSelector((state) => state.cart.cart);
    const count = useSelector((state) => state.counter.data.DATA[id].count);

    const handleAddToCart = () => {
        dispatch(increment({ id }));
        dispatch(addGoodsCart({
            id,
            name,
            price,
            image,
            count
        }));
        dispatch(setSumPrice({ cart: [...cart, { id, name, price, image, count }] })); //анти-задержка в один элемент
    };

    const handleRemoveFromCart = () => {
        dispatch(decrement({ id }));
        dispatch(removeGoodsCart({ id }));
        dispatch(setSumPrice({ cart: cart.filter(item => item.id !== id) })); //анти-задержка в один элемент
    };

    return (
        <div className="element-list-goods">
            <img src={require(`../../../../${image}`)} alt="ImageGoods" className="image-element-list-goods"/>
            <div>
                <p>{name}</p>
                <p>{price} р.</p>
                <div className="count-element-list-goods">
                    <AddIcon 
                        className="add-icon-element-list-goods" 
                        fontSize="medium" 
                        onClick={handleAddToCart}
                    />
                    <p className="count-p-element-list-goods">{count}</p>
                    <RemoveIcon 
                        className="remove-icon-element-list-goods" 
                        fontSize="medium" 
                        onClick={handleRemoveFromCart}
                    />
                </div>
            </div>
        </div>
    )
}

export default ElementListGoods