import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';

const SubsUser = sequelize.define('subsUser', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }
});
;

export default SubsUser;