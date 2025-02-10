import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 40px 20px;
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
  margin: 10px 0;
`;

export const FooterTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 1.2rem;
  border-bottom: 2px solid #ff6f61;
  display: inline-block;
  padding-bottom: 5px;
`;

export const FooterLink = styled.a`
  display: block;
  margin-bottom: 10px;
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #ff6f61;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
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
  margin-top: 30px;
  font-size: 0.9rem;
  color: #ccc;
`;
