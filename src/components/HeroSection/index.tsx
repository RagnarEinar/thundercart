import styled from "styled-components";
import { Button } from "../../pages/Login/styled.components";

const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 60px 20px;
  background: #f8f8f8;
`;

const HeroContent = styled.div`
  flex: 1;
  padding: 40px;
  text-align: left;
`;

const HeroImageContainer = styled.div`
  flex: 1;
  text-align: right;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 500px;
`;

const CtaButton = styled(Button)`
  background-color: #ff6600;
  font-size: 1rem;
  &:hover {
    background-color: #e55b00;
  }
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Welcome to ThunderCart</h1>
        <p>Your one-stop shop for everything you need</p>
        <CtaButton onClick={() => window.scrollTo(0, 800)}>Shop Now</CtaButton>
      </HeroContent>
      <HeroImageContainer>
        <HeroImage src="hero-image.jpg" alt="Shop Now" />
      </HeroImageContainer>
    </HeroContainer>
  );
};

export default HeroSection;
