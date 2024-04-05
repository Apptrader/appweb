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
        "language": 2
      }
    ]
    ;

    for (const video of videosData) {
      // Busca si ya existe un video con la misma URL
      const existingVideo = await Video.findOne({ videoUrl: video.videoUrl });

      // Si no existe, lo crea
      if (!existingVideo) {
        await Video.create(video);
        console.log(`Video creado exitosamente: ${video.title}`);
      } else {
        console.log(`El video "${video.title}" ya existe.`);
      }
    }

    console.log('Proceso de creación de videos finalizado.');
  } catch (error) {
    console.error('Error al crear los videos:', error);
  }
};

export default createVideos;