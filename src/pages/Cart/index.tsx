import React, { Fragment, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemFromCart,
  updateItemQuantity,
  CartsandOrdersState,
  CartItemState,
  fetchCartsandOrders,
} from "../../data/slices/cartsandOrders";
import { RootState } from "../../data/store";
import Loader from "../../components/Loader";
import cart2 from "../../assets/cart2.png";
import { getDiscountPercent } from "../Products/CataLogItem/utils";
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
  ButtonContainer,
  ShowNowButton,
  DetailsWrapper,
  QuantityWrapper,
  DiscountedPrice,
  OrgPrice,
  DiscountedPercent,
  CartRuppeeicon,
} from "./styled.components";
import { useNavigate } from "react-router";
import { Tooltip } from "../Products/ProductDetails/styled.components";
import { Ruppeeicon } from "../Products/CataLogItem/styled.components";
import { toast } from "react-toastify";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, isLoading, error } = useSelector<
    RootState,
    CartsandOrdersState
  >((s) => s.cartandOrders);

  const handleRemoveItem = (productId: string) => {
    dispatch(deleteItemFromCart(productId));
  };

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

  const handleCheckout = async () => {
    // cartItems?.forEach((item) => {
    //   dispatch(
    //     updateItemQuantity({
    //       productId: item.item.prduniqueid as string,
    //       quantity: item.userSelectedQuantity,
    //     })
    //   );
    // });
    //dispatch(placeOrder());
    const cartData = {
      amount: totalAmount.toFixed(0), // Replace with actual cart total
      currency: "INR",
    };

    navigate("/payment", { state: cartData });
  };

  const goToProductDetails = (prduniqueid: string) => {
    navigate(`/products/productDetails/${prduniqueid}`);
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

  useEffect(() => {
    if (error) {
      toast.error("Cart Update error");
    }
  }, [error]);

  if (isLoading && cartItems.length < 0)
    return <Loader message="Fetching cart..." />;

  return (
    <Fragment>
      {cartItems.length > 0 ? (
        <Wrapper>
          <CartWrapper>
            <CartHeader>
              Your Bucket List Awaits -- Grab Them Before They're Gone!
            </CartHeader>
            <CartContainer>
              <CartItemsList>
                {cartItems?.map((item: CartItemState) => (
                  <CartItemWrapper key={item.item.prduniqueid}>
                    <ItemContent>
                      <ItemImage
                        src={cart2 || item.item.prdimg}
                        alt={"Image not available"}
                        onClick={() => {
                          goToProductDetails(item.item.prduniqueid as string);
                        }}
                      />

                      <DetailsWrapper>
                        <ItemName>{item.item.prdname}</ItemName>
                        <div>
                          <ItemQuantity>
                            <Quantity>Price : </Quantity>
                            <PriceContainer>
                              <DiscountedPrice>
                                <CartRuppeeicon />
                                {item.item.discountedprice *
                                  item.userSelectedQuantity}
                              </DiscountedPrice>
                              <OrgPrice>
                                {item.item.orgprice * item.userSelectedQuantity}
                              </OrgPrice>
                            </PriceContainer>
                          </ItemQuantity>
                          <ItemQuantity>
                            <Quantity>Discount :</Quantity>
                            <DiscountedPercent>
                              {getDiscountPercent(
                                item.item.orgprice,
                                item.item.discountedprice
                              )}
                              % off
                            </DiscountedPercent>
                          </ItemQuantity>
                        </div>
                      </DetailsWrapper>
                    </ItemContent>

                    <QuantityWrapper>
                      <QuantityButtonWrapper>
                        <QuantityButton
                          onClick={() => {
                            item.item.prduniqueid &&
                              handleUpdateQuantity(item.item.prduniqueid, -1);
                          }}
                          disabled={item.userSelectedQuantity <= 1 || isLoading}
                        >
                          -
                        </QuantityButton>
                        <Quantity>{item.userSelectedQuantity}</Quantity>
                        <QuantityButton
                          onClick={() => {
                            item.item.prduniqueid &&
                              handleUpdateQuantity(item.item.prduniqueid, 1);
                          }}
                          disabled={item.userSelectedQuantity >= 5 || isLoading}
                        >
                          +
                        </QuantityButton>
                        {item.userSelectedQuantity === 5 && (
                          <Tooltip>Maximum 5 quantity allowed</Tooltip>
                        )}
                      </QuantityButtonWrapper>
                      <RemoveButton
                        onClick={() => handleRemoveItem(item.item.prduniqueid!)}
                        disabled={isLoading}
                      >
                        Remove
                      </RemoveButton>
                    </QuantityWrapper>
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
                    <span>You Saved :</span>
                    <p>
                      <Ruppeeicon />
                      {totalSaved.toFixed(2)}
                    </p>
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

                  <ButtonContainer>
                    <CheckoutButton onClick={handleCheckout}>
                      Place Order
                    </CheckoutButton>
                    {/* <ShowNowButton onClick={() => navigate("/products")}>
                      Add More Items
                    </ShowNowButton> */}
                  </ButtonContainer>
                </OrderDetails>
              </OrderDetailsWrapper>
            </CartContainer>
          </CartWrapper>
        </Wrapper>
      ) : (
        <CenterWrapper>
          <CartHeader>Your cart is empty!</CartHeader>
          <ShowNowButton onClick={() => navigate("/products")}>
            Shop Now
          </ShowNowButton>
        </CenterWrapper>
      )}
    </Fragment>
  );
};

export default Cart;
