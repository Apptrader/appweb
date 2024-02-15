import Video from "../models/video.model.js";

const createVideos = async () => {
  try {
    const videosData = [
      {
        videoUrl: 'video.com',
        title: 'video1',
        chapter_id: 1
      }
    ];

    for (const video of videosData) {
      await Video.create(video);
    }

    console.log('Videos creados exitosamente.');
  } catch (error) {
    console.error('Error al crear los videos:', error);
  }
};

export default createVideos;