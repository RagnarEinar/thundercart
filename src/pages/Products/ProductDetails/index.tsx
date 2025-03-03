import React, { useEffect, useState } from "react";
import {
  ProductDetailsState,
  ProductsState,
} from "../../../data/slices/products";
import {
  ImageContainer,
  ProductImage,
  DetailsContainer,
  ProductName,
  ProductSummary,
  ProductDescription,
  PriceDetails,
  OriginalPrice,
  DiscountedPrice,
  ProductRating,
  ProductReviews,
  ReviewList,
  Wrapper,
  DetailsButtonContainer,
  AddToCart,
  Back,
  SpecialPrice,
  RatingHeading,
  AddToCartWrapper,
  Tooltip,
  NoRating,
} from "./styled.components";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../../data/store";
import { useDispatch, useSelector } from "react-redux";
import cart2 from "../../../assets/cart2.png";
import {
  addItemToCart,
  CartsandOrdersState,
  fetchCartsandOrders,
  resetCartErrorState,
} from "../../../data/slices/cartsandOrders";
import { LoginState } from "../../../data/slices/login";
import Rating from "../../../components/Rating";
import ErrorModal from "../../../components/ErrorModel";
import { getDiscountPercent } from "../CataLogItem/utils";
import { DiscountedPercent } from "../CataLogItem/styled.components";

export interface ProductDetailsProps {
  productId?: string;
  isOpenedInModal?: boolean;
  onBack?: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productId,
  isOpenedInModal,
  onBack,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [errorHeader, seterrorHeader] = useState("");
  const [errorBody, seterrorBody] = useState("");
  const dispatch = useDispatch();
  const { userDetails } = useSelector<RootState, LoginState>((s) => s.login);

  const { allProducts } = useSelector<RootState, ProductsState>(
    (s) => s.products
  );

  const { cartItems, error, isLoading } = useSelector<
    RootState,
    CartsandOrdersState
  >((s) => s.cartandOrders);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = allProducts.find((p) => p.prduniqueid === productId || id);

  const handleClose = () => {
    dispatch(resetCartErrorState());
    setShowModal(false);
    navigate("/products");
  };

  const addToCart = (item: ProductDetailsState) => {
    console.log("Added cart item", item);
    if (!cartItems.some((cart) => cart.item.prduniqueid === item.prduniqueid)) {
      dispatch(addItemToCart({ item, userSelectedQuantity: 1 }));
    } else {
      navigate("/cart");
    }
  };

  useEffect(() => {
    dispatch(resetCartErrorState());
  }, [dispatch]);

  useEffect(() => {
    if (cartItems.length <= 0) {
      dispatch(fetchCartsandOrders());
    }
  }, [cartItems.length, dispatch]);

  useEffect(() => {
    if (error && error !== "User not authenticated") {
      seterrorHeader("Failed to Update Cart");
      seterrorBody("Please try again later...");
      setShowModal(true);
    }
  }, [error]);

  if (!product) {
    return (
      <ErrorModal
        header={"Product detail not available"}
        body={"Please try again later..."}
        onClose={handleClose}
      />
    );
  }

  const {
    prdname,
    prddesc,
    prdsummary,
    orgprice,
    discountedprice,
    rating,
    reviews,
    prdimg,
  } = product;

  return (
    <Wrapper $isPage={!!id}>
      <ImageContainer>
        <ProductImage src={cart2} alt={"Image not available"} />
        {/* <ProductImage src={prdimg} alt={"Image not available"} /> */}
        {/* //TODO */}
      </ImageContainer>
      <DetailsContainer>
        <ProductName>{prdname}</ProductName>
        <ProductDescription>{prddesc}</ProductDescription>
        <ProductSummary>{prdsummary}</ProductSummary>

        <PriceDetails>
          <SpecialPrice>Special Price : </SpecialPrice>
          <DiscountedPrice>₹{discountedprice}</DiscountedPrice>
          <OriginalPrice>{orgprice}</OriginalPrice>
          <DiscountedPercent>
            {getDiscountPercent(orgprice, discountedprice)}% off
          </DiscountedPercent>
        </PriceDetails>
        <ProductRating>
          <RatingHeading>Rating :</RatingHeading>
          {rating.length > 0 ? (
            <Rating
              displayMode="detailed"
              rating={
                rating.reduce((acc, rating) => acc + rating, 0) / rating.length
              }
              ratingCount={rating.length}
            />
          ) : (
            <NoRating>No Rating yet</NoRating>
          )}
        </ProductRating>
        <ProductReviews>
          <RatingHeading>Reviews :</RatingHeading>
          <ReviewList>
            {Array.isArray(reviews) && reviews.length > 0 ? (
              reviews
                .slice(0, 5)
                .map((review, index) => <li key={index}>{review}</li>)
            ) : (
              <NoRating>No Reviews yet</NoRating>
            )}
          </ReviewList>
        </ProductReviews>
        <DetailsButtonContainer>
          {/* <Back onClick={onBack}>
            <FaArrowLeft /> Back
          </Back> */}
          <AddToCartWrapper>
            <AddToCart
              disabled={!userDetails || isLoading}
              onClick={() => addToCart(product)}
            >
              {cartItems.some((cart) => cart.item.prduniqueid === productId)
                ? "Go to Cart"
                : "Add to Cart"}
            </AddToCart>
            {!userDetails && (
              <Tooltip>Please log in to enable the cart</Tooltip>
            )}
          </AddToCartWrapper>
        </DetailsButtonContainer>
      </DetailsContainer>
      {showModal && (
        <ErrorModal
          header={errorHeader}
          body={errorBody}
          onClose={handleClose}
        />
      )}
    </Wrapper>
  );
};

export default ProductDetails;
