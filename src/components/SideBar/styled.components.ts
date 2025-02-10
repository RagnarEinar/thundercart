import styled from "styled-components";

export const SidebarWrapper = styled.div`
  font-style: italic;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 20px;
  box-shadow: 0 6px 20px ${({ theme }) => theme.heavyBoxShadow};
  border-radius: 12px;
  overflow-y: auto;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.sidebarBackground};
  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  font-weight: bold;
  padding-bottom: 16px;
  justify-content: space-between;
`;

export const SidebarHeader = styled.h3`
  font-size: 1rem;
`;

export const FilterClearText = styled.h2`
  font-size: 0.8rem;
  align-self: self-end;
  color: rgba(13, 0, 255, 0.9);
  &:hover {
    cursor: pointer;
    transform: translateY(-4px);
  }
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
    transform: translateY(-4px);
  }
  span {
    font-size: 0.7rem;
  }
`;

export const FilterLabel = styled.label`
  font-weight: 600;
  font-size: 0.8rem;
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
  font-style: italic;

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
    rgba(236, 236, 236, 0.95),
    rgba(18, 255, 14, 0.94) ${({ value }) => `${value}%`},
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

    &:active {
      transform: scale(0.98);
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
  margin: 20px auto 10px auto;
`;

export const ApplyButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  font-style: italic;

  &:hover {
    background-color: rgba(50, 149, 255, 0.93);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;
