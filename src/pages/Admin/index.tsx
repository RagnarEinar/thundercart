import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  AdminOptions,
  ManageOrders,
  ManageProducts,
  ManageUsers,
  OutletWrapper,
  Wrapper,
} from "./styled.components";

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const goToManageProducts = () => {
    navigate("products");
  };
  const goToManageOrders = () => {
    navigate("orders");
  };
  const goToManageUsers = () => {
    navigate("users");
  };
  return (
    <Wrapper>
      <AdminOptions>
        <ManageProducts onClick={goToManageProducts}>
          Manage Products
        </ManageProducts>
        <ManageOrders onClick={goToManageOrders}>Manage Orders</ManageOrders>
        <ManageUsers onClick={goToManageUsers}>Manage Users</ManageUsers>
      </AdminOptions>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Wrapper>
  );
};

export default Admin;
