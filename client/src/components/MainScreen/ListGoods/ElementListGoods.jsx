import "../../../less/elementListGoods.less";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector, useDispatch } from "react-redux";
import { addGoodsCart, removeGoodsCart } from "../../../slices/cartSlice";
import { increment, decrement } from "../../../slices/listGoodsSlice";
import { setSumPrice } from "../../../slices/cartSlice";
import { PropTypes } from 'prop-types';

const ElementListGoods = ({ id, name, price, image }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const count = useSelector((state) => state.listGoods.data[id]?.count);
  
  const handleAddToCart = () => {
    dispatch(increment({ id }));
    dispatch(
      addGoodsCart({
        id,
        name,
        price,
        image,
        count: count + 1,
      })
    );
    dispatch(
      setSumPrice({
        cart: [...cart, { id, name, price, image, count: count + 1 }],
      })
    ); //анти-задержка в один элемент
  };

  const handleRemoveFromCart = () => {
    dispatch(decrement({ id }));
    dispatch(removeGoodsCart({ id }));
    dispatch(setSumPrice({ cart: cart.filter((item) => item.id !== id) })); //анти-задержка в один элемент
  };

  return (
    <div className="element-list-goods">
      <img
        src={image}
        alt="ImageGoods"
        className="image-element-list-goods"
      />
      <div>
        <p>{name}</p>
        <p>{price} р.</p>
        <div className="count-element-list-goods">
          <AddIcon
            color="secondary"
            className="add-icon-element-list-goods"
            fontSize="medium"
            onClick={handleAddToCart}
          />
          <p className="count-p-element-list-goods">{count}</p>
          <RemoveIcon
            color="secondary"
            className="remove-icon-element-list-goods"
            fontSize="medium"
            onClick={handleRemoveFromCart}
          />
        </div>
      </div>
    </div>
  );
};

ElementListGoods.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ElementListGoods;
