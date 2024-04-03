import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';

const PaidPlan = sequelize.define('paidPlan', {
  idPaidPlan: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
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
    allowNull: true,
    unique: false
  },
  feature: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
  },
  // Nuevo campo para imágenes (BLOB)
  planImage: {
    type: DataTypes.STRING,
    allowNull: true // Puedes cambiar a false si las imágenes son obligatorias
  },
  bonus: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false
  },
  renewal: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false
  }
});

export default PaidPlan;
