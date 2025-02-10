import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../data/store";
import { LoginState } from "../../data/slices/login";
import {
  CartsandOrdersState,
  fetchCartsandOrders,
} from "../../data/slices/cartsandOrders";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router";
import { Ruppeeicon } from "../Products/CataLogItem/styled.components";
import { CheckoutButton } from "../Cart/styled.components";
import {
  ProfileContainer,
  Section,
  SectionTitle,
  UserDetailsContainer,
  ProfilePicture,
  UserDetails,
  UserDetail,
  OrdersList,
  MyItem,
  MyItemTitle,
  MyItemContent,
  MyItemRow,
  OrderItemsList,
  OrderItem,
  TotalAmount,
  NoOrders,
  RateNow,
} from "./styled.components";

const Profile: React.FC = () => {
  const { userDetails, isLogging } = useSelector<RootState, LoginState>(
    (state) => state.login
  );
  const { myOrders, isLoading } = useSelector<RootState, CartsandOrdersState>(
    (state) => state.cartandOders
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCartsandOrders());
  }, [dispatch]);

  if (isLoading || isLogging) {
    return <Loader />;
  }

  return userDetails ? (
    <ProfileContainer>
      <Section>
        <SectionTitle>User Profile</SectionTitle>
        <UserDetailsContainer>
          <ProfilePicture>
            {userDetails.name.charAt(0).toUpperCase()}
          </ProfilePicture>
          <UserDetails>
            <UserDetail>
              <strong>Name :</strong> {userDetails.name}
            </UserDetail>
            <UserDetail>
              <strong>Email :</strong> {userDetails.email}
            </UserDetail>
            <UserDetail>
              <strong>Address :</strong>{" "}
              {userDetails.address || "No address available."}
            </UserDetail>
          </UserDetails>
        </UserDetailsContainer>
      </Section>

      <Section>
        <SectionTitle>My Orders</SectionTitle>
        {myOrders.length > 0 ? (
          <OrdersList>
            {myOrders.map((order, index) => {
              const formattedDate = new Date(
                order.orderedDate
              ).toLocaleString();
              return (
                <MyItem>
                  <MyItemContent>
                    <MyItemRow>
                      <MyItemTitle>Order ID: {order.orderId}</MyItemTitle>
                    </MyItemRow>
                    <MyItemRow>
                      <strong>Ordered Date:</strong>
                      <p>{formattedDate}</p>
                    </MyItemRow>
                    <MyItemRow>
                      <strong>Items:</strong>
                      <OrderItemsList>
                        {order.orderItems.map((item, idx) => (
                          <OrderItem key={idx}>
                            <p>
                              <strong>{item.item.prdname}</strong> - Quantity:{" "}
                              {item.userSelectedQuantity}
                            </p>
                          </OrderItem>
                        ))}
                      </OrderItemsList>
                    </MyItemRow>
                    <MyItemRow>
                      <strong>Total:</strong>
                      <TotalAmount>
                        <Ruppeeicon />
                        {order.orderItems
                          .reduce(
                            (total, item) =>
                              total +
                              item.item.discountedprice *
                                item.userSelectedQuantity,
                            0
                          )
                          .toFixed(2)}
                      </TotalAmount>
                    </MyItemRow>
                  </MyItemContent>
                </MyItem>
              );
            })}
          </OrdersList>
        ) : (
          <NoOrders>
            <p>No orders on your bucket</p>
            <CheckoutButton onClick={() => navigate("/products")}>
              Shop Now
            </CheckoutButton>
          </NoOrders>
        )}
      </Section>
    </ProfileContainer>
  ) : (
    <ProfileContainer>
      <div>No user data available. Please log in.</div>
    </ProfileContainer>
  );
};

export default Profile;
