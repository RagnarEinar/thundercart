import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Login/styled.components";

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  width: 15%;
  background-color: #1a202c;
  color: white;
  padding: 1rem;
  display: flex;
  height: 150px;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
    flex-direction: row;
    justify-content: space-around;
    align-self: center;
    padding: 0.5rem;
    height: 100%;
    margin-top:10px;
  }
`;

const SidebarButton = styled(Button)`
  background: none;
  text-align: left;
  padding: 0.75rem;
  font-size: 1rem;
  &:hover {
    color: #63b3ed;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Sidebar>
        <SidebarButton onClick={() => navigate("/admin/manageproducts")}>
          Manage Products
        </SidebarButton>
        <SidebarButton onClick={() => navigate("/admin/manageusers")}>
          Manage Users
        </SidebarButton>
      </Sidebar>
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  );
};

export default AdminDashboard;
