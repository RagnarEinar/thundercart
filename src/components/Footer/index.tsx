import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  FooterColumn,
  FooterTitle,
  FooterLink,
  SocialMediaIcons,
  Icon,
  CopyrightText,
} from "./styled.components";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        {/* Quick Links Section */}
        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
          <FooterLink href="/faq">FAQ</FooterLink>
          <FooterLink href="/terms">Terms & Conditions</FooterLink>
        </FooterColumn>

        {/* Contact Section */}
        <FooterColumn>
          <FooterTitle>Contact</FooterTitle>
          <FooterLink href="mailto:support@shopease.com">support@shopease.com</FooterLink>
          <FooterLink href="tel:+123456789">+123 456 789</FooterLink>
          <FooterLink href="/support">Help Center</FooterLink>
        </FooterColumn>

        {/* Social Media Section */}
        <FooterColumn>
          <FooterTitle>Follow Us</FooterTitle>
          <SocialMediaIcons>
            <Icon href="https://facebook.com" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </Icon>
            <Icon href="https://twitter.com" target="_blank">
              <i className="fab fa-twitter"></i>
            </Icon>
            <Icon href="https://instagram.com" target="_blank">
              <i className="fab fa-instagram"></i>
            </Icon>
            <Icon href="https://linkedin.com" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </Icon>
          </SocialMediaIcons>
        </FooterColumn>
      </FooterContainer>
      <CopyrightText>
        © 2025 ShopEase. All rights reserved.
      </CopyrightText>
    </FooterWrapper>
  );
};

export default Footer;
