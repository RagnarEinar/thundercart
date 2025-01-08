import React from "react";
import "font-awesome/css/font-awesome.min.css";
import styled from "styled-components";

interface RatingProps {
  rating: number;
  ratingCount: number;
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const RatingWrapper = styled.div`
  display: flex;
  padding: 2px 4px;
  background: rgb(17, 122, 1);
  border-radius: 4px;
  gap: 4px;
  align-items: center;
  height: 18px;
`;

const RatingNumber = styled.p`
  font-size: 14px;
  color: rgb(255, 255, 255);
  margin: 0px;
`;

const StarIcon = styled.i`
  color: rgb(255, 255, 255);
  font-size: 10px;
  margin: 0px;
`;
const RatingCount = styled.p`
  color: rgba(81, 48, 48, 0.96);
  margin: 0px;
`;

const Rating: React.FC<RatingProps> = ({ rating, ratingCount }) => {
  return (
    <Wrapper>
      <RatingWrapper>
        <RatingNumber>{rating}</RatingNumber>
        <StarIcon className="fa fa-star" />
      </RatingWrapper>
      <RatingCount>{`(${ratingCount})`}</RatingCount>
    </Wrapper>
  );
};

export default Rating;
