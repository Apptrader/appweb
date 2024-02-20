import VideoChapter from "../models/videoChapter.js";

const createVideoChapters = async () => {
  try {
    const chaptersData = [
      {
        "name": "Chapter 1: Introduction to Political Trading"
      },
      {
        "name": "Chapter 2: Understanding Market Dynamics"
      },
      {
        "name": "Chapter 3: Analyzing Political Trends"
      },
      {
        "name": "Chapter 4: Strategies for Political Investment"
      }
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