import styled from "styled-components";
import { Button } from "../Login/styled.components";

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
  padding: 0px;
  border-radius: 10px;
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
    top: 8px;
    right: 0;
    z-index: 1000;
  }
`;

export const ShowSideBar = styled(Button)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    box-shadow: 0 4px 8px ${({ theme }) => theme.mediumBoxShadow};
    padding: 10px;
    width: 80%;
    margin: 10px auto;
    font-weight: 600;

    font-size: 1rem;
    color: rgba(0, 8, 255, 0.91);
    &:hover {
      cursor: pointer;
    }
  }
`;

export const CataLogWrapper = styled.div``;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 8px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 8px auto 16px auto;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 6px 12px;
  max-width: 400px;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 5px 10px;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  padding: 6px 10px;
  font-size: 0.9rem;
  background-color: transparent;
  color: #333;

  &::placeholder {
    color: #aaa;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

export const SearchIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #777;
  transition: color 0.3s ease;
  padding: 4px;
  border-radius: 50%;

  &:hover {
    color: #444;
    background-color: #eaeaea;
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
