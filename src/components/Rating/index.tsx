import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface RatingProps {
  rating: number;
  ratingCount?: number;
  displayMode?: "compact" | "detailed"; // Two display options
  editable?: boolean; // Determines if user can change the rating
  onRatingChange?: (newRating: number) => void; // Callback when rating changes
  resetRating?: boolean; // Reset rating to initial value (used for cancel functionality)
}

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
`;

const StarsWrapper = styled.div<{ editable: boolean }>`
  display: flex;
  gap: 2px;
  align-items: center;
  ${({ editable }) => editable && "cursor: pointer;"} // Only cursor if editable
`;

const StarIcon = styled.span<{ editable: boolean }>`
  display: flex;
  align-self: baseline;
  font-size: 1rem;
  color: rgba(255, 213, 0, 0.94);
  ${({ editable }) => editable && "cursor: pointer; transition: color 0.2s;"}

  &:hover {
    ${({ editable }) =>
      editable && "color: rgba(255, 187, 0, 1);"} // Darker yellow on hover
  }
`;

const RatingText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

const RatingCount = styled.span`
  font-size: 0.8rem;
  align-self: center;
`;

const Rating: React.FC<RatingProps> = ({
  rating,
  ratingCount,
  displayMode = "compact",
  editable = false,
  onRatingChange,
  resetRating = false, // New prop to reset the rating when canceling
}) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [userRating, setUserRating] = useState<number>(rating);

  // Reset rating if resetRating is true (i.e., cancel action)
  useEffect(() => {
    if (resetRating) {
      setUserRating(rating); // Reset to initial value
    }
  }, [resetRating, rating]);

  const handleStarClick = (newRating: number) => {
    if (editable && onRatingChange) {
      setUserRating(newRating);
      onRatingChange(newRating);
    }
  };

  const handleMouseEnter = (value: number) => {
    if (editable) setHoveredRating(value);
  };

  const handleMouseLeave = () => {
    if (editable) setHoveredRating(null);
  };

  const displayedRating = hoveredRating ?? userRating;
  const fullStars = Math.floor(displayedRating);
  const hasHalfStar = displayedRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <Wrapper>
      {displayMode === "compact" ? (
        // Compact Mode: Single star, rating number, and count
        <>
          <StarIcon editable={false}>
            <FaStar />
          </StarIcon>
          <RatingText>{displayedRating.toFixed(1)}</RatingText>
          <RatingCount>({ratingCount})</RatingCount>
        </>
      ) : (
        // Detailed Mode: Shows 5-star system
        <>
          <StarsWrapper editable={editable} onMouseLeave={handleMouseLeave}>
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              return (
                <StarIcon
                  key={i}
                  editable={editable}
                  onClick={() => editable && handleStarClick(starValue)}
                  onMouseEnter={() => editable && handleMouseEnter(starValue)}
                >
                  {starValue <= fullStars ? (
                    <FaStar />
                  ) : starValue === fullStars + 1 && hasHalfStar ? (
                    <FaStarHalfAlt />
                  ) : (
                    <FaRegStar />
                  )}
                </StarIcon>
              );
            })}
          </StarsWrapper>
          <RatingText>{displayedRating.toFixed(1)}</RatingText>
          {ratingCount && <RatingCount>({ratingCount} Reviews)</RatingCount>}
        </>
      )}
    </Wrapper>
  );
};

export default Rating;
