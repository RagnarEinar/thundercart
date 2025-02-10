import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 20px;
`;

export const HeroSection = styled.section`
  text-align: center;
  background: linear-gradient(135deg, #ffa500, #87cefa);
  color: white;
  padding: 50px 20px;
  border-radius: 10px;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

export const HeroButton = styled.button`
  padding: 10px 20px;
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #ff5a45;
  }
`;

export const CategoriesSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`;

export const CategoryCard = styled.div`
  text-align: center;
`;

export const CategoryImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

export const CategoryName = styled.h3`
  margin-top: 10px;
`;

export const FeaturedSection = styled.section`
  margin: 40px 0;
`;

export const FeaturedTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const ProductCard = styled.div`
  text-align: center;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
`;

export const ProductImage = styled.img`
  width: 100%;
  border-radius: 10px;
  min-width: 100px;
  min-height: 100px;
`;

export const ProductName = styled.h4`
  margin: 10px 0;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
`;

export const BannerSection = styled.section`
  text-align: center;
  background: #ff6f61;
  color: white;
  padding: 30px;
  border-radius: 10px;
  margin-top: 40px;
`;

export const BannerText = styled.h2`
  margin-bottom: 10px;
`;

export const BannerButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: #ff6f61;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #f5f5f5;
  }
`;
