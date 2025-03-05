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
  padding: 8px 15px;
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
  margin: 5px 0;
  span {
    color: ${({ theme }) => theme.cartItemDescColor};
    margin-left: 5px;
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
  padding: 10px 5px;
  border-radius: 8px;
  gap: 15px;
`;

export const OrderItem = styled.div`
  padding: 10px 10px;
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
  gap: 5px;
  order: 1;
  @media (max-width: 480px) {
    order: 2;
  }
`;

export const ItemImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  order: 2;
  @media (max-width: 480px) {
    order: 1;
  }
`;

export const ItemTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  padding: 5px 0px 0px 5px;
`;

export const ItemSubTitle = styled.div`
  display: flex;
  font-size: 0.9rem;
  padding: 0px 0px 0px 5px;
  align-items: baseline;
  margin: 0;
  p {
    margin-right: 10px;
  }
  svg {
    color: rgb(44, 239, 18);
    display: flex;
  }

  span {
    color: rgb(44, 239, 18);
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
  gap: 30px;
  div {
    display: flex;
    gap: 10px;
    button {
      padding: 0.2rem 0.5rem;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const OrderTotal = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #f0f0f0;
  padding-top: 10px;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const TotalAmount = styled.div`
  color: ${({ theme }) => theme.cartBackBackground};
  strong {
    color: ${({ theme }) => theme.color};
    margin-right: 10px;
  }
`;

export const SavedAmount = styled.div`
  display: flex;
  color: rgba(40, 240, 13, 0.9);
  justify-content: center;
  span {
    margin: 0px 5px;
  }
`;

export const FeedbackButtonContainer = styled.div`
  display: flex;
  gap: 15px;
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
