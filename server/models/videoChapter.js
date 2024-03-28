import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';

const VideoChapter = sequelize.define('videoChapter', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    language_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true
    }
});

export default VideoChapter;
