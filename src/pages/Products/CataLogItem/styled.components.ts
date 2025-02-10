import styled from "styled-components";
import { FaRupeeSign } from "react-icons/fa";

export const CataLogWrapper = styled.div`
  // background-color: ${({ theme }) => theme.cartListBackground};
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CatalogItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  border-radius: 10px;
  box-shadow: 0 4px 10px ${({ theme }) => theme.mediumBoxShadow};
  transition: transform 0.2s ease;
  margin: 0 auto;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const CatalogItem = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
`;

export const PrdImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 15px;
`;

export const ItemName = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.color};
  margin: 0;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: italic;
  text-align: center;
  display: block;
  word-wrap: break-word;
  white-space: normal;

  &:hover {
    cursor: pointer;
  }
`;

export const ItemDesc = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.cartItemDescColor};
  margin: 0;
  font-style: italic;
`;

export const PriceContainer = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 5px;
`;

export const DiscountedPrice = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.cartItemDisPrice};
  margin: 0;
  font-weight: bold;
`;

export const OrgPrice = styled.p`
  font-size: 0.7rem;
  text-decoration: line-through;
  color: ${({ theme }) => theme.cartItemOrgPrice};
  margin: 0;
  align-self: flex-end;
`;

export const DiscountedPercent = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.cartItemDiscountPercent};
  margin-left: 10px;
  font-weight: bold;
`;

export const FreeDelivery = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.cartItemFreeDel};
  margin: 0;
  font-style: italic;
  font-weight: bold;
`;

export const Ruppeeicon = styled(FaRupeeSign)`
  font-size: 0.6rem;
  margin-right: 1px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  gap: 10px;
`;

export const EditButton = styled.button`
  padding: 10px;
  color: ${({ theme }) => theme.cartBtnTextColor};
  background-color: ${({ theme }) => theme.cartEditBtnBackground};
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 4px 16px ${({ theme }) => theme.mediumBoxShadow};
  &:hover {
    transform: translateY(-4px);
  }
`;

export const DeleteButton = styled.button`
  padding: 10px;
  color: ${({ theme }) => theme.cartBtnTextColor};
  background-color: ${({ theme }) => theme.cartDeleteBtnBackground};
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 4px 16px ${({ theme }) => theme.mediumBoxShadow};
  &:hover {
    transform: translateY(-4px);
  }
`;

export const AddButton = styled.button`
  display: flex;
  padding: 15px 20px;
  color: ${({ theme }) => theme.cartBtnTextColor};
  background-color: ${({ theme }) => theme.cartAddBtnBackground};
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  align-self: center;
  transition: background-color 0.3s;
  margin: 5px auto 30px auto;
  font-size: 1.2rem;
  font-style: italic;
  box-shadow: 0 4px 16px ${({ theme }) => theme.mediumBoxShadow};
  &:hover {
    transform: translateY(-4px);
  }
`;
