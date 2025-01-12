import styled from "styled-components";

export const SidebarWrapper = styled.div``;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  box-shadow: 0 6px 20px ${({ theme }) => theme.heavyBoxShadow};
  border-radius: 12px;
  overflow-y: auto;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.sidebarBackground};
`;

export const HeaderContainer = styled.div`
  display: flex;
  font-weight: bold;
  padding-bottom: 16px;
  justify-content: space-between;
`;

export const SidebarHeader = styled.h3`
  font-size: 1.5rem;
`;

export const FilterClearText = styled.h2`
  font-size: 1.1rem;
  align-self: self-end;
  color: rgba(2, 208, 244, 0.9);
  &:hover {
    cursor: pointer;
    transform: translateY(-4px);
  }
`;

export const FilterSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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
    transform: translateY(-4px);
  }
`;

export const FilterLabel = styled.label`
  font-weight: 600;
  font-size: 1.2rem;
`;

export const CategoryDropdown = styled.select`
  background-color: ${({ theme }) => theme.sidebarBackground || "#fff"};
  color: ${({ theme }) => theme.color || "#333"};
  font-size: 16px;
  font-weight: 500;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 4px 2px rgba(0, 123, 255, 0.25);
  }

  &:hover {
    border-color: #0056b3;
  }
`;

export const RangeSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  outline: none;
  margin-bottom: 8px;
  background: linear-gradient(
    90deg,
    #ff7b00,
    #ff7b00 ${({ value }) => `${value}%`},
    #ccc
  );
  border-radius: 4px;
`;

export const SliderContainer = styled.div`
  display: flex;
`;

export const SliderPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
`;

export const AvailabilityOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px; /* Slightly larger gap for better spacing */

  label {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    cursor: pointer; /* Make the label clickable */

    input {
      margin-right: 12px;
      accent-color: rgba(85, 0, 255, 0.9);
    }

    &:active {
      transform: scale(0.98); /* Slight shrink effect on click */
    }
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RatingOption = styled.div`
  margin-bottom: 8px;

  input[type="radio"] {
    margin-right: 12px;
    accent-color: rgba(85, 0, 255, 0.9);
  }
`;

export const FilterButtonContainer = styled.div`
  margin: 20px auto 10px auto;
`;

export const ApplyButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.1px;
  cursor: pointer;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;
