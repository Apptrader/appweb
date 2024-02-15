import VideoChapter from "../models/videoChapter.js";

const createVideoChapters = async () => {
  try {
    const chaptersData = [
      { name: 'chapter1' },
      { name: 'chapter2' },
      { name: 'chapter3' }
    ];

    for (const chapter of chaptersData) {
      await VideoChapter.create(chapter);
    }

    console.log('Capítulos de vídeo creados exitosamente.');
  } catch (error) {
    console.error('Error al crear los capítulos de vídeo:', error);
  }
};

export default createVideoChapters;