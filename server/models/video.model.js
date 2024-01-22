import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';

const Video = sequelize.define('video', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  videoUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  duration: {
    type: DataTypes.INTEGER, // Asumo que la duración se mide en minutos, puedes ajustar según tus necesidades
    allowNull: false,
    unique: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  }
  /* ,
  thumbnailUrl: {
    type: DataTypes.STRING, // Puedes usar un BLOB si necesitas almacenar imágenes en la base de datos
    allowNull: true
  } */
});

export default Video;
