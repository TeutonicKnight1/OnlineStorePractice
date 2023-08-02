import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { setInfoStep3 } from "../../../../slices/customerSlice";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

function MapComponent() {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [data, setAddress] = useState("");
  const dispatch = useDispatch();

  const setAdressInfo = (data) => {
    dispatch(
      setInfoStep3({
        country: data.address.country,
        state: data.address.state,
        city: data.address.city,
        road: data.address.road,
        house_number: data.address.house_number,
        postcode: data.address.postcode,
      })
    );
  };

  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      setAddress(data);
      setAdressInfo(data);
      setMarkerPosition([lat, lng]);
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

  const customIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div id="map" style={{ width: "100%", height: "400px" }}>
      <MapContainer
        center={[54.3081, 48.3749]}
        zoom={13}
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          border: "2px black solid",
          borderRadius: "15px",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; OpenStreetMap contributors"
          maxZoom={19}
        />
        {markerPosition && (
          <Marker position={markerPosition} icon={customIcon} />
        )}
        <MapEvents />
      </MapContainer>
    </div>
  );
}

export default MapComponent;
