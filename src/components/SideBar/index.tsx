import React, { useState } from "react";
import {
  SidebarContainer,
  SidebarHeader,
  FilterSection,
  FilterLabel,
  SliderContainer,
  RangeSlider,
  ClearButton,
  ApplyButton,
  FilterButtonContainer,
  FilterSectionWrapper,
  CategoryDropdown,
  AvailabilityOption,
  SliderPrice,
} from "./styled.components";
import { useDispatch } from "react-redux";
import {
  getFilteredProducts,
  resetFilteredProducts,
} from "../../data/slices/products";

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

const Sidebar: React.FC = () => {
  const [category, setCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<PriceRangeProps>({
    min: 0,
    max: 10000,
  });
  const [availability, setAvailability] = useState<boolean | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const dispatch = useDispatch();

  const clearFilters = () => {
    setCategory("");
    setPriceRange({ min: 0, max: 10000 });
    setAvailability(null);
    setRating(0);
    setDiscount(0);
    dispatch(resetFilteredProducts());
  };

  const applyFilters = () => {
    console.log({ category, priceRange, availability, rating, discount });
    dispatch(
      getFilteredProducts({
        category,
        priceRange,
        availability,
        rating,
        discount,
      })
    );
  };

  return (
    <SidebarContainer>
      <SidebarHeader>Filters</SidebarHeader>
      <FilterSectionWrapper>
        {/* Category Section */}
        <FilterSection>
          <FilterLabel>Category</FilterLabel>
          <CategoryDropdown
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "12px",
            }}
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
          <FilterLabel>Price Range</FilterLabel>
          <SliderContainer>
            <RangeSlider
              type="range"
              min="0"
              max="10000"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange((prev) => ({
                  ...prev,
                  min: Math.min(Number(e.target.value), prev.max - 10),
                }))
              }
            />
            <RangeSlider
              type="range"
              min="0"
              max="10000"
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
          <FilterLabel>Availability</FilterLabel>
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
          <FilterLabel>Rating</FilterLabel>
          {[4, 3, 2, 1].map((rate) => (
            <label key={rate}>
              <input
                type="radio"
                name="rating"
                value={rate}
                checked={rating === rate}
                onChange={() => setRating(rate)}
              />
              {rate}★ & above
            </label>
          ))}
        </FilterSection>

        {/* Discount Section */}
        <FilterSection>
          <FilterLabel>Discount (%)</FilterLabel>
          <RangeSlider
            type="range"
            min="0"
            max="100"
            value={discount}
            onChange={(e) => setDiscount(Number(e.target.value))}
          />
          <span>{discount}% or more</span>
        </FilterSection>
      </FilterSectionWrapper>

      <FilterButtonContainer>
        <ClearButton onClick={clearFilters}>Clear Filters</ClearButton>
        <ApplyButton onClick={applyFilters}>Apply Filters</ApplyButton>
      </FilterButtonContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
