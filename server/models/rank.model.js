import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';

const Rank = sequelize.define('rank', {
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
  commission: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  points: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  left: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  right: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  topPayMonth: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  topPayWeek: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  
});

export default Rank;
