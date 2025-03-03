import React, { useState, useEffect, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../data/store";
import { LoginState, updateAddress } from "../../data/slices/login";
import {
  CartsandOrdersState,
  fetchCartsandOrders,
} from "../../data/slices/cartsandOrders";
import { useNavigate } from "react-router";
import Loader from "../../components/Loader";
import { ShowNowButton } from "../Cart/styled.components";
import { Ruppeeicon } from "../Products/CataLogItem/styled.components";
import {
  ProfileContainer,
  Section,
  SectionTitle,
  ProfileHeader,
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
  AddressInput,
  EditButton,
  SaveButton,
  ProfilePicture,
  ButtonContainer,
  NameIcon,
  EmailIcon,
  GpsIcon,
  ViewDetails,
  OrderCartTotal,
} from "./styled.components";
import MyOrders from "./MyOrders";
import ProductsPopModal from "../../components/ProductsPopModal";
import { fetchProducts } from "../../data/slices/products";

const Profile: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrderid, setSelectedOrderId] = useState<string>("");

  const { userDetails, isLogging } = useSelector<RootState, LoginState>(
    (state) => state.login
  );
  const { myOrders, isWriteSuccess } = useSelector<
    RootState,
    CartsandOrdersState
  >((state) => state.cartandOrders);

  const [isEditing, setIsEditing] = useState(false);
  const [updatedAddress, setUpdatedAddress] = useState<string>(
    userDetails?.address || ""
  );
  const addressInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch orders only when userDetails is available and not loading
  useEffect(() => {
    dispatch(fetchCartsandOrders());
  }, [dispatch]);

  // Focus address input when editing starts
  useEffect(() => {
    if (isEditing && addressInputRef.current) {
      addressInputRef.current.focus();
    }
  }, [isEditing]);

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUpdatedAddress(event.target.value);

  const saveAddress = () => {
    const trimmedAddress = updatedAddress.trim();
    if (trimmedAddress !== "" && trimmedAddress !== userDetails?.address) {
      dispatch(updateAddress(trimmedAddress));
    }
    setIsEditing(false);
  };

  const openModal = (selectedOrderid: string) => {
    setSelectedOrderId(selectedOrderid);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrderId("");
  };

  const goToOrderDetails = (orderId: string) => {
    openModal(orderId);
    //navigate(`/myorder/${orderId}`);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    // Cleanup to ensure the style is reverted on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (!isEditing) {
      setUpdatedAddress(userDetails?.address || "");
    }
  }, [userDetails?.address, isEditing]);

  useEffect(() => {
    if (isWriteSuccess) {
      dispatch(fetchProducts());
    }
  }, [dispatch, isWriteSuccess]);

  // Render loader when logging in or no user data
  if (isLogging || !userDetails) {
    return <Loader message="Feching profile..." />;
  }

  return (
    <Fragment>
      <ProfileContainer>
        <Section>
          <SectionTitle>Profile</SectionTitle>
          <ProfileHeader>
            <ProfilePicture>
              {userDetails?.name?.charAt(0).toUpperCase() || "?"}
            </ProfilePicture>
            <UserDetails>
              <UserDetail>
                <NameIcon />
                <strong>Name:</strong> {userDetails.name}
              </UserDetail>
              <UserDetail>
                <EmailIcon />
                <strong>Email:</strong> {userDetails.email}
              </UserDetail>
              <UserDetail>
                <GpsIcon />
                <strong>Address:</strong>
              </UserDetail>
              <UserDetail>
                {isEditing ? (
                  <AddressInput
                    ref={addressInputRef}
                    type="text"
                    value={updatedAddress}
                    onChange={handleAddressChange}
                  />
                ) : (
                  <span>{userDetails.address || "No address available"}</span>
                )}
              </UserDetail>
              <ButtonContainer>
                <EditButton onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? "Cancel" : "Update Address"}
                </EditButton>
                {isEditing && (
                  <SaveButton onClick={saveAddress}>Save</SaveButton>
                )}
              </ButtonContainer>
            </UserDetails>
          </ProfileHeader>
        </Section>

        <Section>
          <SectionTitle>Order History</SectionTitle>
          {myOrders.length > 0 ? (
            <OrdersList>
              {myOrders
                .slice()
                .reverse()
                .map((order, index) => {
                  const formattedDate = new Date(
                    order.orderedDate
                  ).toLocaleDateString("en-IN");
                  const totalAmount = order.orderItems
                    .reduce(
                      (total, item) =>
                        total +
                        item.item.discountedprice * item.userSelectedQuantity,
                      0
                    )
                    .toFixed(2);

                  return (
                    <MyItem key={index}>
                      <MyItemContent
                        onClick={() => goToOrderDetails(order.orderId)}
                      >
                        <MyItemRow>
                          <MyItemTitle>
                            <strong>Order ID:</strong>
                            <span>{order.orderId}</span>
                          </MyItemTitle>
                          <MyItemTitle>
                            <strong>Date:</strong>
                            <span>{formattedDate}</span>
                          </MyItemTitle>
                        </MyItemRow>
                        <MyItemRow>
                          <div>
                            <strong>Items:</strong>
                            <OrderItemsList>
                              {order.orderItems?.map((item, idx) => (
                                <OrderItem key={idx}>
                                  <p>{item.item.prdname}</p>
                                </OrderItem>
                              ))}
                            </OrderItemsList>
                          </div>
                        </MyItemRow>
                        <OrderCartTotal>
                          <TotalAmount>
                            <strong>Total:</strong>
                            <Ruppeeicon />
                            <p>{totalAmount}</p>
                          </TotalAmount>
                          <ViewDetails
                            onClick={() => goToOrderDetails(order.orderId)}
                          >
                            View more...
                          </ViewDetails>
                        </OrderCartTotal>
                      </MyItemContent>
                    </MyItem>
                  );
                })}
            </OrdersList>
          ) : (
            <NoOrders>
              <p>No orders on your bucket</p>
              <ShowNowButton onClick={() => navigate("/products")}>
                Shop Now
              </ShowNowButton>
            </NoOrders>
          )}
        </Section>
      </ProfileContainer>
      {isModalOpen && (
        <ProductsPopModal closeModal={closeModal}>
          <MyOrders selectedOrderId={selectedOrderid} closeModal={closeModal} />
        </ProductsPopModal>
      )}
    </Fragment>
  );
};

export default Profile;
