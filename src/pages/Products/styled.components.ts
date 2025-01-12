import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.sidebarBackground};
`;

export const ProductsPageContainer = styled.div`
  width: 100%;
  padding: 15px 10px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  box-shadow: 0 4px 12px ${({ theme }) => theme.mediumBoxShadow};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;

    flex-direction: column;
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

export const CataLogWrapper = styled.div``;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px auto 20px auto;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 5px 15px;
  max-width: 400px;
  width: 100%;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  flex-grow: 1;
  padding: 8px;
  border-radius: 25px;
  background-color: transparent;
  color: ${({ theme }) => theme.color};
`;

export const SearchIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.color};
`;

export const AddButton = styled.button`
  padding: 12px 20px;
  background-color: #4caf50; /* Green background */
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background-color: #45a049; /* Darker green on hover */
  }
`;

export const NoProducts = styled.div`
  display: flex;
  justify-content:center;
  font-size: 1.5rem;
  color: rgba(14, 4, 216, 0.88);
  margin: 0px auto;
`;
