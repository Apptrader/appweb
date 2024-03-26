import VideoLanguage from "../models/languages.model.js";

const videoLanguage = async () => {
  try {
    const languageData = [
      {
        "name": "English"
      },
      {
        "name": "Arabic"
      },
      {
        "name": "Spanish"
      }
    ];

    for (const language of languageData) {
      await VideoLanguage.create(language);
    }

    console.log('Languages de vídeo creados exitosamente.');
  } catch (error) {
    console.error('Error al crear los languages de vídeo:', error);
  }
};

export default videoLanguage;