import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { API_KEY } from './maps/API_KEYS';

const MapComponent = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCM8hPXnCcO_wGR9bR3ZvkHBBoHi99lhpU",
  });

  const mapStyles = {
    height: '400px',
    width: '400px'    
  };

  const defaultCenter = {
    lat: -34.397,
    lng: 10.644,
  };

  if (loadError) return <div>Error loading map</div>;

  return (
    <div className='w-[1200px] m-auto h-[600px] bg-red-500'>
      {isLoaded ? (
        <GoogleMap
        mapContainerClassName='w-full h-full'
          zoom={8}
          center={defaultCenter}

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
