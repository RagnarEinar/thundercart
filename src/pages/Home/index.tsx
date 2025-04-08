import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import {
  FaStar,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import HomeCartSlider from "../../components/HomeCartSlider";
import herobackimg from "../../assets/herobackimg.webp";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleUp = keyframes`
  from { transform: scale(0.9); }
  to { transform: scale(1); }
`;

// Styled Components
const Container = styled.div`
  font-family: "Arial", sans-serif;
  height: 100%;
  background-attachment: fixed;
  overflow-x: hidden;
  padding: 0rem 0.3rem;
  scroll-behavior: smooth; // Enables smooth scrolling
`;

const Hero = styled.section`
  position: relative;
  text-align: center;
  padding: 6.2rem 1.2rem;
  background: url(${herobackimg}) center/cover no-repeat;
  border-radius: 12px;
  animation: ${fadeIn} 1s ease-in-out;
  margin-top: 0.3rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 3px 3px 15px rgba(0, 89, 255, 0.8); /* Strong blue glow */
  color: rgb(0, 153, 255); /* Electric Blue */
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 10px rgba(191, 0, 255, 0.8); /* Neon Cyan glow */
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  color: rgb(191, 0, 255); /* Neon Cyan */
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background: rgba(99, 99, 99, 0.69);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  margin-top: 1.2rem;

  &:hover {
    background: rgba(44, 42, 42, 0.93);
    transform: scale(1.05);
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.6rem 1.2rem;
  }
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
   gap: 1.5rem;
  margin: 3.1rem 0;
  text-align: center;
  animation: ${fadeIn} 1.2s ease-in-out;
`;

// Inside CategoryCard component
const CategoryCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 1rem;
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s ease;
  animation: ${scaleUp} 0.8s ease-in-out;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  width: 250px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }

  h3 {
    font-size: 1.3rem;
    color: #ff4b2b;
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  /* New Category Title Styles */
  .category-title {
    font-size: 1.4rem;
    font-weight: bold;
    color: #ff4b2b;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: color 0.3s ease, transform 0.3s ease;
  }

  .category-title:hover {
    color: #00bfff; /* Color change on hover */
    transform: scale(1.05); /* Slight scaling effect */
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
  }
`;

const PromoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: 3.8rem 0;
  text-align: center;
  animation: ${fadeIn} 1.5s ease-in-out;
  justify-content: center; /* Centers the promo cards */
`;

const PromoCard = styled.div`
  background: linear-gradient(135deg, #ff7eb3, #ff758c);
  color: white;
  padding: 1.2rem;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 120, 150, 0.2);
  position: relative;
  overflow: hidden;
  max-width: 400px; /* Set width for promo cards */

  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 8px 25px rgba(255, 120, 150, 0.4);
  }

  h3 {
    font-size: 1.5rem
    margin-bottom: 0.7rem;
    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 1.2rem;
     @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  button {
    margin-top: 1.2rem;
    background: white;
    color: #ff4b2b;
    padding: 0.9rem 1.8rem;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: #ffdfdf;
      transform: scale(1.05);
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    top: -20px;
    right: -20px;
    transform: scale(0);
    transition: transform 0.5s ease-in-out;
  }

  &:hover::after {
    transform: scale(2.5);
    opacity: 0;
  }
   @media (max-width: 480px) {
     padding: 1.2rem;
    }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.6rem;
  margin: 1rem 0;
  a {
    svg {
      fill: white;
      width: 18px;
      height: 18px;
    }
  }
  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  background: #222;
  color: white;
  padding: 2.5rem;
  text-align: center;
  margin-top: 5rem;
  animation: ${fadeIn} 1.8s ease-in-out;
  gap: 1.2rem;
`;

const FooterGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  text-align: left;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px; /* Ensures the footer columns don't become too small */
  h4 {
    font-size: 18px;
    margin-bottom: 0.6rem;
    color: #00bfff;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
    }

    a {
      text-decoration: none;
      color: #ddd;
      transition: color 0.3s ease;

      &:hover {
        color: #00bfff;
      }
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 1.2rem;
  font-size: 14px;
  opacity: 0.7;
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
      <Hero id="hero">
        <HeroTitle>Welcome to ThunderCart</HeroTitle>
        <HeroText>Exclusive deals on the latest trends. Shop Now!</HeroText>
        <Button onClick={() => navigate("/products")}>Shop Now</Button>
      </Hero>

      <HomeCartSlider />

      <Categories>
        {["Electronics", "Clothing", "Books", "Toys"].map((category) => (
          <CategoryCard
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            <h3>{category}</h3>
          </CategoryCard>
        ))}
      </Categories>

      <h2 style={{ textAlign: "center", marginTop: "40px", color: "red" }}>
        Special Deals
      </h2>
      <PromoSection>
        <PromoCard onClick={() => handleRateClick(4)}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>Top Rated Products</h3>
            <FaStar size={24} color="#FFD700" />
          </div>
          <p>Discover products rated 4+ by customers</p>
          <Button>Explore Now</Button>
        </PromoCard>

        <PromoCard onClick={() => handleDiscountClick(30)}>
          <h3>Massive Discounts</h3>
          <p>Save up to 30% on selected items</p>
          <Button>Shop Discounts</Button>
        </PromoCard>
      </PromoSection>

      <Footer>
        <FooterGrid>
          <FooterColumn>
            <h4>About ThunderCart</h4>
            <p>
              Your one-stop online shop for exclusive deals and trending
              products. We bring the best quality at unbeatable prices.
            </p>
          </FooterColumn>

          <FooterColumn>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#hero">About Us</a>
              </li>
              <li>
                <a href="#hero">Contact Us</a>
              </li>
              <li>
                <a href="#hero">FAQs</a>
              </li>
              <li>
                <a href="#hero">Returns & Refunds</a>
              </li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h4>Customer Support</h4>
            <ul>
              <li>Email: support@thundercart.com</li>
              <li>Phone: +1-800-555-0199</li>
              <li>Live Chat: 24/7 Support</li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h4>Follow Us</h4>
            <SocialIcons>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </SocialIcons>
          </FooterColumn>
        </FooterGrid>

        <FooterBottom>
          <p>
            &copy; {new Date().getFullYear()} ThunderCart. All Rights Reserved.
          </p>
        </FooterBottom>
      </Footer>
    </Container>
  );
};

export default Home;
