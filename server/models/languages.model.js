import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';

const VideoLanguage = sequelize.define('videoLanguage', {
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
    }
});

export default VideoLanguage;