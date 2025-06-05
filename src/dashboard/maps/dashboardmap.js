import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Default Islamabad coordinates
const DEFAULT_COORDS = { lat: 33.6844, lng: 73.0479 };

// Custom marker icon
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const DashboardMap = ({
  latitude = DEFAULT_COORDS.lat,
  longitude = DEFAULT_COORDS.lng,
  setLatitude = () => {},
  setLongitude = () => {},
}) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      setTimeout(() => {
        mapRef.current.invalidateSize();
      }, 0);
    }
  }, []);

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setLatitude(lat.toFixed(6));
    setLongitude(lng.toFixed(6));
  };

  return (
    <Box
      sx={{
        m: 2,
        height: '370px',
        border: '1px solid #ccc',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <MapContainer
        center={[parseFloat(latitude), parseFloat(longitude)]}
        zoom={13}
        scrollWheelZoom
        zoomControl
        style={{ height: '100%', width: '100%' }}
        whenCreated={(mapInstance) => {
          mapRef.current = mapInstance;
        }}
        onClick={handleMapClick}
      >
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[parseFloat(latitude), parseFloat(longitude)]}
          icon={markerIcon}
        />
      </MapContainer>
    </Box>
  );
};

export default DashboardMap;
