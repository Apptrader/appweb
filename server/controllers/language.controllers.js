import VideoLanguage from "../models/languages.model.js";

export const allLanguages = async (req, res) => {
    try {
        // Consulta para obtener todos los datos de los idiomas desde tu base de datos
        const languages = await VideoLanguage.findAll();
        res.status(200).json(languages);
    } catch (error) {
        console.error('Error fetching languages:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
