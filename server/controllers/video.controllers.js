import Video from "../models/video.model.js";
import VideoChapter from "../models/videoChapter.js";


export const allVideos = async (req,res) =>{

    const video = await Video.findAll({
      include:[
        { model: VideoChapter, attributes: ['name']}
      ]
    });
    res.json(video)
};

export const createVideo = async (req, res) => {
  const {
    videoUrl,
    title,
    chapter_id,
    lenguaje
  } = req.body;

  try {
    const newVideo = await Video.create({
      videoUrl,
      title,
      chapter_id,
      lenguaje
    });

    res.status(201).json({ message: 'New video created', video: newVideo });

  } catch (error) {
    console.error('Error creating new video:', error);
    res.status(500).json({ error: 'Error creating new video' });
  }
};

export const createChapter = async (req, res) => {
  const { name } = req.body;

  try {
    // Verificar si el capítulo ya existe
    const existingChapter = await VideoChapter.findOne({ where: { name } });
    if (existingChapter) {
      return res.status(400).json({ error: 'Chapter already exists' });
    }

    // Crear un nuevo capítulo
    const newChapter = await VideoChapter.create({ name });

    res.status(201).json({ message: 'New chapter created', chapter: newChapter });

  } catch (error) {
    console.error('Error creating new chapter:', error);
    res.status(500).json({ error: 'Error creating new chapter' });
  }
};

