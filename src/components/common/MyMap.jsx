import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const MyMap = () => {
  const position = [-1.286389, 36.817223]; // Coordinates (Nairobi, Kenya)

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
      className="w-[500px] h-[500px]">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Nairobi, Kenya. <br /> Sunrise Hostel is here!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
