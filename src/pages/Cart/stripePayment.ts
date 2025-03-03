import { loadStripe } from "@stripe/stripe-js";
import { CartItemState } from "../../data/slices/cartsandOrders";
import { toast } from "react-toastify";

export const triggerStripe = async (cartItems: CartItemState[]) => {
  const firebasePublishableKey = String(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  );
  const firebaseSecretKey = String(process.env.REACT_APP_STRIPE_SECRET_KEY);

  const stripePromise = loadStripe(firebasePublishableKey);
  if (!cartItems.length) return;

  const stripe = await stripePromise;
  if (!stripe) return;

  try {
    const response = await fetch(
      "https://api.stripe.com/v1/checkout/sessions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${firebaseSecretKey}`, // Use your secret key securely
        },
        body: new URLSearchParams({
          payment_method_types: "card",
          line_items: JSON.stringify(
            cartItems.map((item) => ({
              price_data: {
                currency: "usd",
                product_data: {
                  name: item.item.prdname,
                },
                unit_amount: item.item.discountedprice * 100, // Stripe accepts amount in cents
              },
              quantity: item.userSelectedQuantity,
            }))
          ),
          mode: "payment",
          success_url: window.location.origin + "/success",
          cancel_url: window.location.origin + "/cancel",
        }),
      }
    );

    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
    toast.success("Order placed Successfully...");
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    toast.error("Order place failed...");
  }
};
