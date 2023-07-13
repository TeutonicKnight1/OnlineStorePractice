import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent() {
  const [address, setAddress] = useState("");

  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      const formattedAddress = data.display_name;
      setAddress(formattedAddress);
    } catch (error) {
      console.error("Ошибка при выполнении обратного геокодирования:", error);
    }
  };

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
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; OpenStreetMap contributors"
          maxZoom={19}
        />
        <MapEvents />
      </MapContainer>
      <div>Адрес: {address}</div>
    </div>
  );
}

export default MapComponent;
