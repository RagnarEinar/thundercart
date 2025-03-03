import React, { useState } from "react";
import { styled } from "styled-components";
import { Button } from "../../pages/Login/styled.components";
import Rating from "../Rating";
import { useDispatch } from "react-redux";
import {
  addProductRating,
  AddProductRatingPayload,
  addProductReview,
  AddProductReviewPayload,
} from "../../data/slices/cartsandOrders";
import { FeedbackButtonContainer } from "../../pages/Profile/MyOrders";

export const FeedbackSection = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FeedbackItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FeedbackHeading = styled.h3`
  display: flex;
  font-size: 0.9rem;
  align-self: self-start;
`;

export const FeedbackContent = styled.div`
  color: ${({ theme }) => theme.cartItemDescColor};
  display: flex;
  margin-left: 20px;
  font-size: 0.9rem;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ReviewTextarea = styled.textarea`
  width: 60%;
  padding: 5px 0px 0px 5px;
  font-size: 0.8rem;
  border: 1px solid lightgrey;
  border-radius: 8px;
  resize: none;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  height: 30px;
  outline: none;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const RateNowButton = styled(Button)<{ secondary?: boolean }>`
  padding: 0.3rem 0.5rem;
  background: ${({ secondary }) => (secondary ? "#ff6347" : "#2e7d32")};
  font-size: 0.6rem;
  transition: background 0.3s ease, transform 0.2s ease;
  &:hover {
    background: ${({ secondary }) => (secondary ? "#ff4500" : "#1b5e20")};
    transform: scale(1.05);
  }
`;

interface OrdersFeedBackProps {
  rating: number | null;
  review: string;
  orderId: string;
  prduniqueid: string;
}

const OrdersFeedBack: React.FC<OrdersFeedBackProps> = React.memo(
  ({ rating, review, orderId, prduniqueid }) => {
    const [itemRating, setItemRating] = useState<number>(rating || 0);
    const [resetRating, setResetRating] = useState<boolean>(false);

    const [itemReview, setItemReview] = useState<string>(review || "");
    const [isEditingRating, setIsEditingRating] = useState<boolean>(false);
    const [isEditingReview, setIsEditingReview] = useState<boolean>(false);
    const [reviewError, setReviewError] = useState<string>("");

    const dispatch = useDispatch();

    const addReview = (reviewPayload: AddProductReviewPayload) => {
      if (reviewPayload.review.trim() === "") {
        setReviewError("Review cannot be empty!");
      } else {
        dispatch(addProductReview(reviewPayload));
        setIsEditingReview(false);
        // alert(reviewPayload.review);
      }
    };

    const addRating = (ratingPayload: AddProductRatingPayload) => {
      dispatch(addProductRating(ratingPayload));
      setIsEditingRating(false);
      // alert(ratingPayload.rating);
    };

    return (
      <FeedbackSection>
        <FeedbackItem>
          {rating ? (
            <>
              <FeedbackHeading>You Rated:</FeedbackHeading>
              <FeedbackContent>
                <Rating
                  rating={rating}
                  editable={false}
                  displayMode="detailed"
                />
              </FeedbackContent>
            </>
          ) : (
            <>
              <FeedbackHeading>Add Rating:</FeedbackHeading>
              <FeedbackContent>
                <Rating
                  rating={itemRating}
                  editable={true}
                  onRatingChange={(newRating) => {
                    setItemRating(newRating);
                    setIsEditingRating(true);
                    setResetRating(false); // Stop reset once user interacts again
                  }}
                  displayMode="detailed"
                  resetRating={resetRating} // Pass reset flag
                />

                {isEditingRating && (
                  <FeedbackButtonContainer>
                    <RateNowButton
                      onClick={() =>
                        addRating({
                          orderId,
                          prduid: prduniqueid,
                          rating: itemRating,
                        })
                      }
                    >
                      Rate Now
                    </RateNowButton>
                    <RateNowButton
                      secondary
                      onClick={() => {
                        setIsEditingRating(false);
                        setItemRating(rating || 0);
                        setResetRating(true); // Trigger reset
                      }}
                    >
                      Cancel
                    </RateNowButton>
                  </FeedbackButtonContainer>
                )}
              </FeedbackContent>
            </>
          )}
        </FeedbackItem>

        <FeedbackItem>
          {review ? (
            <>
              <FeedbackHeading>Your Review:</FeedbackHeading>
              <FeedbackContent>{review}</FeedbackContent>
            </>
          ) : (
            <>
              <FeedbackHeading>Add Review:</FeedbackHeading>
              <FeedbackContent>
                <ReviewTextarea
                  placeholder="Leave a comment..."
                  value={itemReview}
                  onChange={(e) => {
                    setItemReview(e.target.value);
                  }}
                  onFocus={() => {
                    setIsEditingReview(true);
                    setReviewError("");
                  }}
                />

                {isEditingReview && (
                  <FeedbackButtonContainer>
                    <RateNowButton
                      onClick={() => {
                        addReview({
                          orderId,
                          prduid: prduniqueid,
                          review: itemReview,
                        });
                      }}
                    >
                      Submit Review
                    </RateNowButton>
                    <RateNowButton
                      secondary
                      onClick={() => {
                        setReviewError("");
                        setItemReview(review || "");
                        setIsEditingReview(false);
                      }}
                    >
                      Cancel
                    </RateNowButton>
                  </FeedbackButtonContainer>
                )}
              </FeedbackContent>
              {reviewError && (
                <p style={{ color: "red", fontSize: "12px" }}>{reviewError}</p>
              )}
            </>
          )}
        </FeedbackItem>
      </FeedbackSection>
    );
  }
);

export default OrdersFeedBack;
