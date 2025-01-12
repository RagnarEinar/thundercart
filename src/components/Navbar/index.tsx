import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "../../config/firebase";
import { LoginState, signOut as LogOut } from "../../data/slices/login";
import { RootState } from "../../data/store";
import {
  NavItem,
  NavLinkStyled,
  LogoutButtonStyled,
  NavbarWrapper,
  Nav,
  LogoContainer,
  LogoText,
  NavItemsContainer,
  NavLinksWrapper,
  ThemeToggleButton,
  HamburgerWrapper,
  SunIcon,
} from "./styled.components";
import { IoMoon } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeContextType } from "../../utils/theme/CustomThemeProvider";
import { useState } from "react";
import CartIcon from "../CartIcon";

import { useEffect, useRef } from "react";

const Navbar: React.FC<ThemeContextType> = ({ isDarkMode, toggleTheme }) => {
  const [showHamList, setShowHamList] = useState(false);
  const { userDetails } = useSelector<RootState, LoginState>(
    (state) => state.login
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navbarRef = useRef<HTMLDivElement | null>(null);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(LogOut());
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const renderNavLinks = () => {
    let links = [];

    if (!userDetails || userDetails.email === "") {
      links = [
        { to: "/", label: "Home" },
        { to: "/products", label: "Products" },
        { to: "/register", label: "Register" },
        { to: "/login", label: "Login" },
      ];
    } else if (userDetails.role === "admin") {
      links = [
        { to: "/", label: "Home" },
        { to: "/admin", label: "Dashboard" },
      ];
    } else {
      links = [
        { to: "/", label: "Home" },
        { to: "/products", label: "Products" },
        { to: "/profile", label: "Profile" },
      ];
    }

    return links.map((link) => (
      <NavItem key={link.to}>
        <NavLinkStyled to={link.to}>{link.label}</NavLinkStyled>
      </NavItem>
    ));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setShowHamList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <NavbarWrapper ref={navbarRef}>
      <Nav>
        <LogoContainer onClick={() => navigate("/")}>
          <LogoText>ThunderCart</LogoText>
        </LogoContainer>

        <NavLinksWrapper className={showHamList ? "active" : ""}>
          {renderNavLinks()}
          {userDetails && (
            <NavItem>
              <LogoutButtonStyled onClick={handleLogout}>
                Logout
              </LogoutButtonStyled>
            </NavItem>
          )}
        </NavLinksWrapper>

        <NavItemsContainer>
          {userDetails && userDetails.role === "customer" && (
            <CartIcon itemCount={5} onClick={goToCart} />
          )}
          <ThemeToggleButton onClick={toggleTheme}>
            {isDarkMode ? <SunIcon /> : <IoMoon />}
          </ThemeToggleButton>
          <HamburgerWrapper onClick={() => setShowHamList(!showHamList)}>
            <GiHamburgerMenu />
          </HamburgerWrapper>
        </NavItemsContainer>
      </Nav>
    </NavbarWrapper>
  );
};

export default Navbar;
