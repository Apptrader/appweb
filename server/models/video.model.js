import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';
import VideoChapter from './videoChapter.model.js';
import VideoLanguage from './languages.model.js';

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
    allowNull: true,
  },
  language: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Definir la asociación
Video.belongsTo(VideoChapter, {
  foreignKey: 'chapter_id'
});

Video.belongsTo(VideoLanguage, {
  foreignKey: 'language'
});

export default Video;