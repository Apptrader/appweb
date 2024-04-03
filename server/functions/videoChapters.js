import VideoChapter from "../models/videoChapter.model.js";

const createVideoChapters = async () => {
  try {
    const chaptersData = [
      {
        "name": "Chapter 1: Introduction to Political Trading", "language_id": 1
      },
      {
        "name": "Chapter 2: Understanding Market Dynamics", "language_id": 1
      },
      {
        "name": "Chapter 3: Analyzing Political Trends", "language_id": 1
      },
      {
        "name": "Chapter 4: Strategies for Political Investment", "language_id": 1
      },
      {
        "name": "Introduccion Data Analytics", "language_id": 2
      },
      {
        "name": "Arabic trade tecnis", "language_id": 2
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