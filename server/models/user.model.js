import { DataTypes } from 'sequelize';
import sequelize from '../dbconnection.js';
import PaidPlan from './paidplans.model.js';
import Rank from './rank.model.js';

const User = sequelize.define('user', {
  idUser: {
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
    type: DataTypes.INTEGER,
    allowNull: true
  },
  Phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  CodeReferenced: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  pointsRight: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  pointsLeft: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  idPaidPlan: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  referralsCount: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  position: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  rank_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  highestRank: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  aiqToken: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  payAmount: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  enrollmentVolume: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  directLeft: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  directRight: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  role: {
    type: DataTypes.ENUM('0', '1'),
    allowNull: false,
    defaultValue: '0'
  }
});

User.beforeCreate((user, options) => {
  return User.max('UserCode')
    .then(max => {
      user.UserCode = (max || 0) + 1; // Incrementa el valor máximo encontrado o establece 1 si no hay filas
    });
});



User.belongsTo(PaidPlan, { foreignKey: 'idPaidPlan' });
User.belongsTo(Rank, { foreignKey: 'rank_id' });


export default User;
