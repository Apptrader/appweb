import Video from "../models/video.model.js";

const createVideos = async () => {
  try {
    const videosData = [
      {
        "videoUrl": "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton",
        "title": "Understanding Trading",
        "chapter_id": "1",
        "language": 1
      },
      {
        "videoUrl": "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton",
        "title": "Understanding Trading",
        "chapter_id": "1",
        "language": 1
      },
      {
        "videoUrl": "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton",
        "title": "Understanding Trading",
        "chapter_id": "1",
        "language": 1
      },
      {
        "videoUrl": "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton",
        "title": "Understanding Trading",
        "chapter_id": "1",
        "language": 1
      },
      {
        "videoUrl": "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton",
        "title": "Understanding Trading",
        "chapter_id": "1",
        "language": 1
      },
      {
        "videoUrl": "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton",
        "title": "Understanding Trading",
        "chapter_id": "1",
        "language": 1
      },
      {
        "videoUrl": "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton",
        "title": "Understanding Trading",
        "chapter_id": "1",
        "language": 1
      },
      {
        "videoUrl": "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton",
        "title": "Understanding Trading",
        "chapter_id": "1",
        "language": 1
      },
      {
        "videoUrl": "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton",
        "title": "Understanding Trading",
        "chapter_id": "1",
        "language": 1
      },
      {
        "videoUrl": "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton",
        "title": "Understanding Trading",
        "chapter_id": "1",
        "language": 1
      },
      {
        "videoUrl": "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton",
        "title": "Introduction to Market Analysis",
        "chapter_id": "2",
        "language": 1
      },
      {
        "videoUrl": "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton",
        "title": "Risk Management Strategies",
        "chapter_id": "3",
        "language": 1
      },
      {
        "videoUrl": "https://www.youtube.com/watch?v=bo9Z_pgByQY&ab_channel=EdgarCrampton",
        "title": "Political Factors in Trading",
        "chapter_id": "3",
        "language": 0
      }
    ]
    ;

    for (const video of videosData) {
      await Video.create(video);
    }

    console.log('Videos creados exitosamente.');
  } catch (error) {
    console.error('Error al crear los videos:', error);
  }
};

export default createVideos;