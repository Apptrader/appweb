import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';
import VideoChapter from './videoChapter.js';
const Video = sequelize.define('video', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  videoUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  chapter_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  language: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

// Definir la asociación
Video.belongsTo(VideoChapter, {
  foreignKey: 'chapter_id'
});

export default Video;