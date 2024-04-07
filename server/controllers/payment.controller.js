import Stripe from "stripe";

import { FRONTEND_URL } from "../config.js";

export const handlePayment = async (req,res) =>{

    const {product, name} = req.body
    console.log(product, name)
 

  const stripe =  new Stripe("")

    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    product_data: {
                        name: `${name} plan`,
                        description: `AIQ Accademy ${name} plan with a $${product.renewal} monthly renewal`
                    },
                    currency: "usd",
                    unit_amount: product.price * 100
                },
                quantity: 1
            }
        ],
        mode: "payment",
        success_url: `${FRONTEND_URL}/payment/success`,
        cancel_url: `${FRONTEND_URL}/payment/cancel`
       })
        res.json(session)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
    
};



export const handleSubscription = async (req, res) => {
    const { product, name } = req.body;
    console.log(product, name);

    const stripe = new Stripe("");

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: product.price, // Use the price ID instead of manually specifying price_data
                    quantity: 1
                }
            ],
            mode: 'subscription',
            payment_method_types: ['card'],
            success_url: `${FRONTEND_URL}/payment/success`,
            cancel_url: `${FRONTEND_URL}/payment/cancel`
        });
        res.json(session);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};