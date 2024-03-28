import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import getParamsEnv from '../functions/getParamsEnv';

const { API_URL_BASE } = getParamsEnv();

const VideosListComponent = () => {
    const [language, setLanguage] = useState(true);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [videosData, setVideosData] = useState([]);

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

            <div className="mb-4 flex flex-wrap">
                {chaptersVideos.map(chapter => (
                    <button
                        key={chapter.id}
                        className={`mr-2 mb-2 ${selectedChapter === chapter.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2 rounded`}
                        onClick={() => handleChapterChange(chapter.id)}
                    >
                        {chapter.name}
                    </button>
                ))}
            </div>

            {selectedChapter && (
                <div>
                    <h1 className="text-4xl font-bold text-white mb-8 pt-8">{`Chapter ${selectedChapter}`}</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {selectedChapterVideos.map((video, index) => (
                            <div key={index} className="p-2">
                                <div className="mb-2 font-bold text-blue-400">{video.title}</div>
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
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default VideosListComponent;