import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { API_KEY } from './maps/API_KEYS';

const MapComponent = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCM8hPXnCcO_wGR9bR3ZvkHBBoHi99lhpU",
  });

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    maxWidth: '1000px', // Ajusta el ancho máximo del mapa
    margin: '0 auto', // Centra horizontalmente el mapa
  };

  const defaultCenter = {
    lat: -34.397,
    lng: 10.644,
  };

  if (loadError) return <div>Error loading map</div>;

  return (
    <div className='w-full'>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={defaultCenter}
          zoom={8}
          options={{ gestureHandling: 'greedy' }} // Opciones adicionales para mejorar la experiencia de usuario
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      ) : (
        <div>Loading map...</div>
      )}
    </div>
  );
};

export default MapComponent;