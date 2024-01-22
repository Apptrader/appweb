import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';

const PaidPlan = sequelize.define('paidPlan', {
  idPaidPlan: {
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
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  feature: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  // Nuevo campo para imágenes (BLOB)
  planImage: {
    type: DataTypes.BLOB,
    allowNull: true // Puedes cambiar a false si las imágenes son obligatorias
  }
});

export default PaidPlan;
