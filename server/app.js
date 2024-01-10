
/*

Este archivo configura y crea una instancia de la aplicación Express.
Importa los módulos express, cors, y el enrutador desde admin.routes.js.
Configura CORS para permitir solicitudes desde http://localhost:4000.
Usa el middleware express.json() para parsear el cuerpo de las solicitudes como JSON.
Monta las rutas definidas en admin.routes.js bajo el prefijo '/api'.
Inicia el servidor Express en el puerto 5000 y muestra un mensaje en la consola cuando el servidor está listo.
Exporta la instancia de la aplicación para que pueda ser utilizada en otros archivos.

*/



// app.js
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routerAdmin from './routes/admin.routes.js';
import routerUser from './routes/user.routes.js';
import routerPaidPlans from './routes/paidplans.routes.js';

const app = express();

// Configuración CORS
const corsOptions = {
  origin: 'http://localhost:4001',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Rutas
app.use('/apiUser', routerUser);
app.use('/apiAdmin', routerAdmin);
app.use('/apiPaidPlans', routerPaidPlans);

export default app;
