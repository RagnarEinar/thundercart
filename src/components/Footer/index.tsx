import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const FooterLinks = styled.div`
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink>Privacy Policy</FooterLink>
        <FooterLink>Terms & Conditions</FooterLink>
        <FooterLink>Contact Us</FooterLink>
      </FooterLinks>
      <div className="footer-socials">
        <FooterLink
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </FooterLink>
        <FooterLink
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </FooterLink>
        <FooterLink
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </FooterLink>
      </div>
    </FooterContainer>
  );
};

export default Footer;
