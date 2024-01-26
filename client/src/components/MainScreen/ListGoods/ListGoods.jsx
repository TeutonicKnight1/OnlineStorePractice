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

  console.log(DATA.length)
  return (
    <div className="list-goods">
      {DATA.length != 0 ? (
        DATA.map((element) => (
          <ElementListGoods key={element.id} {...element} />
        ))
      ) : (
        <div>
          <p className="list-goods-not-found">Товары не найдены</p>
        </div>
      )}
    </div>
  );
};
export default ListGoods;
