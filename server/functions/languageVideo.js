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
      // Busca si ya existe un idioma con el mismo nombre
      const existingLanguage = await VideoLanguage.findOne({ where: { name: language.name } });

      // Si no existe, lo crea
      if (!existingLanguage) {
        await VideoLanguage.create(language);
        console.log(`Idioma de vídeo "${language.name}" creado exitosamente.`);
      } else {
        console.log(`El idioma "${language.name}" ya existe.`);
      }
    }

    console.log('Proceso de creación de idiomas de vídeo finalizado.');
  } catch (error) {
    console.error('Error al crear los idiomas de vídeo:', error);
  }
};

export default videoLanguage;