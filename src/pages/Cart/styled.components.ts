import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.sidebarBackground};

  @media (max-width: 500px) {
    padding: 10px;
  }
`;

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 67px);
  padding: 10px;
  width: 100%;

  button {
    width: 250px;
  }
`;

export const CartWrapper = styled.div`
  padding: 30px;
  max-width: 1200px;
  margin: auto;
  background-color: ${({ theme }) => theme.hoverBackground};
  border-radius: 12px;

  @media (max-width: 500px) {
    padding: 30px 10px;
  }
`;

export const CartHeader = styled.h2`
  background-color: ${({ theme }) => theme.sidebarBackground};
  text-align: center;
  color: rgba(29, 18, 240, 0.95);
  font-size: 24px;
  margin-bottom: 40px;
  font-weight: 600;
  padding: 10px;
  border-radius: 10px;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const CartItemsList = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 15px;
  width: 100%;
  max-width: 800px;
`;

export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.sidebarBackground};
  padding: 20px 10px;
  border-radius: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
    max-width: 100%;
  }
`;

export const ItemName = styled.p`
  display: flex;
  align-self: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: italic;
  word-wrap: break-word;
  white-space: normal;

  &:hover {
    cursor: pointer;
  }
`;

export const ItemImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 600px) {
    width: 150px;
    height: 100px;
  }
`;

export const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Quantity = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.cartItemSummColor};
  font-style: italic;
  align-self: center;
`;

export const QuantityButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const QuantityButton = styled.button`
  padding: 5px 12px;
  background-color: ${({ theme }) => theme.cartBackBackground};
  color: ${({ theme }) => theme.cartBtnTextColor};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  transition: transform 0.2s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:active {
    transform: scale(0.7);
  }
`;

export const RemoveButton = styled.button`
  width: 130px;
  padding: 10px 16px;
  background-color: rgba(255, 6, 6, 0.92);
  color: ${({ theme }) => theme.cartBtnTextColor};
  border: none;
  border-radius: 14px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    width: 80px;
    font-size: 14px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  text-align: center;
`;

export const OrderDetailsWrapper = styled.div`
  align-self: center;
  background-color: ${({ theme }) => theme.sidebarBackground};
  padding: 30px;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
`;

export const OrderDetails = styled.div`
  h3 {
    font-size: 28px;
    color: ${({ theme }) => theme.color};
    text-align: center;
    margin-bottom: 20px;
  }

  span {
    font-size: 20px;
  }

  button {
    min-width: 50%;
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin: 20px 0;
  font-weight: 600;
  font-style: italic;

  > p {
    color: ${({ theme }) => theme.cartAddToCartBtnBackground};
  }
`;

export const CheckoutButton = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.cartAddToCartBtnBackground};
  color: ${({ theme }) => theme.cartBtnTextColor};
  box-shadow: 0 5px 10px ${({ theme }) => theme.heavyBoxShadow};
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  margin: 30px auto 0;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
  }
`;
