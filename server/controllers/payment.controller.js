import Stripe from "stripe";

import { FRONTEND_URL } from "../config";

export const handlePayment = async (req,res) =>{

    const {product, name} = req.body
    console.log(product, name)
 

  const stripe =  new Stripe("sk_test_51OJV6vCtqRjqS5chtpxR0cKFJLK8jf3WRVchpsfCFZx3JdiyPV0xcHZgYbaJ70XYsmdkssJpHiwdCmEun6X7mThj00IB3NQI0C")

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


