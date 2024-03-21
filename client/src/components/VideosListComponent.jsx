import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import getParamsEnv from '../functions/getParamsEnv';

const {API_URL_BASE, VITE_HOME, VITE_REGISTER } = getParamsEnv()



const VideosListComponent = () => {
    const [language, setLanguage] = useState(true); // Estado para almacenar el idioma seleccionado (true para inglés, false para árabe)
    const [selectedChapter, setSelectedChapter] = useState(null); // Estado para almacenar el capítulo seleccionado
    const [videosData, setVideosData] = useState([]); // Estado para almacenar los datos de los videos

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    const handleChapterChange = (chapterId) => {
        setSelectedChapter(chapterId);
    };

    useEffect(() => {
        // Realizar la solicitud HTTP para obtener los datos de los videos
        axios.get(`${API_URL_BASE}/apiVideos/videos`)
            .then(response => {
                setVideosData(response.data);
            })
            .catch(error => {
                console.error('Error fetching videos:', error);
            });
    }, []);

    console.log(videosData)

    const filteredVideos = videosData.filter(video => video.language === language);

    // Extraer los capítulos de los datos de los videos
    const chaptersVideos = Array.from(new Set(filteredVideos.map(video => video.chapter_id))).map(chapter => ({
        id: chapter,
        name: `Chapter ${chapter}`
    }));

    const videosByChapter = filteredVideos.reduce((acc, video) => {
        acc[video.chapter_id] = acc[video.chapter_id] || [];
        acc[video.chapter_id].push(video);
        return acc;
    }, {});

    const selectedChapterVideos = videosByChapter[selectedChapter] || [];

    return (
        <div className='px-40'>
            {/* Botones de selección de idioma */}
            <div className="mb-4">
                <button 
                    className={`mr-4 ${language ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2 rounded`}
                    onClick={() => handleLanguageChange(true)}
                >
                    English
                </button>
                <button 
                    className={`mr-4 ${!language ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2 rounded`}
                    onClick={() => handleLanguageChange(false)}
                >
                    Arabic
                </button>
            </div>

            {/* Botones de selección de capítulo */}
            <div className="mb-4">
                {chaptersVideos.map(chapter => (
                    <button
                        key={chapter.id}
                        className={`mr-4 ${selectedChapter === chapter.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2 rounded`}
                        onClick={() => handleChapterChange(chapter.id)}
                    >
                        {chapter.name}
                    </button>
                ))}
            </div>

            {/* Renderizar videos del capítulo seleccionado */}
            {selectedChapter && (
                <div>
                    <h1 className="text-4xl font-bold text-white mb-8 text-left pt-16">{`Chapter ${selectedChapter}`}</h1>
                    <div className="flex flex-wrap justify-start">
                        {selectedChapterVideos.map((video, index) => (
                            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                                <div className="mb-2 font-bold text-blue-400">{video.title}</div>
                                <div className="flex justify-center">
                                    <ReactPlayer
                                        url={video.videoUrl} // Corregir el nombre de la propiedad para acceder a la URL del video
                                        width="90%"
                                        height="80%"
                                        controls={true}
                                        playsinline={true}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default VideosListComponent;
