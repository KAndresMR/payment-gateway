const express = require('express');
const Stripe = require('stripe');
require('dotenv').config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Camiseta',
                    },
                    unit_amount: 2000, // 20 USD en centavos
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'https://www.google.com/',
        cancel_url: 'https://tuweb.com/cancel',
    });

    res.json({ url: session.url });
});

app.listen(4242, () => console.log('Servidor en http://localhost:4242'));
app.use(express.static('public'));