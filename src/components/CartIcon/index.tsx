import React from "react";
import {
  CartIconStyled,
  CartIconWrapper,
  ItemCount,
} from "./styled.components";

interface CartIconProps {
  itemCount: number;
  onClick: () => void;
}

const CartIcon: React.FC<CartIconProps> = ({ itemCount, onClick }) => {
  return (
    <CartIconWrapper onClick={onClick}>
      <CartIconStyled />
      {itemCount > 0 && <ItemCount>{itemCount}</ItemCount>}
    </CartIconWrapper>
  );
};

export default CartIcon;
