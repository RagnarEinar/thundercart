import { FaRupeeSign } from "react-icons/fa";
import styled from "styled-components";
import { Button } from "../Login/styled.components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 6px 20px ${({ theme }) => theme.lightBoxShadow};
  @media (max-width: 568px) {
    padding: 1rem;
    margin: 1rem 0rem 0rem 0rem;
  }
`;

export const CartWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
`;

export const CartHeader = styled.h2`
  text-align: center;
  font-size: 1.3jjrem;
  font-weight: bold;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 568px) {
    font-size: 0.8rem;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 868px) {
    flex-direction: row;
  }
`;

export const CartItemsList = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  // border: 0.5px solid rgba(214, 212, 212, 0.95);
  border-radius: 8px;
  box-shadow: 0 6px 20px ${({ theme }) => theme.lightBoxShadow};

  @media (max-width: 868px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 568px) {
    padding: 0.5rem;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  cursor: pointer;
  flex: 2;
  @media (max-width: 868px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  border: 0.5px solid lightgrey;
  @media (min-width: 568px) and (max-width: 868px) {
    width: 150px;
    height: 100px;
  }
`;

export const DetailsWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0px auto;
  @media (max-width: 868px) {
    margin: unset;
  }
`;

export const ItemName = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 568px) {
    font-size: 0.8rem;
  }
`;

export const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 5px 0px;
  @media (max-width: 568px) {
    font-size: 0.7rem;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DiscountedPrice = styled.span`
  font-size: 1rem;
  @media (max-width: 568px) {
    font-size: 0.7rem;
  }
`;

export const OrgPrice = styled.span`
  text-decoration: line-through;
  color: #757575;
  align-self: flex-end;
  font-size: 0.8rem;
  @media (max-width: 568px) {
    font-size: 0.6rem;
  }
`;
export const DiscountedPercent = styled.span`
  color: rgb(17, 241, 13);
  font-size: 1rem;
  @media (max-width: 568px) {
    font-size: 0.7rem;
  }
`;

export const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex: 1;
  @media (max-width: 868px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const Quantity = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.cartItemSummColor};
  align-self: center;
  @media (max-width: 568px) {
    font-size: 0.8rem;
  }
`;
export const QuantityButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    position: relative;
  }
`;

export const CartRuppeeicon = styled(FaRupeeSign)`
  font-size: 0.7rem;
  margin-right: 1px;
  @media (max-width: 568px) {
    font-size: 0.5rem;
  }
`;
export const QuantityButton = styled(Button)`
  background: #f5f5f5;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color};
  transition: background 0.2s ease-in-out;
  &:hover {
    background: #ddd;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  @media (max-width: 868px) {
    padding: 0.2rem 0.5rem;
  }
`;

export const RemoveButton = styled(Button)`
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  background: #e53935;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: #c62828;
    transform: scale(1.05);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const OrderDetailsWrapper = styled.div`
  flex: 1;
  padding: 1rem;
  border-radius: 8px;
  // border: 0.5px solid rgba(214, 212, 212, 0.95);
  box-shadow: 0 6px 20px ${({ theme }) => theme.lightBoxShadow};
  max-height: 300px;
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h3 {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  p {
    color: lime;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const CheckoutButton = styled(Button)`
  background: #2e7d32;
  color: white;
  font-size: 1rem;
  padding: 0.75rem;
  width: 90%;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: #1b5e20;
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ShowNowButton = styled(Button)`
  background: #1976d2;
  padding: 0.5rem 1rem;
  max-width: 200px;
  font-size: 0.9rem;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: #1565c0;
    transform: scale(1.05);
  }
`;

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const Tooltip = styled.span`
  font-size: 0.75rem;
  color: red;
  margin-left: 0.5rem;
`;
