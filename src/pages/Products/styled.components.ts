import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.sidebarBackground};
  @media (max-width: 500px) {
    padding: 10px 0px;
  }
`;

export const ProductsPageContainer = styled.div`
  width: 100%;
  padding: 15px 10px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  box-shadow: 0 4px 12px ${({ theme }) => theme.mediumBoxShadow};
  @media (max-width: 768px) {
    padding: 10px 0px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 25px;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    }
  }
`;

export const ProductsWrapper = styled.div`
  background-color: ${({ theme }) => theme.cartListbackground};
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px ${({ theme }) => theme.heavyBoxShadow};
  overflow-y: auto; /* Ensures content doesn't overflow */
`;
export const SidebarWrapperIB = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SidebarWrapperMB = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 80px;
    right: 0;
    z-index: 1000;
  }
`;

export const ShowSideBar = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 8px ${({ theme }) => theme.mediumBoxShadow};
    padding: 5px 10px;
    width: 80%;
    margin: 10px auto;
    font-style: italic;
    font-weight: 600;
    font-size: 0.7rem;
    color: rgba(0, 8, 255, 0.91);
    &:hover {
      cursor: pointer;
    }
  }
`;

export const CataLogWrapper = styled.div``;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px auto 20px auto;
  border: 1px solid ${({ theme }) => theme.borderColor || "#e0e0e0"};
  border-radius: 30px;
  padding: 10px;
  max-width: 450px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for modern look */
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 500px) {
    max-width: 300px;
    margin: auto;
    padding: 5px;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  padding: 5px 15px;
  background-color: transparent;
  color: ${({ theme }) => theme.color};
  font-weight: 600;

  &::placeholder {
    color: ${({ theme }) => theme.placeholderColor || "#aaa"};
    font-style: italic;
  }
`;

export const SearchIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.iconColor || "#888"};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.iconHoverColor || "#555"};
  }
`;

export const NoProducts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: rgba(14, 4, 216, 0.88);
  margin: 20% auto;
  padding: 50px;
  text-align: center;
`;
