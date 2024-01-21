import Video from "../models/video.model.js";



export const allVideos = async (req,res) =>{

    const video = await Video.findAll();
    res.json(video)
};

export const createVideo = async (req, res) => {
  const {
    videoUrl,
    title,
    duration,
    description
  } = req.body;

  try {
    const newVideo = await Video.create({
      videoUrl,
      title,
      duration,
      description
    });

    res.status(201).json({ message: 'New video created', video: newVideo });

  } catch (error) {
    console.error('Error creating new video:', error);
    res.status(500).json({ error: 'Error creating new video' });
  }
};
