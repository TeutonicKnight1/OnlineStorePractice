import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { setInfoStep3 } from "../../../../slices/customerSlice";

function MapComponent() {
  const [data, setAddress] = useState('');
  const dispatch = useDispatch();

  const setAdressInfo = (data) => {
    dispatch(setInfoStep3({
      country: data.address.country,
      state: data.address.state,
      city: data.address.city,
      road: data.address.road,
      house_number: data.address.house_number,
      postcode: data.address.postcode,
    }))
  }

  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      setAddress(data);
      setAdressInfo(data);
    } catch (error) {
      console.error("Ошибка при выполнении обратного геокодирования:", error);
    }
  };

  // useEffect(() => {
  //   console.log("Адрес изменился:", data);
  // }, [data]);  

  function MapEvents() {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        reverseGeocode(lat, lng);
      },
    });

    return null;
  }

  return (
    <div id="map" style={{ width: "100%", height: "400px" }}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ width: "100%", height: "100%", overflow: "hidden", border: "2px black solid", borderRadius: "15px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; OpenStreetMap contributors"
          maxZoom={19}
        />
        <MapEvents />
      </MapContainer>
    </div>
  );
}

export default MapComponent;
