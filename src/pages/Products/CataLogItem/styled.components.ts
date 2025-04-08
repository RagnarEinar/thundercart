import styled from "styled-components";
import { FaRupeeSign } from "react-icons/fa";
import { Button } from "../../Login/styled.components";

export const CataLogWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  @media (max-width: 768px) {
  gap: 1.2rem;
  }
`;

export const CatalogItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 200px;
  border-radius: 10px;
  box-shadow: 0 4px 10px ${({ theme }) => theme.mediumBoxShadow};
  transition: transform 0.2s ease;
  margin: 0 auto;
  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    max-width: unset;
  }
`;

export const CatalogItem = styled.div`
 background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  cursor: pointer;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  @media (max-width: 768px) {
    border-radius: 0px;
  }
`;

export const CartContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const PrdImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  border: 0.5px solid lightgrey;
  @media (max-width: 768px) {
    max-width: 40%;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0.6rem 1rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const ItemName = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color};
  margin: 0;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  display: block;
  word-wrap: break-word;
  white-space: normal;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const ItemDesc = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.cartItemDescColor};
  margin: 0;
`;

export const PriceContainer = styled.div`
  margin-top: 0.6rem;
  display: flex;
  gap: 0.3rem;
`;

export const DiscountedPrice = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.cartItemDisPrice};
  margin: 0;
  font-weight: bold;
  align-self: self-end;
`;

export const OrgPrice = styled.p`
  font-size: 0.7rem;
  text-decoration: line-through;
  color: ${({ theme }) => theme.cartItemOrgPrice};
  margin: 0;
  align-self: self-end;
`;

export const DiscountedPercent = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.cartItemDiscountPercent};
  margin-left: 1rem;
  font-weight: bold;
  align-self: flex-end;
`;

export const FreeDelivery = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.cartItemFreeDel};
  margin: 0;
  font-weight: bold;
  position: absolute;
  bottom: 15px;
`;

export const Ruppeeicon = styled(FaRupeeSign)`
  font-size: 0.6rem;
  margin-right: 0.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1.2rem 0rem 0.6rem 0rem;
  gap: 0.6rem;
`;

export const EditButton = styled(Button)`
  color: ${({ theme }) => theme.cartBtnTextColor};
  background-color: ${({ theme }) => theme.cartEditBtnBackground};
  box-shadow: 0 4px 16px ${({ theme }) => theme.mediumBoxShadow};
  padding: 0rem 1rem;
  font-size: 0.8rem;
  height: 1.8rem;
  &:hover {
    transform: scale(1.05);
  }
`;

export const DeleteButton = styled(Button)`
  color: ${({ theme }) => theme.cartBtnTextColor};
  background-color: ${({ theme }) => theme.cartDeleteBtnBackground};
  box-shadow: 0 4px 16px ${({ theme }) => theme.mediumBoxShadow};
  padding: 0rem 1rem;
  font-size: 0.8rem;
  height: 1.8rem;
  &:hover {
    transform: scale(1.05);
  }
`;

export const AddButton = styled(Button)`
  display: flex;
  color: ${({ theme }) => theme.cartBtnTextColor};
  background-color: ${({ theme }) => theme.cartAddBtnBackground};
  align-self: center;
  margin: 0px;
  font-size: 1rem;
  padding: 0.5rem 1rem;

  box-shadow: 0 4px 16px ${({ theme }) => theme.mediumBoxShadow};
  &:hover {
    transform: scale(1.05);
  }
`;
