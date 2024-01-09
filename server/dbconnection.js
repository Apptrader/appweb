/*
Este archivo establece la conexión a la base de datos utilizando Sequelize.
Crea una instancia de Sequelize con los parámetros necesarios, como el nombre de la base de datos, usuario, contraseña, host y dialecto (en este caso, MySQL).
El parámetro logging: false desactiva la salida de logs de Sequelize, pero puedes configurarlo según tus necesidades.
Exporta la instancia de Sequelize para que pueda ser utilizada en otros archivos.
*/
// dbconnection.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('tradesite', 'root', 'xxx', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Puedes configurar esto según tus necesidades
});

export default sequelize;
