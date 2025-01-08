import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 10px;
  object-fit: contain;
`;

export const DetailsContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ProductName = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const ProductSummary = styled.p`
  font-size: 18px;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
`;

export const ProductCategory = styled.p`
  font-size: 16px;
  font-style: italic;
  color: #777;
`;

export const PriceDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const OriginalPrice = styled.span`
  font-size: 18px;
  text-decoration: line-through;
  color: gray;
`;

export const DiscountedPrice = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: red;
`;

export const Quantity = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductRating = styled.p`
  font-size: 16px;
`;

export const ProductReviews = styled.div`
  font-size: 16px;
`;

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;

  li {
    background: #eee;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 5px;
  }
`;

export const DetailsButtonContainer = styled.div`
  padding: 10px;
  display: flex;
  gap: 20px;
`;

export const Back = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  font-style: italic;
  width: 50%;
  border-radius: 10px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const AddToCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  font-weight: bold;
  background-color: rgba(56, 227, 9, 1);
  border: none;
  color: rgb(248, 6, 6);
  &:hover {
    cursor: pointer;
  }
`;
