import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
import cart3 from "../../assets/cart3.png";
import { ProductDetailsState } from "../../data/slices/products";
import { RootState } from "../../data/store";
import { Ruppeeicon } from "../../pages/Products/CataLogItem/styled.components";
import { useNavigate } from "react-router-dom";

const slide = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 20px 0;
`;

const Slider = styled.div<{ itemCount: number }>`
  display: flex;
  min-width: ${({ itemCount }) => itemCount * 240}px;
  animation: ${({ itemCount }) => (itemCount > 0 ? slide : "none")} 20s linear
    infinite;
`;

const CartItem = styled.div`
  flex: 0 0 auto;
  width: 250px;
  margin: 10px;
  padding: 20px;
  border-radius: 10%;
  text-align: center;
  box-shadow: 0px 4px 10px ${({ theme }) => theme.mediumBoxShadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 15px ${({ theme }) => theme.heavyBoxShadow};
  }
`;

const CartImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ProductName = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const OriginalPrice = styled.span`
  color: rgba(238, 43, 25, 0.95);
  text-decoration: line-through;
  font-size: 12px;
  align-self: center;
`;

const DiscountedPrice = styled.span`
  color: rgba(68, 238, 25, 0.95);
  font-weight: bold;
  font-size: 16px;
`;

const CategoryTag = styled.span`
  display: inline-block;
  background: #007bff;
  color: white;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 20px;
  margin-top: 8px;
`;

const HomeCartSlider = () => {
  const { allProducts } = useSelector<
    RootState,
    { allProducts: ProductDetailsState[] }
  >((state) => state.products);
  const navigate = useNavigate();
  const [randomProducts, setRandomProducts] = useState<ProductDetailsState[]>(
    []
  );

  useEffect(() => {
    if (allProducts.length > 0) {
      const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
      setRandomProducts(shuffled.slice(0, Math.floor(Math.random() * 6) + 5));
    }
  }, [allProducts]);

  const goToProductDetails = (prduniqueid?: string) => {
    navigate(`/products/productDetails/${prduniqueid}`);
  };

  return (
    <SliderContainer>
      <Slider itemCount={randomProducts.length}>
        {randomProducts.map((item) => (
          <CartItem
            key={item.prduniqueid || item.prdname}
            onClick={() => goToProductDetails(item.prduniqueid)}
          >
            <CartImage src={cart3} alt={item.prdname} />
            <ProductName>{item.prdname}</ProductName>
            <PriceContainer>
              {item.orgprice && <OriginalPrice>₹{item.orgprice}</OriginalPrice>}
              <DiscountedPrice>{item.discountedprice ?? "N/A"}</DiscountedPrice>
            </PriceContainer>
            <CategoryTag>{item.category || "General"}</CategoryTag>
          </CartItem>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default HomeCartSlider;
