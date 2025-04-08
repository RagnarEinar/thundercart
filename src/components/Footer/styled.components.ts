import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 2.5rem 1.2rem;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 0.6rem 0;
`;

export const FooterTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  border-bottom: 2px solid #ff6f61;
  display: inline-block;
  padding-bottom: 0.4px;
`;

export const FooterLink = styled.a`
  display: block;
  margin-bottom: 0.6rem;
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #ff6f61;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: 0.6rem;
`;

export const Icon = styled.a`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    color: #ff6f61;
  }
`;

export const CopyrightText = styled.p`
  text-align: center;
  margin-top: 1.9rem;
  font-size: 0.9rem;
  color: #ccc;
`;
