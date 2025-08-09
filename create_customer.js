const Stripe = require('stripe');
require('dotenv').config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

(async () => {
  try {
    const customer = await stripe.customers.create({
      email: 'Jane.smith@email.com',
      name: 'Jane Smith',
      description: 'My First Stripe Customer'
    });
  console.log('Success! Customer created ' + customer.id);
  } catch (error) {
    console.error('Error creating customer:', error);
  }
})();
