import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';
import PaidPlan from './paidplans.model.js';

const User = sequelize.define('user', {
  idUser: { // Cambiado de idUsers a idUser
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  UserName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  UserCode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  Phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  CodeReferenced: {
    type: DataTypes.STRING,
    allowNull: false
  },
  UserPoints: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idPaidPlan: {
    type: DataTypes.UUID,
    allowNull: true
  },
});

User.belongsTo(PaidPlan, { foreignKey: 'idPaidPlan' });


export default User;
