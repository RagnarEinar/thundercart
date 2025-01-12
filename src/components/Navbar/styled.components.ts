import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaRegSun } from "react-icons/fa";

export const NavbarWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 5px 30px;
  box-shadow: 0 2px 4px ${({ theme }) => theme.mediumBoxShadow};
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  @media (max-width: 768px) {
    transition: height 0.3s ease-in-out;
    padding: 5px;
  }
`;


export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.h1`
  color: rgba(255, 106, 0, 0.94);
  font-size: 2rem;
  margin: 10px 0px 10px 20px;
  font-weight: 700;
  @media (max-width: 768px) {
    margin: 5px 0px 5px 10px;
    font-size: 1.8rem;
  }
`;

export const NavLinksWrapper = styled.ul`
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ className }) => (className === "active" ? "flex" : "none")};
    background-color: ${({ theme }) => theme.background};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 53px;
    width: 250px;
    right: 0;
    gap: 10px;
    padding: 15px 0px;
    box-shadow: 0 5px 15px ${({ theme }) => theme.lightBoxShadow};
    border-radius: 10px;
  }
`;

export const NavItem = styled.li`
  margin: 0;
  align-self: center;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  padding: 10px;

  &.active {
    color: lime;
    font-weight: bold;
  }
`;

export const LogoutButtonStyled = styled.button`
  font-family: "FontAwesome";
  background-color: transparent;
  border: none;
  color: rgba(253, 0, 0, 0.96);
  cursor: pointer;
  font-size: 1.5rem;
  padding: 10px;
`;

export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ThemeToggleButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 15px;
  @media (max-width: 768px) {
    margin-right: 15px;
    font-size: 1.42rem;
    align-self: center;
  }
`;

export const SunIcon = styled(FaRegSun)`
  color: white;
`;

export const HamburgerWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    > svg {
      width: 26px;
      height: 26px;
      align-self: center;
    }
    display: block;
    cursor: pointer;
  }
`;
