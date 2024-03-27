import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routerUser from './routes/user.routes.js';
import routerPaidPlans from './routes/paidplans.routes.js';
import routerVideos from './routes/video.routes.js';
import routerPayment from './routes/payment.routes.js';
import routerFlush from './routes/flush.router.js';
import routerLanguages from './routes/languages.routes.js';
import morgan from 'morgan';
import routerRank from './routes/rank.routes.js';
import routerContact from './routes/contact.routes.js';
import { FRONTEND_URL } from './config.js';
import http from 'http'; // Importa el módulo http de Node.js

const app = express();

// Configuración CORS
const corsOptions = {
  origin: FRONTEND_URL,
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
app.use('/apiPaidPlans', routerPaidPlans);
app.use('/apiVideos', routerVideos);
app.use('/api/payment', routerPayment);
app.use('/api/rank', routerRank);
app.use('/apiContact', routerContact);
app.use('/api/flush', routerFlush);
app.use('/apiLanguages', routerLanguages)

// Configura el tiempo de espera del servidor HTTP
const server = http.createServer(app);
server.setTimeout(800000); // 10 minutos en milisegundos

export default app;