import React, { useEffect } from "react";
import "./listGoods.css";
import ElementListGoods from "./ElementListGoods/ElementListGoods";
import { useSelector, useDispatch } from "react-redux";
import { sortData } from "../../../slices/listGoodsSlice";

const ListGoods = () => {
  const dispatch = useDispatch();
  const DATA = useSelector((state) => state.listGoods.data);

  useEffect(() => {
    dispatch(sortData());
  }, []);

  return (
    <div className="list-goods">
      {DATA.map((props, index) => (
        <ElementListGoods key={props.id} {...props} />
      ))}
    </div>
  );
};
export default ListGoods;
