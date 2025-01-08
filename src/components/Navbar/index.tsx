import React, { useEffect, useState } from "react";
import {
  List,
  ListWrapper,
  Nav,
  Link,
  ThemeButton,
  NavWrapper,
  NavLogo,
  RagnarImg,
  CartWrapper,
  HamWrapper,
  LogoutButton,
} from "./styled.components";
import { CiLight, CiDark, CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeContextType } from "../../utils/theme/CustomThemeProvider";
import logoipsum from "../../assets/logoipsum.svg";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { LoginState, signOut as LogOut } from "../../data/slices/login";
import { RootState } from "../../data/store";

const Navbar: React.FC<ThemeContextType> = ({ isDarkMode, toggleTheme }) => {
  const [showHamList, setShowHamList] = useState(false);
  const { userDetails } = useSelector<RootState, LoginState>(
    (state) => state.login
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    if (!userDetails || userDetails.email === "") {
      // Not logged in
      return (
        <>
          <List>
            <Link to="/">Home</Link>
          </List>
          <List>
            <Link to="/products">Products</Link>
          </List>
          <List>
            <Link to="/register">Register</Link>
          </List>
          <List>
            <Link to="/login">Login</Link>
          </List>
        </>
      );
    } else if (userDetails.role === "admin") {
      // Logged in as admin
      return (
        <>
          <List>
            <Link to="/">Home</Link>
          </List>
          <List>
            <Link to="/admin">Dashboard</Link>
          </List>
          <List>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </List>
        </>
      );
    } else {
      // Logged in as customer
      return (
        <>
          <List>
            <Link to="/">Home</Link>
          </List>
          <List>
            <Link to="/products">Products</Link>
          </List>
          <List>
            <Link to="/profile">Profile</Link>
          </List>
          <List>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </List>
          <CartWrapper>
            <CiShoppingCart onClick={goToCart} />{" "}
          </CartWrapper>
        </>
      );
    }
  };

  return (
    <NavWrapper>
      <Nav>
        <NavLogo>
          <RagnarImg src={logoipsum} alt="Logo" />
        </NavLogo>
        <ListWrapper>{renderNavLinks()}</ListWrapper>
        <ThemeButton onClick={toggleTheme}>
          {isDarkMode ? <CiLight /> : <CiDark />}
        </ThemeButton>
        {/* <HamWrapper>
            <GiHamburgerMenu
              onClick={() => setShowHamList(!showHamList)}
            />
          </HamWrapper> */}
      </Nav>
    </NavWrapper>
  );
};

export default Navbar;
