"use client"


import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Child components like markers, overlays, etc., can be added here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;