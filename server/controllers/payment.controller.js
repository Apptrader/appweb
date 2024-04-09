import Stripe from "stripe";
import { WEBHOOK_SECRET } from "../config.js";


import { FRONTEND_URL } from "../config.js";

/* const stripe = new Stripe("sk_test_51OJV6vCtqRjqS5chtpxR0cKFJLK8jf3WRVchpsfCFZx3JdiyPV0xcHZgYbaJ70XYsmdkssJpHiwdCmEun6X7mThj00IB3NQI0C");

export const handlePayment = async (req, res) => {
    const { product, customerInfo } = req.body;
    const { name, email } = customerInfo;
    console.log(product, name, email);

    const stripe = new Stripe("sk_test_51OJV6vCtqRjqS5chtpxR0cKFJLK8jf3WRVchpsfCFZx3JdiyPV0xcHZgYbaJ70XYsmdkssJpHiwdCmEun6X7mThj00IB3NQI0C");

    try {
        // Crear el cliente en Stripe
        const customer = await stripe.customers.create({
            name: name,
            email: email,
        });

        const currentDate = new Date();

        // Obtener el próximo mes
        const nextMonth = new Date(currentDate);
        nextMonth.setMonth(nextMonth.getMonth() + 1);

        // Crear la sesión de pago con el ID del cliente
        const session = await stripe.checkout.sessions.create({
            customer: customer.id,
            line_items: [
                {
                    price: product.price, 
                    quantity: 1
                }
            ],
            mode: 'payment',
            payment_method_types: ['card'],
            success_url: `${FRONTEND_URL}/payment/success`, 
            cancel_url: `${FRONTEND_URL}/payment/cancel`,
            payment_intent_data: {
                setup_future_usage: "off_session"
            }
        });
        res.json(session);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};
export const handleSubscription = async (req, res) => {
    const { product, name } = req.body;
    console.log(product, name);

    const stripe = new Stripe("sk_test_51OJV6vCtqRjqS5chtpxR0cKFJLK8jf3WRVchpsfCFZx3JdiyPV0xcHZgYbaJ70XYsmdkssJpHiwdCmEun6X7mThj00IB3NQI0C");

    try {

        const currentDate = new Date();

        // Obtener el próximo mes
        const nextMonth = new Date(currentDate);
        nextMonth.setMonth(nextMonth.getMonth() + 1);

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: product.price, 
                    quantity: 1
                }
            ],
            mode: 'subscription',
            payment_method_types: ['card'],
            success_url: `${FRONTEND_URL}/payment/success`, 
            cancel_url: `${FRONTEND_URL}/payment/cancel`,
        });
        res.json(session);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};



 */

//CODIGO DEL DEPLOY

const stripe = new Stripe("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");

export const handlePayment = async (req, res) => {
    const { product, customerInfo } = req.body;
    const { name, email } = customerInfo;
    console.log(product, name, email);

    try {
        // Crear el cliente en Stripe
        const customer = await stripe.customers.create({
            name: name,
            email: email,
        });

        const currentDate = new Date();

        // Obtener el próximo mes
        const nextMonth = new Date(currentDate);
        nextMonth.setMonth(nextMonth.getMonth() + 1);

        // Crear la sesión de pago con el ID del cliente
        const session = await stripe.checkout.sessions.create({
            customer: customer.id,
            line_items: [
                {
                    price: product.price, 
                    quantity: 1
                }
            ],
            mode: 'payment',
            payment_method_types: ['card'],
            success_url: `${FRONTEND_URL}/payment/success`, 
            cancel_url: `${FRONTEND_URL}/payment/cancel`,
            payment_intent_data: {
                setup_future_usage: "off_session"
            }
        });
        res.json(session);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};
export const handleSubscription = async (req, res) => {
    const { product, name } = req.body;
    console.log(product, name);

    try {

        const currentDate = new Date();

        // Obtener el próximo mes
        const nextMonth = new Date(currentDate);
        nextMonth.setMonth(nextMonth.getMonth() + 1);

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: product.price, 
                    quantity: 1
                }
            ],
            mode: 'subscription',
            payment_method_types: ['card'],
            success_url: `${FRONTEND_URL}/payment/success`, 
            cancel_url: `${FRONTEND_URL}/payment/cancel`,
        });
        res.json(session);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};
