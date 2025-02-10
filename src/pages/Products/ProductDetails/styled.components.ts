import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  gap: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px ${({ theme }) => theme.lightBoxShadow};
  background-color: ${({ theme }) => theme.background};

  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 500px;
  border-radius: 15px;
  object-fit: contain;
`;

export const DetailsContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 5px 20px;
  @media (max-width: 450px) {
    padding: 0px;
  }
`;

export const ProductName = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.cartItemDescColor};
`;

export const ProductSummary = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.cartItemDescColor};
  font-style: italic;
`;

export const ProductCategory = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.cartItemDescColor};
  font-weight: 500;
`;

export const PriceDetails = styled.div`
  display: flex;
  gap: 12px;
  margin: 15px 0px;
`;

export const SpecialPrice = styled.span`
  font-size: 22px;
  color: rgba(238, 16, 30, 0.92);
  font-weight: 600;
`;
export const OriginalPrice = styled.span`
  font-size: 20px;
  text-decoration: line-through;
  color: ${({ theme }) => theme.cartItemOrgPrice};
  align-self: self-end;
`;

export const DiscountedPrice = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.cartItemDiscountPercent};
`;

export const Quantity = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.cartItemNameColor};
`;

export const ProductRating = styled.div`
  display: flex;
  gap: 16px;
  > p {
    align-self: center;
  }
`;

export const NoRating = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.cartItemDescColor};
  align-self: center;
`;

export const RatingHeading = styled.p`
  color: ${({ theme }) => theme.cartItemNameColor};
  font-weight: bold;
  font-size: 18px;
`;

export const ProductReviews = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 16px;
`;

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    background: ${({ theme }) => theme.cartListBackground};
    padding: 5px 15px;
    border-radius: 8px;
    margin-bottom: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.cartItemDescColor};
    font-style: italic;
  }
`;

export const DetailsButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Back = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  width: 30%;
  border-radius: 10px;
  border: 1px solid #ddd;
  background-color: transparent;
  color: ${({ theme }) => theme.cartBackBtnColor};
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 16px ${({ theme }) => theme.mediumBoxShadow};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 500px) {
    width: 40%;
  }
`;

export const AddToCartWrapper = styled.div`
  position: relative;
  width: 30%;
  display: inline-block;

  @media (max-width: 500px) {
    width: 40%;
  }
`;

export const AddToCart = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  width: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.cartAddToCartBtnBackground};
  color: ${({ theme }) => theme.cartBtnTextColor};
  font-weight: bold;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 16px ${({ theme }) => theme.mediumBoxShadow};
  transition: transform 0.2s;

  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Tooltip = styled.div`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 5px 10px;
  border-radius: 5px;
  position: absolute;
  z-index: 1;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 16px;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

export const AddToCartWrapperHoverable = styled(AddToCartWrapper)`
  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;
