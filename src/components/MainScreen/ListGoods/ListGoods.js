import React, { useEffect } from "react";
import "./listGoods.css";
import ElementListGoods from "./ElementListGoods/ElementListGoods";
import { useSelector, useDispatch } from "react-redux";
import { sortData } from "../../../slices/sortSlice";

const ListGoods = () => {
    const dispatch = useDispatch();
    const DATA = useSelector((state) => state.counter.data.DATA);
    const sortDATA = useSelector((state) => state.sort.data);
    
    const updatedData = sortDATA.map((props, index) => {
        return {...props, count: DATA[props.id].count}
    })

    useEffect(() => {
        dispatch(sortData());
    }, [])

    return (
        <div className="list-goods">
            {updatedData.map((props, index) => (
                <ElementListGoods key={props.id} {...props}/>
            ))}
        </div>
    )
}
export default ListGoods