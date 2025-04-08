import { useState, FormEvent, useEffect } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import {
  CartsandOrdersState,
  placeOrder,
  resetCartErrorState,
} from "../../data/slices/cartsandOrders";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import ErrorModal from "../ErrorModel";
import { RootState } from "../../data/store";
import styled from "styled-components";
import { Button } from "../../pages/Login/styled.components";
import Loader from "../Loader";
import {  Title } from "../Payment";

const CheckoutForm: React.FC = () => {
  const [stripeLoaded, setStripeLoaded] = useState(false);
  const { error, isOrderPlaced, isLoading } = useSelector<
    RootState,
    CartsandOrdersState
  >((s) => s.cartandOrders);
  const [showModal, setShowModal] = useState(false);
  const [errorHeader, setErrorHeader] = useState("");
  const [errorBody, setErrorBody] = useState("");
  const [errorPrimaryText, setErrorPrimaryText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleClose = () => {
    dispatch(resetCartErrorState());
    setShowModal(false);
    navigate("/cart");
  };

  const setErrorState = () => {
    setErrorHeader("Payment Error");
    setErrorBody("Failed to process payment. Please try again.");
    setShowModal(true);
  };

  const goToMyOrders = () => {
    setShowModal(false);
    navigate("/profile");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${window.location.origin}/completion` },
      redirect: "if_required",
    });

    if (result.error) {
      toast.error(result.error.message || "Payment failed.");
      setMessage(result.error.message || "Payment failed.");
      setErrorState();
    } else if (
      "paymentIntent" in result &&
      result.paymentIntent?.status === "succeeded"
    ) {
      toast.success("Payment successful!");
      dispatch(placeOrder());
    } else {
      toast.error("Payment not completed.");
      setErrorState();
    }

    setIsProcessing(false);
  };

  useEffect(() => {
    if (isOrderPlaced) {
      setErrorHeader("Your Order Placed 😊");
      setErrorBody(
        "We have received your order, please track status in myorders..."
      );
      setErrorPrimaryText("Check Order Status");
      setShowModal(true);
    } else if (error === "Order failed") {
      setErrorHeader("Order failed to place 😞");
      setErrorBody("Something went wrong, please try later...");
      setShowModal(true);
    }
  }, [error, isOrderPlaced]);

  useEffect(() => {
    if (stripe && elements) {
      setStripeLoaded(true);
    }
  }, [stripe, elements]);

  if (isLoading) {
    return <Loader message="Processing payment... 😊" />;
  }

  return !stripeLoaded ? (
    <Loader message="Processing..." />
  ) : (
    <>
      <Title>ThunderCart Payment</Title>
      <FormContainer id="payment-form" onSubmit={handleSubmit}>
        <PaymentElementContainer>
          <PaymentElement id="payment-element" />
        </PaymentElementContainer>
        <SubmitButton
          disabled={isProcessing || !stripe || !elements}
          id="submit"
        >
          <span id="button-text">
            {isProcessing ? "Processing..." : "Pay now"}
          </span>
        </SubmitButton>
        {message && <MessageContainer>{message}</MessageContainer>}
        {showModal && (
          <ErrorModal
            header={errorHeader}
            body={errorBody}
            primaryBtnText={errorPrimaryText}
            primaryBtnAction={goToMyOrders}
            onClose={handleClose}
          />
        )}
      </FormContainer>
    </>
  );
};

export default CheckoutForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  margin: auto;
`;

const PaymentElementContainer = styled.div`
  width: 100%;
  margin-bottom: 1.2rem;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  padding: 0.7rem;
  background-color: #007bff;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const MessageContainer = styled.div`
  margin-top: 0.6rem;
  color: red;
  font-size: 0.9rem;
`;
