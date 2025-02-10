import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemFromCart,
  updateItemQuantity,
  CartsandOrdersState,
  CartItemState,
  fetchCartsandOrders,
  placeOrder,
  resetCartErrorState,
} from "../../data/slices/cartsandOrders";
import { RootState } from "../../data/store";
import Loader from "../../components/Loader";
import cart2 from "../../assets/cart2.png";
import { getDiscountPercent } from "../Products/CataLogItem/utils";
import {
  DiscountedPercent,
  DiscountedPrice,
  OrgPrice,
  Ruppeeicon,
} from "../Products/CataLogItem/styled.components";
import {
  Wrapper,
  CartHeader,
  CartWrapper,
  CartContainer,
  CartItemsList,
  CartItemWrapper,
  ItemImage,
  ItemQuantity,
  Quantity,
  QuantityButtonWrapper,
  QuantityButton,
  RemoveButton,
  OrderDetailsWrapper,
  OrderDetails,
  SummaryItem,
  CheckoutButton,
  ItemContent,
  ItemName,
  PriceContainer,
  CenterWrapper,
} from "./styled.components";
import { useNavigate } from "react-router";
import ErrorModal from "../../components/ErrorModel";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../../components/PaymentForm";
import { loadStripe } from "@stripe/stripe-js";

const Cart: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [errorHeader, setErrorHeader] = useState("");
  const [errorBody, setErrorBody] = useState("");
  const [errorPrimaryText, setErrorPrimaryText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, isLoading, error, isOrderPlaced } = useSelector<
    RootState,
    CartsandOrdersState
  >((s) => s.cartandOders);

  const stripePromise = loadStripe("YOUR_STRIPE_PUBLISHABLE_KEY");

  const handleRemoveItem = (productId: string) => {
    dispatch(deleteItemFromCart(productId));
  };
  // const handleUpdateQuantity = (productId: string, quantityChange: number) => {
  //   dispatch(updateItemQuantity({ productId, quantity: quantityChange }));
  // };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    // Update the local cart state without calling DB
    // setLocalCartItems((prevItems) =>
    //   prevItems?.map((item) => {
    //     if (item.item.prduniqueid === productId) {
    //       const newQuantity = item.userSelectedQuantity + quantityChange;
    //       if (newQuantity > 0 && newQuantity <= 5) {
    //         return { ...item, userSelectedQuantity: newQuantity };
    //       }
    //     }
    //     return item;
    //   })
    // );
    dispatch(
      updateItemQuantity({
        productId,
        quantity,
      })
    );
  };

  const handleCheckout = () => {
    // cartItems?.forEach((item) => {
    //   dispatch(
    //     updateItemQuantity({
    //       productId: item.item.prduniqueid as string,
    //       quantity: item.userSelectedQuantity,
    //     })
    //   );
    // });
    dispatch(placeOrder());
  };

  const goToProductDetails = (prduniqueid: string) => {
    navigate(`/products/productDetails/${prduniqueid}`);
  };

  const handleClose = () => {
    dispatch(resetCartErrorState());
    setShowModal(false);
  };

  const goToMyOrders = () => {
    setShowModal(false);
    navigate("/profile");
  };

  //Memoized calculations for totalAmount, totalItems, and totalSaved
  const { totalAmount, totalItems, totalSaved } = useMemo(() => {
    let totalAmount = 0;
    let totalItems = 0;
    let totalSaved = 0;

    cartItems?.forEach(({ item, userSelectedQuantity }: CartItemState) => {
      const discountedTotal = item.discountedprice * userSelectedQuantity;
      const originalTotal = item.orgprice * userSelectedQuantity;
      totalAmount += discountedTotal;
      totalItems += userSelectedQuantity;
      totalSaved += originalTotal - discountedTotal;
    });

    return { totalAmount, totalItems, totalSaved };
  }, [cartItems]); // Ensuring re-calculation when cartItems change

  useEffect(() => {
    if (isOrderPlaced) {
      setErrorHeader("Your order placed");
      setErrorBody(
        "We have received your order, please track status in myorders..."
      );
      setErrorPrimaryText("Check Order Status");
      setShowModal(true);
    } else if (error === "Order failed") {
      setErrorHeader("Order failed to place");
      setErrorBody("Something went wrong, please try later...");
      setShowModal(true);
    }
  }, [error, isOrderPlaced]);

  // Trigger the update when the component unmounts
  // useEffect(() => {
  //   return () => {
  //     if (localCartItems.length > 0) {
  //       localCartItems?.forEach((item) => {
  //         dispatch(
  //           updateItemQuantity({
  //             productId: item.item.prduniqueid as string,
  //             quantity: item.userSelectedQuantity,
  //           })
  //         );
  //       });
  //     }
  //   };
  // }, [localCartItems, dispatch]);

  useEffect(() => {
    dispatch(fetchCartsandOrders());
  }, [dispatch]);

  if (isLoading && cartItems.length < 0) return <Loader />;

  return (
    <Fragment>
      {cartItems.length > 0 ? (
        <Wrapper>
          <CartWrapper>
            <CartHeader>
              Your Bucket List Awaits - Grab Them Before They're Gone!
            </CartHeader>
            <CartContainer>
              <CartItemsList>
                {cartItems?.map((item: CartItemState) => (
                  <CartItemWrapper key={item.item.prduniqueid}>
                    <ItemContent
                      onClick={() => {
                        goToProductDetails(item.item.prduniqueid as string);
                      }}
                    >
                      <ItemImage src={cart2} alt={item.item.prdname} />
                      <ItemName>{item.item.prdname}</ItemName>
                    </ItemContent>

                    <ItemContent>
                      <ItemQuantity>
                        <QuantityButtonWrapper>
                          <QuantityButton
                            onClick={() => {
                              item.item.prduniqueid &&
                                handleUpdateQuantity(item.item.prduniqueid, -1);
                            }}
                            disabled={
                              item.userSelectedQuantity <= 1 || isLoading
                            }
                          >
                            -
                          </QuantityButton>
                          <Quantity>{item.userSelectedQuantity}</Quantity>
                          <QuantityButton
                            onClick={() => {
                              item.item.prduniqueid &&
                                handleUpdateQuantity(item.item.prduniqueid, 1);
                            }}
                            disabled={
                              item.userSelectedQuantity >= 5 || isLoading
                            }
                          >
                            +
                          </QuantityButton>
                        </QuantityButtonWrapper>
                      </ItemQuantity>
                      <RemoveButton
                        onClick={() => handleRemoveItem(item.item.prduniqueid!)}
                        disabled={isLoading}
                      >
                        Remove
                      </RemoveButton>
                    </ItemContent>
                    <ItemContent>
                      <Quantity>Price</Quantity>
                      <PriceContainer>
                        <DiscountedPrice>
                          <Ruppeeicon />
                          {item.item.discountedprice *
                            item.userSelectedQuantity}
                        </DiscountedPrice>
                        <OrgPrice>
                          {item.item.orgprice * item.userSelectedQuantity}
                        </OrgPrice>
                      </PriceContainer>

                      <DiscountedPercent>
                        {getDiscountPercent(
                          item.item.orgprice,
                          item.item.discountedprice
                        )}
                        % off
                      </DiscountedPercent>
                    </ItemContent>
                  </CartItemWrapper>
                ))}
              </CartItemsList>
              <OrderDetailsWrapper>
                <OrderDetails>
                  <h3>Order Summary</h3>
                  <SummaryItem>
                    <span>Total Items :</span>
                    <span>{totalItems}</span>
                  </SummaryItem>
                  <SummaryItem>
                    <span>Subtotal :</span>
                    <span>
                      <Ruppeeicon />
                      {totalAmount.toFixed(2)}
                    </span>
                  </SummaryItem>
                  <SummaryItem>
                    <span>Shipping :</span>
                    <p>Free</p>
                  </SummaryItem>
                  <SummaryItem>
                    <span>Total :</span>
                    <span>
                      <Ruppeeicon />
                      {totalAmount.toFixed(2)}
                    </span>
                  </SummaryItem>
                  <SummaryItem>
                    <span>You Saved :</span>
                    <p>
                      <Ruppeeicon />
                      {totalSaved.toFixed(2)}
                    </p>
                  </SummaryItem>
                  <CheckoutButton onClick={handleCheckout}>
                    PLACE ORDER
                  </CheckoutButton>
                </OrderDetails>
              </OrderDetailsWrapper>
            </CartContainer>
          </CartWrapper>
        </Wrapper>
      ) : (
        <CenterWrapper>
          <CartHeader>Your cart is empty!</CartHeader>
          <CheckoutButton onClick={() => navigate("/products")}>
            Shop Now
          </CheckoutButton>
        </CenterWrapper>
      )}
      {showModal && (
        <ErrorModal
          header={errorHeader}
          body={errorBody}
          primaryBtnText={errorPrimaryText}
          primaryBtnAction={goToMyOrders}
          onClose={handleClose}
        />
      )}
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </Fragment>
  );
};

export default Cart;
