
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
import routerVideos from './routes/video.routes.js';
import routerPayment from './routes/payment.routes.js';
import morgan from 'morgan';
import routerRank from './routes/rank.routes.js';
import routerContact from './routes/contact.routes.js'

const app = express();

// Configuración CORS
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Rutas
app.use('/apiUser', routerUser);
app.use('/apiAdmin', routerAdmin);
app.use('/apiPaidPlans', routerPaidPlans);
app.use('/apiVideos', routerVideos);
app.use('/api/payment', routerPayment);
app.use('/api/rank', routerRank);
app.use('/apiContact', routerContact);


export default app;
