import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  position: sticky;
  top: 0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

export const NavLogo = styled.div``;

export const RagnarImg = styled.img`
  width: 60px;
  height: 80px;
`;

export const ListWrapper = styled.ul`
  display: flex;
  gap: 100px;
  text-decoration: none;
  list-style-type: none;
  align-items: center;
`;

export const List = styled.li`
  text-decoration: none;
  font-size: 18px;
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.color};
  text-decoration: none;
  &:hover {
    color: rgba(116, 20, 20, 0.95);
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  > svg {
    width: 22px;
    height: 22px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ThemeButton = styled.div`
  cursor: pointer;
  > svg {
    width: 22px;
    height: 22px;
    padding-top: 5px;
  }
`;
export const HamWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoutButton = styled.div`
  cursor: pointer;
`;
