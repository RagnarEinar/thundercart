import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

export const ProductsWrapper = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;

export const CataLogWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: space-evenly;
  flex-wrap: wrap;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const SearchInput = styled.input`
  padding: 8px 16px;
  font-size: 16px;
  width: 80%;
  border: none;
`;

export const SearchIconWrapper = styled.div`
  cursor: pointer;
  color: #ccc;
  &:hover {
    color: #4c90f2;
  }
`;
