
import ReactPlayer from 'react-player';

const VideosListComponent = () => {

    // Const videos = useSelector
    // Const chapters= userSelector
    
    const videosData = [
        {   
            title: "Understanding Trends, HH, HL",
            chapter:"1",
            url: "https://res.cloudinary.com/dqtm0nme2/video/upload/v1706318219/1_ouod0y.mp4"
        },
        {
            title: "Understanding Trends, HH, HL",
            chapter:"1",
            url: "https://res.cloudinary.com/dqtm0nme2/video/upload/v1706395786/2_t9jyud.mp4"
        },
        {
            title: "Understanding Trends, HH, HL",
            chapter:"1",
            url: "https://res.cloudinary.com/dqtm0nme2/video/upload/v1706395794/176303_1080p_ackjgu.mp4"
        },
        {
            title: "Understanding Trends, HH, HL",
            chapter:"2",
            url: "https://res.cloudinary.com/dqtm0nme2/video/upload/v1706395796/183279_540p_ildqib.mp4"
        },
        {
            title: "Understanding Trends, HH, HL",
            chapter:"2",
            url: "https://res.cloudinary.com/dqtm0nme2/video/upload/v1706395811/188021_540p_nphmdk.mp4"
        },
        {
            title: "Understanding Trends, HH, HL",
            chapter:"2",
            url: "https://res.cloudinary.com/dqtm0nme2/video/upload/v1706395842/188778_1080p_ck2h7e.mp4"
        },
        {
            title: "Understanding Trends, HH, HL",
            chapter:"2",
            url: "https://res.cloudinary.com/dqtm0nme2/video/upload/v1706395846/189020_540p_aoh1hd.mp4"
        },
        {
            title: "Understanding Trends, HH, HL",
            chapter:"2",
            url: "https://res.cloudinary.com/dqtm0nme2/video/upload/v1706395848/190144_540p_gdyitw.mp4"
        },

        
    ];

    const chaptersVideos = [
        {
            id:1,
            name: "Chapter 1"
        
        },
        {
            id:2,
            name: "Chapter 2"
        
        }
    ]


    const videosByChapter = videosData.reduce((acc, video) => {
        acc[video.chapter] = acc[video.chapter] || [];
        acc[video.chapter].push(video);
        return acc;
    }, {});

    return (
        <div>
            {/* Renderizar videos por capítulo */}
            {chaptersVideos.map((chapter) => (
                <div key={chapter.id}>
                    <h1 className="text-6xl font-bold text-white mb-8 text-center">{chapter.name}</h1>
                    <div className="flex flex-wrap justify-center">
                        {videosByChapter[chapter.id]?.map((video, index) => (
                            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
                                <div className="mb-2 font-bold text-white">{video.title}</div>
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

