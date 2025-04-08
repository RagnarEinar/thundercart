// About.tsx
import styled, { keyframes } from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  background: rgba(24, 24, 24, 0.74);
  font-family: "Arial", sans-serif;
  scroll-behavior: smooth;
  margin: 2.5rem auto 0 auto;
  padding: 0 1.2rem;
  border-radius: 12px;
  max-width: 900px;
  color: white;
`;

const Hero = styled.section`
  position: relative;
  text-align: center;
  padding: 1.2rem;
  border-radius: 12px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: rgba(236, 14, 14, 0.93);
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;

const HeroText = styled.p`
  font-size: 1.4rem;
  margin: 1rem auto;
  max-width: 700px;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
`;

const Section = styled.section`
  max-width: 900px;
  margin: 1.2rem auto;
  padding: 1.2rem;
  animation: ${fadeIn} 1s ease-in-out;
  text-align: center;

  h2 {
    color: #ff4b2b;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.9rem;
  margin: 1rem 0rem;
  a svg {
    fill: rgba(1, 1, 1, 1);
    width: 25px;
    height: 25px;
  }

  @media (max-width: 480px) {
    justify-content: center;
    gap: 0.3rem;
  }
`;

const Footer = styled.footer`
  padding: 2.5rem;
  text-align: center;
  margin-top: 1.2rem;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const FooterGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  text-align: left;
  margin: 0 auto;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;

  h4 {
    font-size: 1.5rem;
    margin-bottom: 0.6rem;
    color: rgba(8, 0, 255, 0.89);
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color};
      transition: color 0.3s ease;

      &:hover {
        color: #00bfff;
      }
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 1.2rem;
  font-size: 0.9rem;
  opacity: 0.7;
`;

const About: React.FC = () => {
  return (
    <Container>
      <Hero id="hero">
        <HeroTitle>Welcome to ThunderCart</HeroTitle>
        <HeroText>
          Revolutionizing the way you shop — with speed, style, and
          satisfaction.
        </HeroText>
      </Hero>

      <Section>
        <h2>Our Mission</h2>
        <p>
          ThunderCart aims to deliver top-tier products at competitive prices
          while offering an unmatched shopping experience. We're driven by
          customer satisfaction, innovation, and trust.
        </p>
      </Section>

      <Section>
        <h2>Our Story</h2>
        <p>
          Started in 2022, ThunderCart began as a small team passionate about
          creating a seamless online shopping journey. We've grown into a brand
          known for quality, reliability, and customer-first service.
        </p>
      </Section>

      <Section>
        <h2>Why Shop with Us?</h2>
        <p>
          We offer a curated selection of trending items, 24/7 support, secure
          payments, and swift delivery. Our growing community of satisfied
          customers speaks for our commitment.
        </p>
      </Section>

      <Section>
        <h2>Our Values</h2>
        <p>
          Integrity, innovation, and inclusivity guide everything we do. At
          ThunderCart, you're not just a customer — you're family.
        </p>
      </Section>

      <Footer>
        <FooterGrid>
          <FooterColumn>
            <h4>About ThunderCart</h4>
            <p>
              Your one-stop shop for exclusive deals and high-quality products.
              Trusted by thousands globally.
            </p>
          </FooterColumn>

          {/* <FooterColumn>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Shop</a>
              </li>
              <li>
                <a href="#hero">About Us</a>
              </li>
              <li>
                <a href="#hero">Contact</a>
              </li>
            </ul>
          </FooterColumn> */}

          <FooterColumn>
            <h4>Support</h4>
            <ul>
              <li>Email: support@thundercartxx.com</li>
              <li>Phone: +1-800-XXX-0199</li>
              <li>Live Chat: Available 24/7</li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h4>Connect with Us</h4>
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

export default About;
