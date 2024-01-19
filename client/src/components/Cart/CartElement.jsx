import "../../less/cartElement.less";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from "react-redux";
import { addGoodsCart, removeGoodsCart, setSumPrice } from "../../slices/cartSlice";
import { increment, decrement } from "../../slices/listGoodsSlice";
import PropTypes from "prop-types";

const CartElement = ({id, name, price, image, componentRender, count }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    console.log(useSelector((state) => state.listGoods.data));
    const updatedCount = useSelector((state) => state.listGoods.data[id].count);
    const handleAddToCart = () => {
        dispatch(increment({ id }));
        dispatch(addGoodsCart({
            id,
            name,
            price,
            image,
            count: updatedCount + 1
        }));
        dispatch(setSumPrice({ cart: [...cart, { id, name, price, image, count: updatedCount + 1 }] })); //анти-задержка в один элемент
        componentRender();
    };

    const handleRemoveFromCart = () => {
        dispatch(decrement({ id }));
        dispatch(removeGoodsCart({ id }));
        dispatch(setSumPrice({ cart: cart.filter(item => item.id !== id) })); //анти-задержка в один элемент
        componentRender();
    };

    return (
        <div className="cart-element">
            <img src={image} alt="ImageGoodsInCart" className="cart-element-image"/>
            <div className="cart-element-info">
                <h1 className="cart-element-info-name">{name}</h1>
                <p className="cart-element-info-price">{price} р.</p>
                <div className="cart-element-info-count">
                    <AddIcon 
                            color="secondary"
                            className="cart-element-info-count-add" 
                            fontSize="medium" 
                            onClick={handleAddToCart}
                    />
                    <p className="cart-element-info-count-number">{updatedCount}</p>
                    <RemoveIcon 
                            color="secondary"
                            className="cart-element-info-count-remove" 
                            fontSize="medium" 
                            onClick={handleRemoveFromCart}
                    />
                </div>
            </div>
        </div>
    )
}

CartElement.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    componentRender: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
}

export default CartElement;