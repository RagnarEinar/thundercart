import React from "react";
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
  ProductCategory,
  PriceDetails,
  OriginalPrice,
  DiscountedPrice,
  Quantity,
  ProductRating,
  ProductReviews,
  ReviewList,
  Wrapper,
  DetailsButtonContainer,
  AddToCart,
  Back,
} from "./styled.components";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../../data/store";
import { useSelector } from "react-redux";
import cart2 from "../../../assets/cart2.png";

export interface ProductDetailsProps {
  product: ProductDetailsState;
}

const ProductDetails: React.FC = () => {
  const { allProducts } = useSelector<RootState, ProductsState>(
    (s) => s.products
  );
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = allProducts.find((p) => p.prduniqueid === id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const {
    prdname,
    prddesc,
    prdsummary,
    prdimg,
    orgprice,
    discountedprice,
    category,
    quantity,
    rating,
    reviews,
  } = product;

  const addToCart = (item: ProductDetailsState) => {
    console.log("Added cart item", item);
  };

  return (
    <Wrapper>
      <ImageContainer>
        <ProductImage src={cart2} alt={prdname} />
      </ImageContainer>
      <DetailsContainer>
        <ProductName>{prdname}</ProductName>
        <ProductSummary>{prdsummary}</ProductSummary>
        <ProductDescription>{prddesc}</ProductDescription>
        <ProductCategory>Category: {category}</ProductCategory>
        <PriceDetails>
          <OriginalPrice>₹{orgprice}</OriginalPrice>
          <DiscountedPrice>₹{discountedprice}</DiscountedPrice>
        </PriceDetails>
        <Quantity>Available Quantity: {quantity}</Quantity>
        <ProductRating>
          <strong>Rating:</strong>
          {Array.isArray(rating) && rating.length > 0
            ? (rating.reduce((a, b) => a + b) / rating.length).toFixed(1)
            : "No Ratings yet"}
        </ProductRating>
        <ProductReviews>
          <strong>Reviews:</strong>
          <ReviewList>
            {Array.isArray(reviews) &&
              reviews.length > 0 ?
              reviews.map((review, index) => <li key={index}>{review}</li>):"No Reviews yet"}
          </ReviewList>
        </ProductReviews>
        <DetailsButtonContainer>
          <Back onClick={() => navigate(-1)}>Back</Back>
          <AddToCart
            disabled={false}
            onClick={() => {
              addToCart(product);
            }}
          >
            Add To Cart
          </AddToCart>
        </DetailsButtonContainer>
      </DetailsContainer>
    </Wrapper>
  );
};

export default ProductDetails;
