import styled from "styled-components";
import { Button } from "../Login/styled.components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AdminOptions = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const ManageProducts = styled(Button)`
  margin: auto;
  
  &:hover {
    cursor: pointer;
  }
`;

export const ManageUsers = styled(Button)`
  margin: auto;
  
  &:hover {
    cursor: pointer;
  }
`;

export const ManageOrders = styled(Button)`
  margin: auto;
  
  &:hover {
    cursor: pointer;
  }
`;

export const OutletWrapper = styled.div`
  padding: 0px;
`;
