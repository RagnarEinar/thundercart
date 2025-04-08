import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorModal from "../ErrorModel";
import Loader from "../Loader";

const BACKEND_URL = process.env.REACT_APP_STRIPE_BACKEND_URL || "";

const Payment: React.FC = () => {
  const [stripeInstance, setStripeInstance] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [errorHeader, setErrorHeader] = useState("");
  const [errorBody, setErrorBody] = useState("");
  const [errorPrimaryText, setErrorPrimaryText] = useState("");
  const location = useLocation();
  const { amount, currency } = location.state || { amount: 0, currency: "INR" };
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleClose = () => {
    setShowModal(false);
    navigate("/cart");
  };
  const paymentUnavailable = () => {
    setErrorHeader("Payment Unavailable");
    setErrorBody("Payment is not available now. Please check back later.");
    setShowModal(true);
  };
  // Fetch and resolve Stripe instance
  useEffect(() => {
    fetch(`${BACKEND_URL}/config`)
      .then(async (r) => {
        if (!r.ok) throw new Error("Failed to fetch Stripe config");
        const { publishableKey } = await r.json();
        return loadStripe(publishableKey);
      })
      .then((stripe) => setStripeInstance(stripe))
      .catch((err) => {
        console.error("Error loading Stripe:", err);
        paymentUnavailable();
      });
  }, []);

  // Fetch client secret only if stripeInstance is set
  useEffect(() => {
    if (!stripeInstance) return;

    const finalAmount = Number(amount) * 100;
    fetch(`${BACKEND_URL}/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: finalAmount, currency }),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to create payment intent");
        const { clientSecret } = await res.json();
        setClientSecret(clientSecret);
      })
      .catch((err) => {
        console.error("Error fetching client secret:", err);
        setErrorHeader("Payment Error");
        setErrorBody("Failed to process payment. Please try again.");
        setErrorPrimaryText("Go to Cart");
        setShowModal(true);
      });
  }, [stripeInstance, amount, currency]);

  return (
    <Container>
      {showModal ? (
        <ErrorModal
          header={errorHeader}
          body={errorBody}
          primaryBtnText={errorPrimaryText}
          onClose={handleClose}
        />
      ) : clientSecret ? (
        <>
          <Elements stripe={stripeInstance} options={{ clientSecret }}>
            <CheckoutFormContainer>
              <CheckoutForm />
            </CheckoutFormContainer>
          </Elements>
        </>
      ) : (
        <Loader message="Initiating payment please expect some delay due to free tier hosting need 30 seconds to recover from sleep mode..." />
      )}
    </Container>
  );
};
export default Payment;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CheckoutFormContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;
