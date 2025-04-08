import React from "react";
import { Ruppeeicon } from "../../Products/CataLogItem/styled.components";
import { useSelector } from "react-redux";
import { RootState } from "../../../data/store";
import { styled } from "styled-components";
import cart3 from "../../../assets/cart3.png";
import OrdersFeedBack from "../../../components/OrdersFeedBack";
import { useNavigate } from "react-router";

export const OrderContainer = styled.div``;

export const OrderHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const OrderHeader = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  span {
    color: ${({ theme }) => theme.cartItemDescColor};
    font-size: 1.1rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
    span {
      font-size: 0.8rem;
    }
  }
`;

export const OrderInfo = styled.h3`
  font-size: 1rem;
  margin: 0.3rem 0;
  span {
    color: ${({ theme }) => theme.cartItemDescColor};
    margin-left: 0.3rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const OrderItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-y: auto;
  max-height: 60vh;
  padding: 0.6rem 0.3rem;
  border-radius: 8px;
  gap: 1rem;
`;

export const OrderItem = styled.div`
  padding: 0.6rem;
  background: ${({ theme }) => theme.cardBackground};
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 2px 8px ${({ theme }) => theme.heavyBoxShadow};
  width: 80%;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ItemDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  order: 1;
  @media (max-width: 480px) {
    order: 2;
  }
`;

export const ItemImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  order: 2;
  @media (max-width: 480px) {
    order: 1;
  }
`;

export const ItemTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  padding: 0.3rem 0rem 0rem 0.3rem;
`;

export const ItemSubTitle = styled.div`
  display: flex;
  font-size: 0.9rem;
  padding: 0rem 0rem 0rem 0.3rem;
  align-items: baseline;
  margin: 0;
  p {
    margin-right: 0.6rem;
  }
  svg {
    color: rgb(239, 18, 25);
    display: flex;
  }

  span {
    color: rgb(239, 18, 18);
  }
`;

export const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PrdImage = styled.img`
  width: 120px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  border: 0.5px solid lightgrey;
  cursor: pointer;
`;

export const ActionItemRow = styled.div`
  font-size: 0.8rem;
  display: flex;
  gap: 1.9rem;
  div {
    display: flex;
    gap: 0.6rem;
    button {
      padding: 0.2rem 0.5rem;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.6rem;
  }
`;

export const OrderTotal = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #f0f0f0;
  padding-top: 0.6rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
  }
`;

export const TotalAmount = styled.div`
  color: ${({ theme }) => theme.cartBackBackground};
  strong {
    color: ${({ theme }) => theme.color};
    margin-right: 0.6rem;
  }
`;

export const SavedAmount = styled.div`
  display: flex;
  color: rgba(240, 13, 17, 0.9);
  justify-content: center;
  span {
    margin: 0 0.3rem;
  }
`;

export const FeedbackButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-self: flex-end;
`;

export interface MyOrdersProps {
  selectedOrderId: string;
  closeModal: () => void;
}

const MyOrders: React.FC<MyOrdersProps> = ({ selectedOrderId, closeModal }) => {
  const navigate = useNavigate();
  // const { myOrders } = useSelector<RootState, CartsandOrdersState>(
  //   (state) => state.cartandOrders
  // );
  // const order = myOrders.find((order) => order.orderId === selectedOrderId);
  const order = useSelector((state: RootState) =>
    state.cartandOrders.myOrders.find((o) => o.orderId === selectedOrderId)
  );

  if (!order) {
    return <OrderContainer>Order not found</OrderContainer>;
  }

  return (
    <OrderContainer>
      <OrderHeaderContainer>
        <OrderHeader>
          Order ID: <span>{order.orderId}</span>
        </OrderHeader>
        <OrderInfo>
          Date :<span>{new Date(order.orderedDate).toLocaleDateString()}</span>
        </OrderInfo>
      </OrderHeaderContainer>

      <OrderItemsContainer>
        {order.orderItems.map((item, idx) => {
          return (
            <OrderItem key={idx}>
              <ItemDetailsWrapper>
                <ItemDetails>
                  <ItemTitle>{item.item.prdname}</ItemTitle>
                  <ItemSubTitle>
                    <p>Price : </p>
                    <Ruppeeicon />
                    <span>{item.item.discountedprice}</span>
                  </ItemSubTitle>
                  <ItemSubTitle>
                    <p>Quantity : </p>
                    {item.userSelectedQuantity}
                  </ItemSubTitle>
                </ItemDetails>
                <ItemImgWrapper>
                  <PrdImage
                    src={cart3 || item.item.prdimg}
                    onClick={() => {
                      navigate(
                        `/products/productDetails/${item.item.prduniqueid}`
                      );
                    }}
                  />
                </ItemImgWrapper>
              </ItemDetailsWrapper>
              <OrdersFeedBack
                rating={item.rating || null}
                review={item.review || ""}
                orderId={order.orderId}
                prduniqueid={item.item.prduniqueid as string}
              />
            </OrderItem>
          );
        })}
      </OrderItemsContainer>
      <OrderTotal>
        <TotalAmount>
          <strong>Total Amount:</strong>
          <Ruppeeicon />
          {order.orderItems
            .reduce(
              (total, item) =>
                total + item.item.discountedprice * item.userSelectedQuantity,
              0
            )
            .toFixed(2)}
        </TotalAmount>
        <SavedAmount>
          Saved
          <span>
            <Ruppeeicon />
            {order.orderItems
              .reduce(
                (total, item) =>
                  total +
                  (item.item.orgprice - item.item.discountedprice) *
                    item.userSelectedQuantity,
                0
              )
              .toFixed(2)}
          </span>
          on this order
        </SavedAmount>
      </OrderTotal>
    </OrderContainer>
  );
};

export default MyOrders;
