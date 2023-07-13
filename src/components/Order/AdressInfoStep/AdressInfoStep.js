import React from "react";
import "./adressInfoStep.css";
import MapComponent from "./mapComponent/mapComponent";

const AdressInfoStep = () => {
    return (
        <div className="adress-info-step">
            <div className="adress-info-step-map">
                <MapComponent key="map1"/>
            </div>
        </div>
    )
}

export default AdressInfoStep;