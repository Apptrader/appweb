import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoListComponent = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET a la API de videos
    axios.get('http://localhost:4000/apiVideos/videos')
      .then(response => {
        // Actualizar el estado con los datos obtenidos
        setVideos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  }, []); // El segundo parámetro [] significa que este efecto se ejecutará solo una vez al montar el componente

  return (
    <div className='bg-gray-800'>
      <section className="bg-gray-800 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            {/* Tu código para el encabezado */}
            <h1 className="text-3xl font-semibold text-white">Lista de Videos</h1>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {videos.map(video => (
              <div key={video.id} className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-gray-800 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <img className='w-full h-full object-cover rounded-xl' src={video.thumbnailUrl} alt={video.title} />
                <h3 className="mb-4 text-white text-2xl font-semibold">{video.title}</h3>
                <p className="font-light text-white sm:text-lg dark:text-gray-400">{video.description}</p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-white text-5xl font-extrabold">{video.duration}</span>
                  <span className="text-gray-500 dark:text-gray-400">minutes</span>
                </div>
                {/* Agregar más elementos según las propiedades del video */}
                <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">Ver video</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default VideoListComponent;
