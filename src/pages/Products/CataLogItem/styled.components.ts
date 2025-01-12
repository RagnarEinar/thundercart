import styled from "styled-components";
import { FaRupeeSign } from "react-icons/fa";

export const CataLogWrapper = styled.div`
  background-color: ${({ theme }) => theme.cartListbackground};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
`;

export const CatalogItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  border-radius: 10px;
  box-shadow: 0 4px 10px ${({ theme }) => theme.lightBoxShadow};
  transition: transform 0.3s ease;
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
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
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
`;

export const ItemName = styled.p`
  font-size: 1.2rem;
  color: rgba(51, 51, 51, 1); /* Dark text */
  margin: 0;
  font-weight: 600;
`;

export const ItemDesc = styled.p`
  font-size: 1rem;
  color: rgba(102, 102, 102, 1); /* Light grey text */
  margin: 0;
  font-style: italic;
`;

export const ItemSumm = styled.p`
  font-size: 0.9rem;
  color: rgba(51, 51, 51, 1); /* Dark text */
  margin: 0;
  width: 100%;
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const DiscountedPrice = styled.p`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 1); /* Black text */
  margin: 0;
  font-weight: bold;
`;

export const OrgPrice = styled.p`
  font-size: 0.9rem;
  text-decoration: line-through;
  color: rgba(119, 119, 119, 1); /* Grey text */
  margin: 0;
`;

export const DiscountedPercent = styled.p`
  font-size: 1rem;
  color: rgba(0, 128, 0, 1); /* Green */
  margin: 0;
`;

export const FreeDelivery = styled.p`
  font-size: 0.8rem;
  color: rgba(51, 51, 51, 1); /* Dark text */
  margin: 0;
  font-style: italic;
`;

export const Ruppeeicon = styled(FaRupeeSign)`
  font-size: 0.8rem;
  margin-right: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  gap: 10px;
`;

export const EditButton = styled.button`
  padding: 10px;
  color: rgba(255, 255, 255, 1); /* White text */
  background-color: rgba(100, 222, 2, 1); /* Green */
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(75, 183, 0, 1); /* Darker green */
  }
`;

export const DeleteButton = styled.button`
  padding: 10px;
  color: rgba(255, 255, 255, 1); /* White text */
  background-color: rgba(249, 118, 3, 1); /* Orange */
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(232, 107, 2, 1); /* Darker orange */
  }
`;

export const AddButton = styled.button`
  display: flex;
  padding: 10px;
  color: rgba(255, 255, 255, 1); /* White text */
  background-color: rgba(4, 49, 248, 1); /* Blue */
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  align-self: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(3, 40, 209, 1); /* Darker blue */
  }
`;
