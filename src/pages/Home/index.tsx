import React from "react";
import {
  HomeContainer,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  CategoriesSection,
  CategoryCard,
  CategoryImage,
  CategoryName,
  FeaturedSection,
  FeaturedTitle,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
  BannerSection,
  BannerText,
  BannerButton,
} from "./styled.components";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../data/store";
import { LoginState } from "../../data/slices/login";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  const { userDetails } = useSelector<RootState, LoginState>(
    (state) => state.login
  );
  const navigate = useNavigate();

  const shopNow = () => {
    if (userDetails?.role === "admin") {
      navigate("/admin/products");
    } else {
      navigate("/products");
    }
  };
  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroTitle>Welcome to ShopEase</HeroTitle>
        <HeroSubtitle>Your one-stop shop for all things amazing!</HeroSubtitle>
        <HeroButton onClick={shopNow}>Shop Now</HeroButton>
      </HeroSection>

      {/* Categories Section */}
      <CategoriesSection>
        <CategoryCard>
          <CategoryImage
            src="https://via.placeholder.com/150"
            alt="Men's Fashion"
          />
          <CategoryName>Men's Fashion</CategoryName>
        </CategoryCard>
        <CategoryCard>
          <CategoryImage
            src="https://via.placeholder.com/150"
            alt="Women's Fashion"
          />
          <CategoryName>Women's Fashion</CategoryName>
        </CategoryCard>
        <CategoryCard>
          <CategoryImage
            src="https://via.placeholder.com/150"
            alt="Electronics"
          />
          <CategoryName>Electronics</CategoryName>
        </CategoryCard>
      </CategoriesSection>

      {/* Featured Products Section */}
      <FeaturedSection>
        <FeaturedTitle>Featured Products</FeaturedTitle>
        <ProductGrid>
          <ProductCard>
            <ProductImage
              src="https://via.placeholder.com/200"
              alt="Product 1"
            />
            <ProductName>Product 1</ProductName>
            <ProductPrice>$49.99</ProductPrice>
          </ProductCard>
          <ProductCard>
            <ProductImage
              src="https://via.placeholder.com/200"
              alt="Product 2"
            />
            <ProductName>Product 2</ProductName>
            <ProductPrice>$79.99</ProductPrice>
          </ProductCard>
          <ProductCard>
            <ProductImage
              src="https://via.placeholder.com/200"
              alt="Product 3"
            />
            <ProductName>Product 3</ProductName>
            <ProductPrice>$59.99</ProductPrice>
          </ProductCard>
        </ProductGrid>
      </FeaturedSection>

      {/* Banner Section */}
      <BannerSection>
        <BannerText>Discover our exclusive deals!</BannerText>
        <BannerButton>Explore Now</BannerButton>
      </BannerSection>

      <Footer />
    </HomeContainer>
  );
};

export default Home;
