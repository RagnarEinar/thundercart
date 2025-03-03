import { FaShoppingCart } from "react-icons/fa";
import { styled } from "styled-components";

export const CartIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background};

  &:hover {
    background-color: ${({ theme }) => theme.hoverBackground};
  }
`;

export const CartIconStyled = styled(FaShoppingCart)`
  color: ${({ theme }) => theme.cartIconColor};
  font-size: 20px;
`;

export const ItemCount = styled.span`
  position: absolute;
  top: 1px;
  right: 1px;
  background-color: ${({ theme }) => theme.badgeBackground};
  color: ${({ theme }) => theme.badgeColor};
  font-size: 10px;
  font-weight: bold;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
