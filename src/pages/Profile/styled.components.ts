import styled from "styled-components";
import { Ruppeeicon } from "../Products/CataLogItem/styled.components";

export const ProfileContainer = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2.5rem;
  background: ${({ theme }) => theme.background};
  border-radius: 20px;
  box-shadow: 0 8px 30px ${({ theme }) => theme.lightBoxShadow};
  transition: all 0.3s ease;
`;

export const Section = styled.div`
  margin-bottom: 2.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.color};
  margin-bottom: 1.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.cartItemDiscountPercent};
  padding-bottom: 0.5rem;
  font-weight: 600;
`;

export const UserDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ProfilePicture = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: ${({ theme }) => theme.cartItemDiscountPercent};
  color: ${({ theme }) => theme.color};
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px ${({ theme }) => theme.lightBoxShadow};
`;

export const UserDetails = styled.div`
  flex: 1;
`;

export const UserDetail = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color};
  margin: 0.7rem 0;
  line-height: 1.6;
  strong {
    margin-right: 8px;
  }
`;

export const EditButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${({ theme }) => theme.cartAddToCartBtnBackground};
  color: ${({ theme }) => theme.cartBtnTextColor};
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  margin-top: 1rem;

  &:hover {
    background: ${({ theme }) => theme.cartBackBackground};
    transform: scale(1.05);
  }
`;

export const OrdersList = styled.div`
  margin-top: 2rem;
`;

export const NoOrders = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const MyItem = styled.div`
  margin: 1rem 0rem;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 8px 30px ${({ theme }) => theme.mediumBoxShadow};

  &:hover {
    transform: translateY(-4px);
  }
`;

export const MyItemTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const MyItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const MyItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;

  strong {
    font-weight: 600;
    align-self: center;
  }

  p {
    margin: 0;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    strong {
      align-self: self-start;
    }
  }
`;

export const OrderItemsList = styled.div`
  padding-left: 1.5rem;
  font-size: 1rem;
`;

export const OrderItem = styled.div`
  margin-top: 0.5rem;
`;

export const TotalAmount = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
  display: flex;
  align-items: center;

  ${Ruppeeicon} {
    margin-right: 0.5rem;
  }
`;

export const RateNow = styled.button`
  margin-top: 0.5rem;
`;
