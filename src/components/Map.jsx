import { useState, useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useIp } from "../context/IpContext";

const myIcon = new L.Icon({
  iconUrl: "./icon-location.svg",
  iconRetinaUrl: "./icon-location.svg",
  popupAnchor: [-0, -0],
  iconSize: [32, 45],
});

const Map = () => {
  const { isLoading, ipAddress } = useIp();

  const [ipPosition, setIpPosition] = useState([40, 0]);
  const lat = ipAddress?.location?.lat;
  const lng = ipAddress?.location?.lng;

  useEffect(() => {
    if (lat && lng) {
      setIpPosition([lat, lng]);
    }
  }, [lat, lng]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="map_container">
      <MapContainer center={ipPosition} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={myIcon} position={ipPosition}>
          <Popup>You are here</Popup>
        </Marker>
        <ChangeCenter position={ipPosition} />
      </MapContainer>
    </div>
  );
};

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;
