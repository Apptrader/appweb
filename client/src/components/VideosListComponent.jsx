
import ReactPlayer from 'react-player';

const VideosListComponent = () => {

    // Const videos = useSelector
    // Const chapters= userSelector
    
    const videosData = [
        {   
            title: "Understanding Trends, HH, HL",
            chapter:"1",
            url: "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton"
        },
        {
            title: "Understanding Trends, HH, HL",
            chapter:"1",
            url: "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton"
        },
        {
            title: "Understanding Trends, HH, HL",
            chapter:"1",
            url: "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton"
        },
        {
            title: "Understanding Trends, HH, HL",
            chapter:"2",
            url: "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton"
        },
        {
            title: "Understanding Trends, HH, HL",
            chapter:"2",
            url: "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton"
        },
        {
            title: "Understanding Trends, HH, HL",
            chapter:"2",
            url: "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton"
        },
        {
            title: "Understanding Trends, HH, HL",
            chapter:"2",
            url: "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton"
        },
        {
            title: "Understanding Trends, HH, HL",
            chapter:"2",
            url: "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton"
        },

        
    ];

    const chaptersVideos = [
        {
            id:1,
            name: "Chapter 1: A world of technical trading"
        
        },
        {
            id:2,
            name: "Chapter 2: The New Beginning"
        
        }
    ]


    const videosByChapter = videosData.reduce((acc, video) => {
        acc[video.chapter] = acc[video.chapter] || [];
        acc[video.chapter].push(video);
        return acc;
    }, {});

    return (
        <div className='px-40'>
            {/* Renderizar videos por capítulo */}
            {chaptersVideos.map((chapter) => (
                <div key={chapter.id}>
                    <h1 className="text-4xl font-bold text-white mb-8 text-left pt-16">{chapter.name}</h1>
                    <div className="flex flex-wrap justify-start">
                        {videosByChapter[chapter.id]?.map((video, index) => (
                            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                                <div className="mb-2 font-bold text-blue-400">{video.title}</div>
                                <div className="flex justify-center">
                                    <ReactPlayer
                                        url={video.url}
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
            ))}
        </div>
    );

}

export default VideosListComponent

