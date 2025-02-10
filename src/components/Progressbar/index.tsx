import React from "react";
import styled from "styled-components";

// Define the type for the component props
interface OrderProgressBarProps {
  currentStep: number; // The current step in the order progress (0: Ordered, 1: Shipped, 2: Delivered)
}

const OrderProgressBar: React.FC<OrderProgressBarProps> = ({ currentStep }) => {
  const steps = ["Ordered", "Shipped", "Delivered"];

  // Function to dynamically assign class names based on the step
  const getClassName = (stepIndex: number): string => {
    if (stepIndex < currentStep) return "completed";
    if (stepIndex === currentStep) return "active";
    return "pending";
  };

  return (
    <ProgressContainer>
      {steps.map((step, index) => (
        <ProgressStep className={getClassName(index)} key={index}>
          <StepCircle>{index + 1}</StepCircle>
          <StepLabel>{step}</StepLabel>
        </ProgressStep>
      ))}
    </ProgressContainer>
  );
};

// Styled components for the progress bar

const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px; // Restrict the width of the progress bar
  margin: 0 auto; // Center the progress bar horizontally
  padding: 10px 0;
  position: relative;
`;

const ProgressStep = styled.div`
  text-align: center;
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  /* Ensure the step container doesn't overflow */
  max-width: 100%;
  padding: 0px;

  /* Add spacing between the steps */
  &:not(:last-child) {
    margin-right: 20px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    width: calc(100%); /* Add a little more space between lines */
    height: 10px;
    background-color: #ddd;
  }

  &.completed + &::after {
    background-color: #4caf50; /* Lime green for completed */
  }

  &.active + &::after {
    background-color: #ff9800; /* Orange for active */
  }

  &.completed {
    .step-circle {
      background-color: #4caf50; /* Lime green for completed */
    }
  }

  &.active {
    .step-circle {
      background-color: #ff9800; /* Orange for active */
    }
  }

  &.pending {
    .step-circle {
      background-color: #ddd; /* Grey for pending */
    }
  }
`;

const StepCircle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ddd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #fff;
  margin-bottom: 8px;
  transition: background-color 0.3s;
`;

const StepLabel = styled.div`
  font-size: 14px;
  margin-top: 5px;
`;

export default OrderProgressBar;
