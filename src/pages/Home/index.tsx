import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaStar, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleUp = keyframes`
  from { transform: scale(0.9); }
  to { transform: scale(1); }
`;

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Hero = styled.section`
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  color: white;
  border-radius: 12px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Button = styled.button`
  background: white;
  color: #ff4b2b;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 20px;

  &:hover {
    background: #eee;
    transform: scale(1.05);
  }
`;

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin: 30px 0;
  text-align: center;
  animation: ${fadeIn} 1.2s ease-in-out;
`;

const CategoryCard = styled.div`
  background: #f4f4f4;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  animation: ${scaleUp} 0.8s ease-in-out;

  &:hover {
    background: #ddd;
    transform: translateY(-5px);
  }
`;

const PromoSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 40px 0;
  text-align: center;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const PromoCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: 0.3s;
  animation: ${scaleUp} 1s ease-in-out;

  &:hover {
    transform: translateY(-5px) scale(1.05);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  background: #222;
  color: white;
  padding: 30px;
  text-align: center;
  margin-top: 40px;
  border-radius: 12px;
  animation: ${fadeIn} 1.8s ease-in-out;
  gap: 20px;
`;

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(
      `/products?category=${encodeURIComponent(category.toLowerCase())}`
    );
  };

  const handleRateClick = (rate: number) => {
    navigate(`/products?rating=${encodeURIComponent(rate)}`);
  };

  const handleDiscountClick = (discount: number) => {
    navigate(`/products?discount=${encodeURIComponent(discount)}`);
  };
  return (
    <Container>
      <Hero>
        <h1>Welcome to ThunderCart</h1>
        <p>Exclusive deals on the latest trends. Shop Now!</p>
        <Button>Shop Now</Button>
      </Hero>

      <Categories>
        {["Electronics", "Clothing", "Books", "Toys"].map((category) => (
          <CategoryCard
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </CategoryCard>
        ))}
      </Categories>

      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Special Deals</h2>
      <PromoSection>
        <PromoCard
          onClick={() => {
            handleRateClick(4);
          }}
        >
          <h3>Top Rated Products</h3>
          <FaStar size={24} color="#FFD700" />
          <p>Discover products rated 4+ by customers</p>
          <Button>Explore Now</Button>
        </PromoCard>
        <PromoCard
          onClick={() => {
            handleDiscountClick(30);
          }}
        >
          <h3>Massive Discounts</h3>
          <p>Save up to 30% on selected items</p>
          <Button>Shop Discounts</Button>
        </PromoCard>
      </PromoSection>

      <Footer>
        <p>ThunderCart - Your One-Stop Shopping Destination</p>
        <div>
          <FaFacebook size={20} style={{ margin: "0 10px" }} />
          <FaTwitter size={20} style={{ margin: "0 10px" }} />
          <FaInstagram size={20} style={{ margin: "0 10px" }} />
        </div>
        <p>&copy; 2025 ThunderCart. All Rights Reserved.</p>
      </Footer>
    </Container>
  );
};

export default Home;
