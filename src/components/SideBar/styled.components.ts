import styled from "styled-components";
import { Button } from "../../pages/Login/styled.components";

export const SidebarWrapper = styled.div``;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 20px;
  border-radius: 12px;
  overflow-y: auto;
  z-index: 1000;
  @media (max-width: 768px) {
    background-color: ${({ theme }) => theme.sidebarBackground};
    box-shadow: 0 6px 20px ${({ theme }) => theme.heavyBoxShadow};
    width: 200px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  font-weight: bold;
`;

export const SidebarHeader = styled.h3`
  font-size: 1.5rem;
  margin: auto;
  padding-bottom: 15px;
`;

export const FilterSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 8px ${({ theme }) => theme.mediumBoxShadow};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px ${({ theme }) => theme.heavyBoxShadow};
  }
  span {
    font-size: 0.8rem;
  }
`;

export const FilterLabel = styled.label`
  font-size: 0.7rem;
  font-weight: 700;
`;

export const CategoryDropdown = styled.select`
  background-color: ${({ theme }) => theme.sidebarBackground || "#fff"};
  color: ${({ theme }) => theme.color};
  font-size: 0.7rem;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  font-weight: bold;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 4px 2px rgba(0, 123, 255, 0.25);
  }

  &:hover {
    border-color: #0056b3;
  }
`;

interface SliderProps {
  min: number;
  max: number;
  value: number;
  minValue?: number;
  maxValue?: number;
}

export const LeftRangeSlider = styled.input.attrs({
  type: "range",
})<SliderProps>`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  outline: none;
  margin-bottom: 8px;
  background: linear-gradient(
    to right,
    #ccc ${({ min, max, value }) => `${((value - min) / (max - min)) * 100}%`},
    rgba(29, 254, 17, 0.94)
      ${({ min, max, value }) => `${((value - min) / (max - min)) * 100}%`}
  );
  border-radius: 4px 0px 0px 4px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background: rgba(23, 211, 86, 0.94);
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background: rgba(23, 211, 86, 0.94);
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const RightRangeSlider = styled.input.attrs({
  type: "range",
})<SliderProps>`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  outline: none;
  margin-bottom: 8px;
  background: linear-gradient(
    to right,
    rgba(29, 254, 17, 0.94)
      ${({ min, max, value }) => `${((value - min) / (max - min)) * 100}%`},
    #ccc ${({ min, max, value }) => `${((value - min) / (max - min)) * 100}%`}
  );
  border-radius: 0px 4px 4px 0px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background: rgba(23, 211, 86, 0.94);
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background: rgba(23, 211, 86, 0.94);
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
`;

export const SliderPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.color};
`;

export const AvailabilityOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  label {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 0.7rem;

    input {
      margin-right: 12px;
      accent-color: rgba(85, 0, 255, 0.9);
    }
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RatingOption = styled.div`
  font-size: 0.7rem;
  margin-bottom: 8px;
  input[type="radio"] {
    margin-right: 12px;
    accent-color: rgba(85, 0, 255, 0.9);
  }
`;

export const FilterButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const ApplyButton = styled(Button)`
  background-color: rgba(25, 118, 218, 0.91);
  transition: background 0.2s ease-in-out;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: rgba(2, 10, 255, 0.93);
    transform: scale(1.05);
  }
`;

export const FilterClearButton = styled(Button)`
  background-color: rgba(200, 33, 18, 0.94);
  transition: background 0.2s ease-in-out;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: rgba(255, 2, 2, 0.93);
    transform: scale(1.05);
  }
`;
