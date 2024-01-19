import { useEffect } from "react";
import "../../../less/listGoods.less";
import ElementListGoods from "./ElementListGoods";
import { useSelector, useDispatch } from "react-redux";
import { sortData } from "../../../slices/listGoodsSlice";

const ListGoods = () => {
  const dispatch = useDispatch();
  const DATA = useSelector((state) => state.listGoods.data);

  useEffect(() => {
    dispatch(sortData());
  }, [dispatch]);

  return (
    <div className={status === "mobile" ? "list-goods list-goods-mobile" : "list-goods"}>
      {DATA.map((element) => (
        <ElementListGoods key={element.id} {...element}/>
      ))}
    </div>
  );
};
export default ListGoods;
