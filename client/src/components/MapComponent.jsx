import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { API_KEY } from './maps/API_KEYS';

const MapComponent = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAfN8bzcreJthGqm_3BaeNC8GYiCAduQgU",
  });

  const mapStyles = {
    height: '400px',
    width: '400px'    
  };
  
  const defaultCenter = {
    lat: 25.798747601988982,
    lng: -80.12857779265352,
  };

  if (loadError) return <div>Error loading map</div>;

  return (
    <div className='w-[1200px] m-auto h-[600px] bg-red-500'>
      {isLoaded ? (
        <GoogleMap
        mapContainerClassName='w-full h-full'
          zoom={19}
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
