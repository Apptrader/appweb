import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import getParamsEnv from '../functions/getParamsEnv';
import { IoLanguage } from "react-icons/io5";
import { FaTableList } from "react-icons/fa6";


const { API_URL_BASE } = getParamsEnv();

const VideosListComponent = () => {
    const [language, setLanguage] = useState(true);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [videosData, setVideosData] = useState([]);
    const [chaptersData, setChaptersData] = useState([]);

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    const handleChapterChange = (chapterId) => {
        setSelectedChapter(chapterId);
    };

    useEffect(() => {
        axios.get(`${API_URL_BASE}/apiVideos/videos`)
            .then(response => {
                setVideosData(response.data);
            })
            .catch(error => {
                console.error('Error fetching videos:', error);
        });
        axios.get(`${API_URL_BASE}/apiChapters/allChapters`)
            .then(response => {
                setChaptersData(response.data);
            })
            .catch(error => {
                console.error('Error fetching chapters:', error);
        });
    }, []);

    const filteredVideos = videosData.filter(video => video.language === language);

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
            {chaptersData.length > 0 && (
    <div className="mb-4">
        <h2 className="text-2xl font-bold text-white mb-2">Chapters:</h2>
        <ul className="text-white">
            {chaptersData.map(chapter => (
                <li key={chapter.id}>{`Chapter ${chapter.id}: ${chapter.name}`}</li>
            ))}
        </ul>
    </div>
)}

            
            <div className="mb-4 flex flex-wrap">
                
                <div className="mr-2 mb-2 px-12 py-0,5 font-bold text-blue-400"><IoLanguage color="white" size={24} /></div>
                <button 
                    className={`mr-4 ${language ? 'bg-blue-500 text-white' : ' text-white bold'} px-4 py-1,5 rounded font-bold`}
                    onClick={() => handleLanguageChange(true)}
                    style={{ fontFamily: 'Arial, sans-serif' }}
                >
                    English
                </button>
                <button 
                    className={`mr-4 ${!language ? 'bg-blue-500 text-white' : 'text-white bold'} px-4 py-1,5 rounded font-bold`}
                    onClick={() => handleLanguageChange(false)}
                    style={{ fontFamily: 'Arial, sans-serif' }}
                >
                    Arabic
                </button>
                
                
            </div>

            <div className="mb-4 flex flex-wrap">
                <div className="mr-2 mb-2 px-12 py-0,5 font-bold text-blue-400"><FaTableList color="white" size={24} /></div>
                {chaptersVideos.map(chapter => (
                    <button
                        key={chapter.id}
                        className={`mr-2 mb-2 ${selectedChapter === chapter.id ? 'bg-blue-500 text-white' : ' text-white bold'} px-2 py-0,5 rounded font-bold`}
                        onClick={() => handleChapterChange(chapter.id)}
                        style={{ fontFamily: 'Arial, sans-serif' }}
                    >
                        {chapter.name}
                    </button>
                ))}
            </div>

            {selectedChapter && (
                <div>
                    <h1 className="text-4xl font-bold text-white mb-8 pt-8">{`Chapter ${chaptersVideos.find(chapter => chapter.id === selectedChapter)?.name}`}</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {selectedChapterVideos.map((video, index) => (
                            <div key={index} className="p-2">
                                
                                <div className="aspect-w-16 aspect-h-9">
                                    <ReactPlayer
                                        url={video.videoUrl}
                                        className="react-player"
                                        width="100%"
                                        height="100%"
                                        controls={true}
                                        playsinline={true}
                                    />
                                </div>
                                <div className="mt-2 font-bold text-white">{video.title}</div>
                                <div className="mb-2 font-bold text-blue-400">{video.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default VideosListComponent;
