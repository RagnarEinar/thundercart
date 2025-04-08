import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaRegSun } from "react-icons/fa";
import { Button } from "../../pages/Login/styled.components";

export const NavbarWrapper = styled.div`
  padding: 0.3rem 2.8rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  @media (max-width: 768px) {
    transition: height 0.3s ease-in-out;
    padding: 0.3rem;
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
  font-size: 2.2rem;
  margin: 0.6rem 0 0.6rem 0.6rem;
  font-weight: 700;
  @media (max-width: 768px) {
    margin: 0.3rem 0 0.3rem 0.3rem;
    font-size: 1.8rem;
  }
`;

export const NavLinksWrapper = styled.ul`
  display: flex;
  gap: 1.2rem;
  margin: 0;
  padding: 1rem 1rem;
  list-style: none;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  border-radius: 10px;
  // background: rgba(1, 1, 1, 0.5);

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
    gap: 0.6rem;
    padding: 1rem 0;
    box-shadow: -5px 5px 15px ${({ theme }) => theme.mediumBoxShadow};
    border-radius: 0px 0px 0px 10px;
  }
  @media (max-width: 480px) {
    padding: 0.3rem 0rem 0.6rem 0rem;
    width: 200px;
    gap: 0.6rem;
  }
`;

export const NavItem = styled.li`
  margin: 0;
  align-self: center;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.whiteText};
  font-size: 1.2rem;
  padding: 0.3rem;
  border-radius: 10px;
  font-weight: 500;
  &.active {
    font-size: 1.4rem;
    padding: 0rem;
    font-weight: 800;
  }
  @media (max-width: 480px) {
    color: ${({ theme }) => theme.color};
    padding: 0rem;
    font-size: 0.8rem;
    &.active {
      font-size: 1.2rem;
    }
  }
`;

export const LogoutButtonStyled = styled(Button)`
  font-family: "Inter", sans-serif;
  font-weight: 800;
  background-color: transparent;
  color: rgba(253, 0, 0, 1);
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 0rem 0.3rem 0rem 0rem;
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
  color: ${({ theme }) => theme.whiteText};
  padding: 0rem;
  margin-left: 1rem;
  border-radius: 50%;
  svg {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 768px) {
    margin-right: 1rem;
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
