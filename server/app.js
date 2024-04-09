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
import routerChapters from './routes/chapters.routes.js';
import bodyParser from 'body-parser';
import Stripe from "stripe";
import { WEBHOOK_SECRET } from "./config.js";


const endpointSecret = WEBHOOK_SECRET
/* const stripe = new Stripe("sk_test_51OJV6vCtqRjqS5chtpxR0cKFJLK8jf3WRVchpsfCFZx3JdiyPV0xcHZgYbaJ70XYsmdkssJpHiwdCmEun6X7mThj00IB3NQI0C");
 */
const stripe = new Stripe("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")

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
app.use('/webhook', express.raw({ type: 'application/json' }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.raw({ type: "*/*" }))

// Rutas
app.use('/apiUser', routerUser);
app.use('/apiPaidPlans', routerPaidPlans);
app.use('/apiVideos', routerVideos);
app.use('/api/payment', routerPayment);
app.use('/api/rank', routerRank);
app.use('/apiContact', routerContact);
app.use('/api/flush', routerFlush);
app.use('/apiLanguages', routerLanguages)
app.use('/apiChapters', routerChapters)

let subId; // Declarar subId fuera del callback
let subPlanId
let customer
let payMethod


async function crearSuscripcionConMetodoDePago(customerId, priceId, paymentMethodId) {
  try {
      console.log(paymentMethodId)
      

      // Adjuntar el método de pago al cliente
      await stripe.paymentMethods.attach(paymentMethodId, {
        customer: customerId,
    });
    
    // Establecer el método de pago como predeterminado y configurar el uso futuro
    await stripe.customers.update(customerId, {
        invoice_settings: {
            default_payment_method: paymentMethodId,
        }
    });

      // Crear la suscripción utilizando el método de pago predeterminado
      const subscription = await stripe.subscriptions.create({
          customer: customerId,
          items: [{ price: priceId }],
          trial_period_days: 30
      });

      console.log('Suscripción creada con método de pago:', subscription);
      return subscription;
  } catch (error) {
      console.error('Error al crear la suscripción con método de pago:', error);
      throw error;
  }
}


 app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (request, response) => { // Agrega la palabra clave async aquí
    const sig = request.headers["stripe-signature"];
    const bodyString = request.body.toString();
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        bodyString,
        sig,
        /* endpointSecret */
      );
    } catch (err) {
      console.log(`Webhook Error: ${err.message}`);
      return response.status(400).send(`Webhook Error: ${err.message}`);
    }

    let resData = "";

    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        customer = paymentIntent.customer
        payMethod = paymentIntent.payment_method
        /* if (paymentIntent.amount === 60000) {
          await crearSuscripcionConMetodoDePago(customer, "price_1P2MQQCtqRjqS5chcgCR4WJ2", payMethod)
        } else if(paymentIntent.amount === 25000) {
          await crearSuscripcionConMetodoDePago(customer, "price_1P2MPqCtqRjqS5chqiRgs0jA", payMethod)
        } else if (paymentIntent.amount === 15000) {
          await crearSuscripcionConMetodoDePago(customer, "price_1P2LOSCtqRjqS5ch03lA7nKo", payMethod)
        } */

        if (paymentIntent.amount === 60000) {
          await crearSuscripcionConMetodoDePago(customer, "price_1P2yuVIrqUJwwaEOWgYCIp1O", payMethod)
        } else if(paymentIntent.amount === 25000) {
          await crearSuscripcionConMetodoDePago(customer, "price_1P2yuVIrqUJwwaEOWgYCIp1O", payMethod)
        } else if (paymentIntent.amount === 15000) {
          await crearSuscripcionConMetodoDePago(customer, "price_1P2yuVIrqUJwwaEOWgYCIp1O", payMethod)
        } 
      
        resData = paymentIntent;
        break;
      case "charge.succeeded":
         payMethod = event.data.object.payment_method;
        resData= payMethod
        break;
      case "customer.created":
        customer = event.data.object
        break
      case "customer.subscription.created":
        const subscription = event.data.object;
        resData = { message: `Subscription for ${subscription.id} was Created!`, sub: subscription };
        subId = subscription.id; // Asignar el valor de subscription.id a subId
        subPlanId = subscription.plan.id
        break;
      case 'checkout.session.completed':
        resData = event.data.object
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    console.log(resData);

    return response.status(200).send(resData);
  }
);

// Configura el tiempo de espera del servidor HTTP
const server = http.createServer(app);
server.setTimeout(800000); // 10 minutos en milisegundos

export default app;

/* const payment = event.data.object
    resData = payment
    if (subId && subPlanId) {
      alterarSuscripcion(subId, subPlanId)
    } */