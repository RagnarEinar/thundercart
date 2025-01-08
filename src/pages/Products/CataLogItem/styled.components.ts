import styled from "styled-components";
import { FaRupeeSign } from "react-icons/fa";

export const CataLogWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
`;

export const CatalogItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 0 auto;
  padding: 10px;
  background: rgb(255, 255, 255);
  box-shadow: 0 4px 10px rgba(248, 10, 10, 0.1);
`;

export const CatalogItem = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const PrdImage = styled.img`
  width: 250px;
  height: 200px;
  min-width: 250px;
  min-height: 200px;
  border-radius: 8px;
  object-fit: cover;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-items: flex-start;
  padding: 0px 5px;
  margin: 10px 0px;
`;

export const ItemName = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin: 0;
  font-weight: 600;
  display: block;
`;

export const ItemDesc = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 0;
  font-style: italic;
`;

export const ItemSumm = styled.p`
  font-size: 0.8rem;
  color: #333;
  margin: 0;
  width: 100%;
`;

export const ItemRating = styled.p`
  font-size: 0.8rem;
  color: #333;
  margin: 0;
`;

export const ItemReviews = styled.p`
  font-size: 0.8rem;
  color: #333;
  margin: 0;
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const DiscountedPrice = styled.p`
  font-size: 1.2rem;
  align-self: self-end;
  color: rgba(1, 1, 1, 1);
  margin: 0px;
`;

export const OrgPrice = styled.p`
  font-size: 0.7rem;
  text-decoration: line-through;
  align-self: self-end;
  color: rgb(113, 113, 113);
  margin: 0px;
`;

export const DiscountedPercent = styled.p`
  font-size: 1rem;
  color: rgb(9, 255, 0);
  margin: 0px;
  padding-left: 10px;
`;

export const FreeDelivery = styled.p`
  font-size: 0.8rem;
  color: rgba(1, 1, 1, 1);
  margin: 0px;
  font-style: italic;
`;

export const Ruppeeicon = styled(FaRupeeSign)`
  font-size: 0.6rem;
  margin: 0px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px 5px 20px 5px;
`;

export const AddButton = styled.button`
  padding: 10px;
  margin: 20px auto;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(4, 49, 248, 1);
  border: none;
  border-radius: 6px;
  font-size: 14px;
  display: block;
  &:hover {
    cursor: pointer;
  }
`;

export const EditButton = styled.button`
  padding: 10px;
  margin: auto;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(100, 220, 2, 0.85);
  border: none;
  border-radius: 6px;
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
`;
export const DeleteButton = styled.button`
  padding: 10px;
  margin: auto;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(249, 118, 3, 0.93);
  border: none;
  border-radius: 6px;
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
`;

export const FormWrapper = styled.div``;
