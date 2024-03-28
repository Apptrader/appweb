import VideoChapter from "../models/videoChapter.model.js";

export const allChapters = async (req, res) => {
    try {
        // Consulta para obtener todos los datos de los idiomas desde tu base de datos
        const chapters = await VideoChapter.findAll();
        res.status(200).json(chapters);
    } catch (error) {
        console.error('Error fetching chapters:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
