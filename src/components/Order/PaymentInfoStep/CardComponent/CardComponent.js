import React  from "react";
import { useSelector } from "react-redux";
import "./cardComponent.css"

const CardComponent = ({props}) => {
    const {numberCard, ownerCardName, dateCard, codeCard} = props;
    
    return (
        <div className="card-component">
            <span className="card-component-number">{numberCard}</span>
            <div className="card-component-div-data-code">
                <span className="card-component-date">{dateCard}</span>
                <span className="card-component-code">{codeCard}</span>
            </div>
            <span className="card-component-owner-name">{ownerCardName}</span>
        </div>
    );
}

export default CardComponent;