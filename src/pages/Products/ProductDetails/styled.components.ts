import styled from "styled-components";
import { Button } from "../../Login/styled.components";

export const Wrapper = styled.div<{ $isPage?: boolean }>`
  display: flex;
  margin: 0 auto;
  gap: 1.2rem;
  border-radius: 15px;
  overflow-y: auto;
  padding: ${({ $isPage }) => ($isPage ? "20px" : "0")};

  @media (max-width: 786px) {
    flex-direction: column;
    gap: 0.6rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 2;
  min-height: 100%;
`;

export const ProductImage = styled.img`
  border-radius: 15px;
  max-width: 100%;
  height: 400px;
  align-self: center;
  border: 0.5px solid lightgrey;
  @media (max-width: 786px) {
    max-width: 90%;
    max-height: 350px;
  }
  @media (max-width: 480px) {
    max-width: 100%;
    max-height: 200px;
  }
`;

export const DetailsContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.3rem 1.2rem;
  @media (max-width: 786px) {
    padding: 0px;
  }
`;

export const ProductName = styled.h1`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.color};
  @media (max-width: 786px) {
    font-size: 1.3rem;
  }
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.cartItemDescColor};
`;

export const ProductSummary = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.cartItemDescColor};
  font-style: italic;
`;

export const ProductCategory = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.cartItemDescColor};
  font-weight: 500;
`;

export const PriceDetails = styled.div`
  display: flex;
  margin: 15px 0px;
`;

export const SpecialPrice = styled.span`
  font-size: 0.8rem;
  color: rgba(238, 16, 30, 0.92);
  font-weight: 600;
`;
export const OriginalPrice = styled.span`
  font-size: 0.6rem;
  margin-left: 0.3rem;
  text-decoration: line-through;
  color: ${({ theme }) => theme.cartItemOrgPrice};
  align-self: self-end;
`;

export const DiscountedPrice = styled.span`
  font-size: 0.8rem;
  margin-left: 1rem;
  font-weight: bold;
  color: rgba(12, 117, 0, 0.98);
`;

export const Quantity = styled.p`
  font-size: 1rem;

  color: ${({ theme }) => theme.cartItemNameColor};
`;

export const ProductRating = styled.div`
  display: flex;
  gap: 1rem;
  > p {
    align-self: center;
  }
`;

export const NoRating = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.cartItemDescColor};
`;

export const RatingHeading = styled.h2`
  font-weight: 500;
  font-size: 0.8rem;
`;

export const ProductReviews = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    background: ${({ theme }) => theme.cartListBackground};
    padding: 0.3rem 1rem;
    border-radius: 8px;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.cartItemDescColor};
  }
`;

export const DetailsButtonContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  width: 100%;
  padding: 0.6rem 1.9rem;
  @media (max-width: 786px) {
    gap: 0.6rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const Back = styled(Button)`
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.cartBackBtnColor};
  width: 35%;
  border: 0.5px solid ${({ theme }) => theme.color};
  svg {
    font-size: 0.7rem;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const AddToCart = styled(Button)`
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  width: 100%;
  background: rgba(31, 242, 27, 0.97);
  color: black;
  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;

export const AddToCartWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 65%;
  margin: auto;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Tooltip = styled.div`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  position: absolute;
  z-index: 1;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 0.8rem;

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
