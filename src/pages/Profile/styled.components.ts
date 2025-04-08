import styled from "styled-components";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "../Login/styled.components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1.2rem;
  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

export const Section = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.wrapperBack};
  box-shadow: 0 6px 20px ${({ theme }) => theme.lightBoxShadow};

  @media (max-width: 500px) {
    padding: 0.5rem;
  }

  @media (min-width: 800px) {
    width: 800px;
    margin: 0 auto;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  padding-bottom: 0rem;

  margin: 0 auto;
`;

export const ProfileHeader = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const ProfilePicture = styled.div`
  width: 140px;
  height: 90px;
  border-radius: 50%;
  background: #ff6347;
  color: white;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem;
  @media (max-width: 768px) {
    width: 100px;
    margin: 0.6rem;
  }
`;

export const UserDetails = styled.div`
  width: 100%;
  align-items: center;
  @media (max-width: 768px) {
    align-items: unset;
  }
`;

export const UserDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1rem;
  margin: 0.7rem 0;
  line-height: 1.5;
  span {
    padding: 0.2rem 0.3rem;
  }
`;

export const AddressInput = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const EditButton = styled(Button)`
  background: #ff6347;
  padding: 0.4rem 0.9rem;
  transition: background 0.2s ease-in-out;
  font-size: 0.9rem;
  &:hover {
    background: #ff4500;
    transform: scale(1.05);
  }
`;

export const SaveButton = styled(Button)`
  padding: 0.4rem 0.9rem;
  background: #2e7d32;
  font-size: 0.9rem;
  transition: background 0.3s ease, transform 0.2s ease;
  &:hover {
    background: #1b5e20;
    transform: scale(1.05);
  }
`;

export const OrdersList = styled.div`
  margin-top: 1.5rem;
`;

export const MyItem = styled.div`
  margin: 0rem 0rem 1rem 0rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 6px 20px ${({ theme }) => theme.mediumBoxShadow};
  &:hover {
    cursor: pointer;
  }
`;

export const MyItemTitle = styled.div`
  font-size: 1.1rem;
  span {
    font-size: 1rem;
    margin-left: 5px;
  }
  @media (max-width: 500px) {
    margin-bottom: 0.3rem;
  }
`;

export const MyItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MyItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const OrderCartTotal = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OrderItemsList = styled.div`
  padding-left: 1rem;
  font-size: 1rem;
`;

export const OrderItem = styled.div`
  margin-top: 0.4rem;
  p {
    font-size: 0.9rem;
  }
`;

export const TotalAmount = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  p {
    color: #ff6347;
  }
  svg {
    color: #ff6347;
    margin-left: 0.3rem;
  }
`;

export const NoOrders = styled.div`
  margin: 20px;
  display: flex;
  font-size: 1rem;
  gap: 1.2rem;
  align-items: center;
  p {
    align-self: center;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ViewDetails = styled.div`
  color: rgb(157, 71, 255);
  &:hover {
    color: rgba(11, 2, 255, 0.92);
  }
`;

export const NameIcon = styled(FaUserAlt)`
  cursor: pointer;
  color: rgba(247, 128, 8, 0.92);
`;
export const EmailIcon = styled(MdEmail)`
  cursor: pointer;
  color: rgba(39, 8, 243, 0.9);
`;
export const GpsIcon = styled(FaMapMarkerAlt)`
  cursor: pointer;
  color: rgba(28, 152, 6, 0.98);
`;
