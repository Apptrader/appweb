import Video from "../models/video.model.js";
import VideoChapter from "../models/videoChapter.js";
import multer from "multer";

import multerS3 from 'multer-s3';
import {config} from 'dotenv';
import { S3 } from "@aws-sdk/client-s3";
import { S3Client } from "@aws-sdk/client-s3";
import { CreateMultipartUploadCommand, UploadPartCommand, CompleteMultipartUploadCommand } from "@aws-sdk/client-s3";
import dotenv from 'dotenv';
dotenv.config();

config();



const AWS_PUBLIC_KEY = process.env.AWS_PUBLIC_KEY
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME
const AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION
console.log(AWS_BUCKET_NAME)
console.log(AWS_BUCKET_REGION)
console.log(AWS_PUBLIC_KEY)
console.log(AWS_SECRET_KEY)


const s3Client = new S3Client({ 
  region: process.env.AWS_BUCKET_REGION, 
  credentials: {
    accessKeyId: process.env.AWS_PUBLIC_KEY, 
    secretAccessKey: process.env.AWS_SECRET_KEY,
  }
});

const upload = multer({
  storage: multerS3({
      s3: s3Client,
      bucket: process.env.AWS_BUCKET_NAME,
      
      metadata: function (req, file, cb) {
          cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
          cb(null, Date.now().toString())
      }
  })
});

export const uploadVideo = upload.single('video');

export const createVideo = async (req, res) => {
  console.log(req.body, "body")
  const {
    title,
    chapter_id,
    language
  } = req.body;
  
  if (!req.file) {
    return res.status(400).json({ error: 'No file was provided.' });
  }

  try {
    const newVideo = await Video.create({
      videoUrl: req.file.location, // La URL del archivo en S3
      title,
      chapter_id,
      language
    });

    res.status(201).json({ message: 'New video created', video: newVideo, created: "ok" });
  } catch (error) {
    console.error('Error creating new video:', error);
    res.status(500).json({ error: 'Error creating new video' });
  }
};

export const allVideos = async (req,res) =>{

  const video = await Video.findAll({
    include:[
      { model: VideoChapter, attributes: ['name']}
    ]
  });
  res.json(video)
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

export const getAllChapters = async (req,res) => {
  try {
    const response = await VideoChapter.findAll()
    res.status(200).json(response)
  } catch (error) {
    res.json(error)
  }
}