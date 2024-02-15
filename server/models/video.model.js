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
    unique: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  chapter_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

// Definir la asociación
Video.belongsTo(VideoChapter, {
  foreignKey: 'chapter_id'
});

export default Video;