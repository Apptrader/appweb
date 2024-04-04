import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import getParamsEnv from '../functions/getParamsEnv';
import { IoLanguage } from "react-icons/io5";
import { FaTableList } from "react-icons/fa6";


const { API_URL_BASE } = getParamsEnv();

const VideosListComponent = () => {
    const [language, setLanguage] = useState(1);
    const [selectedChapter, setSelectedChapter] = useState(1);
    const [selectedChapterName, setSelectedChapterName] = useState('');
    const [videosData, setVideosData] = useState([]);
    const [chaptersData, setChaptersData] = useState([]);

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
        setSelectedChapterName(''); // Resetear el nombre del capítulo
    };

    const handleChapterChange = (chapterId) => {
        const selectedChapterData = chaptersData.find(chapter => chapter.id === chapterId);
        if (selectedChapterData) {
            setSelectedChapter(chapterId);
            setSelectedChapterName(selectedChapterData.name);
        }
    };

    useEffect(() => {
        axios.get(`${API_URL_BASE}/apiVideos/videos`)
            .then(response => {
                setVideosData(response.data);
            })
            .catch(error => {
                console.error('Error fetching videos:', error);
        });
        axios.get(`${API_URL_BASE}/apiChapters/chapters`)

            .then(response => {
                setChaptersData(response.data);
            })
            .catch(error => {
                console.error('Error fetching chapters:', error);
        });
    }, []);

    const filteredVideos = videosData.filter(video => video.videoLanguage.id === language);

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
        <div className="px-4">

            <div className="mb-8 flex flex-wrap justify-center items-center">
                <div className="mr-4 mb-2 px-4 py-2 font-bold text-blue-400">
                    <IoLanguage color="white" size={24} />
                </div>
                <button 
                    className={`mr-4 ${language === 1 ? 'bg-blue-500 text-white' : ' text-white bold'} px-4 py-2 rounded font-bold`}
                    onClick={() => handleLanguageChange(1)}

                >
                    English
                </button>
                <button 

                    className={`mr-4 ${language === 2 ? 'bg-blue-500 text-white' : 'text-white bold'} px-4 py-2 rounded font-bold`}
                    onClick={() => handleLanguageChange(2)}
                >
                    Arabic
                </button>
                
                
            </div>

            <div className="mb-8 flex flex-wrap justify-center items-center">
                <div className="mr-4 mb-2 px-4 py-2 font-bold text-blue-400">
                    <FaTableList color="white" size={24} />
                </div>
                {chaptersVideos.map(chapter => (
                    <button
                        key={chapter.id}
                        className={`mr-4 mb-2 ${selectedChapter === chapter.id ? 'bg-blue-500 text-white' : ' text-white bold'} px-4 py-2 rounded font-bold`}

                        onClick={() => handleChapterChange(chapter.id)}
                        style={{ fontFamily: 'Arial, sans-serif' }}
                    >
                        {chapter.name}
                    </button>
                ))}
            </div>

            {selectedChapter && (
                <div>

                    <h1 className="text-4xl font-bold text-white mb-8 pt-8 text-center">{selectedChapterName}</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {selectedChapterVideos.map((video, index) => (
                            <div key={index} className="p-4 bg-gray-800 rounded-lg">
                                <ReactPlayer
                                    url={video.videoUrl}
                                    className="react-player"
                                    width="100%"
                                    height="100%"
                                    controls={true}
                                    playsinline={true}
                                />
                                <h2 className="mt-4 mb-2 text-xl font-bold text-white">{video.title}</h2>
                                <p className="text-gray-300">{video.description}</p>

                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default VideosListComponent;
