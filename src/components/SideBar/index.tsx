import React, { useEffect, useState } from "react";
import {
  SidebarWrapper,
  SidebarContainer,
  HeaderContainer,
  SidebarHeader,
  FilterSectionWrapper,
  FilterSection,
  FilterLabel,
  CategoryDropdown,
  SliderContainer,
  SliderPrice,
  AvailabilityOption,
  FilterButtonContainer,
  ApplyButton,
  RatingContainer,
  RatingOption,
  RightRangeSlider,
  LeftRangeSlider,
  FilterClearButton,
} from "./styled.components";
import { useDispatch } from "react-redux";
import {
  getFilteredProducts,
  resetFilteredProducts,
} from "../../data/slices/products";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

interface PriceRangeProps {
  min: number;
  max: number;
}

export interface FilterObjectState {
  category: string;
  priceRange: PriceRangeProps;
  availability: boolean | null;
  rating: number;
  discount: number;
}
interface SideBarProps {
  setShowFilter?: () => void;
}
const Sidebar: React.FC<SideBarProps> = ({ setShowFilter }) => {
  const [category, setCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<PriceRangeProps>({
    min: 0,
    max: 10000,
  });
  const [availability, setAvailability] = useState<boolean | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const categoryQuery = searchParams.get("category");
  const priceRangeQuery = searchParams.get("priceRange");
  const availabilityQuery = searchParams.get("availability");
  const ratingQuery = searchParams.get("rating");
  const discountQuery = searchParams.get("discount");

  const clearFilters = () => {
    setCategory("");
    setPriceRange({ min: 0, max: 10000 });
    setAvailability(null);
    setRating(0);
    setDiscount(0);
    dispatch(resetFilteredProducts());
    setShowFilter && setShowFilter();
    if (location.pathname === "/products" && location.search) {
      navigate("/products"); // Remove query parameters
    }
  };

  const applyFilters = () => {
    dispatch(
      getFilteredProducts({
        category,
        priceRange,
        availability,
        rating,
        discount,
      })
    );
    setShowFilter && setShowFilter();
    console.log({ category, priceRange, availability, rating, discount });
  };

  useEffect(() => {
    if (
      categoryQuery ||
      priceRangeQuery ||
      availabilityQuery ||
      ratingQuery ||
      discountQuery
    ) {
      setCategory(categoryQuery ?? "");

      setRating(ratingQuery ? Number(ratingQuery) : 0);
      setDiscount(discountQuery ? Number(discountQuery) : 0);
      dispatch(
        getFilteredProducts({
          category: categoryQuery ?? "",
          priceRange: { min: 0, max: 10000 },
          availability: null,
          rating: ratingQuery ? Number(ratingQuery) : 0,
          discount: discountQuery ? Number(discountQuery) : 0,
        })
      );
    }
  }, [
    dispatch,
    categoryQuery,
    priceRangeQuery,
    availabilityQuery,
    ratingQuery,
    discountQuery,
  ]);

  return (
    <SidebarWrapper>
      <SidebarContainer>
        <HeaderContainer>
          <SidebarHeader>Filters</SidebarHeader>
        </HeaderContainer>
        <FilterButtonContainer>
          <FilterClearButton onClick={clearFilters}>Clear</FilterClearButton>
          <ApplyButton onClick={applyFilters}>Apply</ApplyButton>
        </FilterButtonContainer>
        <FilterSectionWrapper>
          {/* Category Section */}
          <FilterSection>
            <FilterLabel>CATEGORY</FilterLabel>
            <CategoryDropdown
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
              <option value="toys">Toys</option>
            </CategoryDropdown>
          </FilterSection>

          {/* Price Range Section */}
          <FilterSection>
            <FilterLabel>PRICE RANGE</FilterLabel>
            <SliderContainer>
              <LeftRangeSlider
                type="range"
                min={0}
                max={10000}
                value={priceRange.min}
                onChange={(e) =>
                  setPriceRange((prev) => ({
                    ...prev,
                    min: Math.min(Number(e.target.value), prev.max - 10),
                  }))
                }
              />
              <RightRangeSlider
                type="range"
                min={0}
                max={10000}
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange((prev) => ({
                    ...prev,
                    max: Math.max(Number(e.target.value), prev.min + 10),
                  }))
                }
              />
            </SliderContainer>
            <SliderPrice>
              <div>₹{priceRange.min}</div> - <div>₹{priceRange.max}</div>
            </SliderPrice>
          </FilterSection>

          {/* Availability Section */}
          <FilterSection>
            <FilterLabel>AVAILABILITY</FilterLabel>
            <AvailabilityOption>
              <label>
                <input
                  type="radio"
                  name="availability"
                  value="true"
                  checked={availability === true}
                  onChange={() => setAvailability(true)}
                />
                Available
              </label>
              <label>
                <input
                  type="radio"
                  name="availability"
                  value="false"
                  checked={availability === false}
                  onChange={() => setAvailability(false)}
                />
                Out of Stock
              </label>
              <label>
                <input
                  type="radio"
                  name="availability"
                  value=""
                  checked={availability === null}
                  onChange={() => setAvailability(null)}
                />
                All
              </label>
            </AvailabilityOption>
          </FilterSection>

          {/* Rating Section */}
          <FilterSection>
            <FilterLabel>RATING</FilterLabel>
            <RatingContainer>
              {[4, 3, 2, 1].map((rate) => (
                <RatingOption key={rate}>
                  <input
                    type="radio"
                    name="rating"
                    value={rate}
                    checked={rating === rate}
                    onChange={() => setRating(rate)}
                  />
                  {rate}★ & above
                </RatingOption>
              ))}
            </RatingContainer>
          </FilterSection>

          {/* Discount Section */}
          <FilterSection>
            <FilterLabel>DISCOUNT (%)</FilterLabel>
            <RightRangeSlider
              type="range"
              min={0}
              max={100}
              value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
            />
            <span>{discount}% or more</span>
          </FilterSection>
        </FilterSectionWrapper>
      </SidebarContainer>
    </SidebarWrapper>
  );
};

export default Sidebar;
