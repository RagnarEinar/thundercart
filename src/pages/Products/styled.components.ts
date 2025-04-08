import styled from "styled-components";
import { Button } from "../Login/styled.components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0rem 1.2rem;

  @media (max-width: 500px) {
    padding: 0.6rem 0rem;
  }
`;

export const ProductsPageContainer = styled.div`
  width: 100%;
  padding: 1rem 0.6rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px ${({ theme }) => theme.mediumBoxShadow};
  @media (max-width: 768px) {
    padding: 0.6rem 0rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    }
  }
`;

export const ProductsWrapper = styled.div`
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
    padding: 0.6rem;
    width: 80%;
    margin: 0.6rem auto;
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
  padding: 0.5rem;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem auto 1rem auto;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 0.4rem 0.8rem;
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
    padding: 0.3rem 0.6rem;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  padding: 0.4rem 0.6rem;
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
  padding: 0.25rem;
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
  padding: 3.1rem;
  text-align: center;
`;
