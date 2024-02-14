/*
Este archivo establece la conexión a la base de datos utilizando Sequelize.
Crea una instancia de Sequelize con los parámetros necesarios, como el nombre de la base de datos, usuario, contraseña, host y dialecto (en este caso, MySQL).
El parámetro logging: false desactiva la salida de logs de Sequelize, pero puedes configurarlo según tus necesidades.
Exporta la instancia de Sequelize para que pueda ser utilizada en otros archivos.
*/
// dbconnection.js
import { Sequelize } from 'sequelize';
import {DB_HOST, FRONTEND_URL, DB_DATABASE, DB_USER,DB_PASSWORD } from './config.js'

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  logging: false,
});



export default sequelize;