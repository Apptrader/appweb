/*
Este archivo sirve como punto de entrada principal de la aplicación.
Importa el objeto app desde el archivo app.js.
Define el puerto en el que el servidor estará escuchando (en este caso, 4000).
Inicia el servidor Express llamando al método listen en el objeto app, y muestra un mensaje en la consola cuando el servidor está listo para recibir conexiones.

*/ 

import sequelize from './dbconnection.js';
import app from './app.js';


sequelize.sync({ force: true }).then(() => {
  const port = 4000;
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });

}).catch((error) => {
  console.error('Error al sincronizar modelos con la base de datos:', error);
});