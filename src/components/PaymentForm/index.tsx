import React, { useState, FormEvent } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm: React.FC = () => {
  const [amount, setAmount] = useState<number>(1000); // Amount in cents (e.g., 1000 = $10)
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    try {
      // Create a Stripe Checkout session on the client side
      const checkoutSession = await fetch('https://api.stripe.com/v1/checkout/sessions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer YOUR_SECRET_KEY`, // Use your Stripe secret key here
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payment_method_types: ['card'],
          line_items: [
            {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: 'Product Name',
                },
                unit_amount: amount,
              },
              quantity: 1,
            },
          ],
          mode: 'payment',
          success_url: `${window.location.origin}/success`,
          cancel_url: `${window.location.origin}/cancel`,
        }),
      }).then((res) => res.json());

      const { id } = checkoutSession;
      const { error } = await stripe.redirectToCheckout({
        sessionId: id,
      });

      if (error) {
        setError(error.message as string);
      } else {
        alert('Payment successful!');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payment Form</h2>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount / 100} // Convert cents to dollars
          onChange={(e) => setAmount(Number(e.target.value) * 100)}
        />
      </div>
      <div>
        <label>Card Details</label>
        <CardElement />
      </div>
      <button type="submit" disabled={loading || !stripe}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default PaymentForm;
