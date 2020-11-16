import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Card, Grid } from "semantic-ui-react";
import "../styles/App.css";


const UserMap = ({ position }) => {
    return (
      
        <div className="Leaflet-container" >
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
            <Popup>
            Here you are... 
            </Popup>
            </Marker>
        </MapContainer>
        </div>
    );
};

export default UserMap;