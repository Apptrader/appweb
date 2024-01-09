import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';

const PaidPlan = sequelize.define('paidPlan', {
  idPaidPlan: { // Cambiado de idUsers a idUser
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  planName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  planCost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    unique: false
  },
})

export default PaidPlan;