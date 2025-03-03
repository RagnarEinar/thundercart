import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaRegSun } from "react-icons/fa";
import { Button } from "../../pages/Login/styled.components";

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
  color: rgba(35, 17, 238, 0.94);
  font-size: 1.5rem;
  margin: 10px 0px 10px 10px;
  font-weight: 700;
  @media (max-width: 768px) {
    margin: 5px 0px 5px 5px;
    font-size: 1.3rem;
  }
`;

export const NavLinksWrapper = styled.ul`
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: "Inter", sans-serif;
  font-weight: 600;

  @media (max-width: 768px) {
    display: ${({ className }) => (className === "active" ? "flex" : "none")};
    background-color: ${({ theme }) => theme.background};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 48px;
    width: 250px;
    right: 0;
    gap: 10px;
    padding: 15px 0px;
    box-shadow: -5px 5px 15px ${({ theme }) => theme.mediumBoxShadow};
    border-radius: 0px 0px 0px 10px;
  }
  @media (max-width: 480px) {
    padding: 5px 0px 10px 0px;
    width: 200px;
    gap: 10px;
  }
`;

export const NavItem = styled.li`
  margin: 0;
  align-self: center;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color};
  font-size: 1.1rem;
  padding: 5px 5px;
  border-radius: 10px;
  &.active {
    font-size: 1.2rem;
    padding: 0px;
    font-weight: 800;
  }
  @media (max-width: 480px) {
    padding: 0px;
    font-size: 0.8rem;
  }
`;

export const LogoutButtonStyled = styled(Button)`
  font-family: "Inter", sans-serif;
  font-weight: 800;
  background-color: transparent;
  color: rgba(253, 0, 0, 1);
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 0px 10px 0px 0px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ThemeToggleButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.color};
  padding: 0px;
  margin-left: 15px;
  border-radius: 50%;
  &:hover {
    background-color: ${({ theme }) => theme.hoverBackground};
  }
  svg {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 768px) {
    margin-right: 15px;
    align-self: center;
  }
`;

export const SunIcon = styled(FaRegSun)`
  color: white;
`;

export const HamburgerWrapper = styled.div<{ $showHamList: boolean }>`
  display: none;

  @media (max-width: 768px) {
    > svg {
      width: 20px;
      height: 20px;
      align-self: center;
    }
    display: block;
    cursor: pointer;
    transition: transform 0.5s ease;
    transform: ${({ $showHamList }) =>
      $showHamList ? "rotate(90deg)" : "rotate(0deg)"};
  }
`;
