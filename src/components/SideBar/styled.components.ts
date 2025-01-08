import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  position: sticky;
  top: 0;
  left: 0;
  padding: 10px;
  border-radius: 10px;
  overflow-y: auto;
  width: 250px;
  gap: 16px;
`;

export const SidebarHeader = styled.h3`
  margin: 0px;
  font-size: 18px;
  font-weight: bold;
  color: rgb(0, 0, 0);
`;

export const FilterSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 786px) {
    flex-direction: row;
    width: 100%;
    margin: auto;
  }
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
  background-color: rgba(107, 105, 105, 0.09);
`;

export const FilterLabel = styled.label`
  display: block;
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 14px;
  font-family: cursive;
  color: rgba(0, 0, 0, 0.98);
`;

export const CategoryDropdown = styled.select`
  cursor: pointer;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
export const FilterInput = styled.input`
  width: calc(100% - 20px);
  padding: 8px 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export const SliderContainer = styled.div`
  display: flex;
`;

export const RangeSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  outline: none;
  transition: background 0.3s;
  margin: 0px 0px 5px 0px;
  background: rgba(255, 255, 255, 0.93);
`;

export const SliderPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AvailabilityOption = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SliderInput = styled.input`
  width: 100%;
  margin: 10px 0;
  cursor: pointer;
`;

export const FilterButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 786px) {
    flex-direction: column;
    width: 100%;
    margin: auto;
  }
`;
export const ApplyButton = styled.button`
  background-color: rgba(255, 7, 7, 1);
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;

export const ClearButton = styled.button`
  background-color: rgba(47, 28, 170, 0.89);
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;
