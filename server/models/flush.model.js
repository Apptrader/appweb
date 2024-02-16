// models/admin.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';
import User from './user.model.js';
import PaidPlan from './paidplans.model.js';

const Flush = sequelize.define('flush', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
   
  },
  plan_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

Flush.belongsTo(User, { foreignKey: 'user_id', targetKey: 'idUser' });
Flush.belongsTo(PaidPlan, { foreignKey: 'plan_id', targetKey: 'idPaidPlan' });

export default Flush;
