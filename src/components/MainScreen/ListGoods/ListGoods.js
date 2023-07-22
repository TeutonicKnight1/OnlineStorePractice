import React, { useEffect } from "react";
import "./listGoods.css";
import ElementListGoods from "./ElementListGoods/ElementListGoods";
import { useSelector, useDispatch } from "react-redux";
import { sortData } from "../../../slices/listGoodsSlice";

const ListGoods = (props) => {
  const status = props.status
  const dispatch = useDispatch();
  const DATA = useSelector((state) => state.listGoods.data);

  useEffect(() => {
    dispatch(sortData());
  }, []);

  return (
    <div className={status === "mobile" ? "list-goods list-goods-mobile" : "list-goods"}>
      {DATA.map((props, index) => (
        <ElementListGoods key={props.id} {...props} status={status}/>
      ))}
    </div>
  );
};
export default ListGoods;
