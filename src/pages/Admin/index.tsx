import React from "react";
import { Outlet } from "react-router-dom";
import {
  OutletWrapper,
  Wrapper,
} from "./styled.components";

const Admin: React.FC = () => {
  // const navigate = useNavigate();
  // const goToManageProducts = () => {
  //   navigate("products");
  // };
  // const goToManageOrders = () => {
  //   navigate("orders");
  // };
  // const goToManageUsers = () => {
  //   navigate("users");
  // };
  return (
    <Wrapper>
      {/* TODO ThunderCart2.0 */}
      {/* <AdminOptions>
        <ManageProducts onClick={goToManageProducts}>
          Manage Products
        </ManageProducts>
        <ManageOrders onClick={goToManageOrders}>Manage Orders</ManageOrders>
        <ManageUsers onClick={goToManageUsers}>Manage Users</ManageUsers>
      </AdminOptions> */}
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Wrapper>
  );
};

export default Admin;
