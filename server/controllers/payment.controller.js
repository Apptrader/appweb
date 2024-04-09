import Stripe from "stripe";
import { WEBHOOK_SECRET } from "../config.js";


import { FRONTEND_URL } from "../config.js";

const stripe = new Stripe("sk_test_51OJV6vCtqRjqS5chtpxR0cKFJLK8jf3WRVchpsfCFZx3JdiyPV0xcHZgYbaJ70XYsmdkssJpHiwdCmEun6X7mThj00IB3NQI0C");

export const handlePayment = async (req, res) => {
    const { product, name, customerInfo } = req.body;
    console.log(product, name, customerInfo);

    try {
        const customer = await stripe.customers.create({
            email: customerInfo.email,
            name: customerInfo.name
        });
        console.log(customer);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: product.price * 100, // Amount in cents
            currency: 'usd',
            customer: customer.id,
            description: `Payment for ${product.name}`,
            setup_future_usage: 'off_session' // Ensures that the Payment Intent can be used without a setup session
        });
        
        res.json(paymentIntent);
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



