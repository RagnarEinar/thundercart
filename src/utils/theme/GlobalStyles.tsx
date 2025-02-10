import { createGlobalStyle } from "styled-components";
// interface CustomTheme {
//   background: string;
//   color: string;
// }

const lightTheme = {
  background: "rgba(255, 255, 255, 1)", // Pure white
  color: "rgba(0, 0, 0, 0.87)", // Dark text
  hoverBackground: "rgba(240, 240, 240, 1)", // Lighter grey on hover for better contrast
  cartIconColor: "rgba(51, 51, 51, 1)", // Dark cart icon
  badgeBackground: "rgba(255, 165, 0, 1)", // Orange badge
  badgeColor: "rgba(255, 255, 255, 1)", // White text on badge
  lightBoxShadow: "rgba(0, 0, 0, 0.1)", // Slightly lighter shadow for a soft look
  mediumBoxShadow: "rgba(0, 0, 0, 0.2)", // Slightly stronger shadow for depth
  heavyBoxShadow: "rgba(0, 0, 0, 0.3)", // Prominent shadow
  sidebarBackground: "rgba(248, 248, 248, 1)", // Light grey for sidebar background
  cartListBackground: "rgba(235, 235, 235, 1)", // Slightly darker background for cart list
  cartItemNameColor: "rgba(51, 51, 51, 1)", // Dark text for cart item name
  cartItemDescColor: "rgba(102, 102, 102, 1)", // Gray text for description
  cartItemSummColor: "rgba(51, 51, 51, 1)", // Dark text for total summary
  cartItemDisPrice: "rgba(0, 0, 0, 0.7)", // Less bold price in discount
  cartItemOrgPrice: "rgba(119, 119, 119, 1)", // Lighter original price for comparison
  cartItemDiscountPercent: "rgba(32, 230, 25, 0.91)", // Green for discount
  cartItemFreeDel: "rgba(3, 7, 251, 0.91)", // Highlighted green for free delivery
  cartEditBtnBackground: "rgba(100, 222, 2, 1)", // Green button for editing
  cartAddBtnBackground: "rgba(4, 49, 248, 1)", // Blue button for adding items
  cartDeleteBtnBackground: "rgba(249, 118, 3, 1)", // Orange delete button background
  cartAddToCartBtnBackground:  "rgba(28, 248, 72, 0.91)", // Orange background for add to cart button
  cartBackBackground: "rgba(249, 118, 3, 1)", // Orange background for back button
  cartBtnTextColor: "rgba(249, 249, 249, 1)", // White text for buttons
  cartBackBtnColor: "rgba(0, 0, 0, 0.95)", //  White text for buttons
  cartAddToCartBtnColor: "rgba(249, 118, 3, 1)", // Orange text for buttons
};

const darkTheme = {
  background: "rgba(18, 18, 18, 1)", // Near-black
  color: "rgba(255, 255, 255, 0.97)", // Light text
  hoverBackground: "rgba(51, 51, 51, 1)", // Dark grey on hover
  cartIconColor: "rgba(249, 249, 249, 1)", // Light cart icon
  badgeBackground: "rgba(93, 153, 198, 1)", // Softer light blue for badges
  badgeColor: "rgba(0, 0, 0, 1)", // Black text on badge
  lightBoxShadow: "rgba(255, 255, 255, 0.1)", // Subtle light shadow for dark theme
  mediumBoxShadow: "rgba(255, 255, 255, 0.2)", // Moderate light shadow
  heavyBoxShadow: "rgba(255, 255, 255, 0.3)", // Strong light shadow
  sidebarBackground: "rgba(21, 18, 18, 1)", // Slightly darker for sidebar in dark theme
  cartListBackground: "rgba(30, 30, 30, 1)", // Darker background for cart list
  cartItemNameColor: "rgba(255, 255, 255, 0.87)", // Lighter cart item name color
  cartItemDescColor: "rgba(158, 158, 158, 1)", // Lighter gray for description text
  cartItemSummColor: "rgba(255, 255, 255, 0.87)", // Lighter cart total summary text
  cartItemDisPrice: "rgba(255, 255, 255, 0.7)", // Discount price text
  cartItemOrgPrice: "rgba(119, 119, 119, 1)", // Lighter original price
  cartItemDiscountPercent:"rgba(32, 230, 25, 0.91)", // Green for discount percentage
  cartItemFreeDel: "rgba(18, 25, 245, 0.91)", // Highlighted green for free delivery
  cartEditBtnBackground: "rgba(100, 222, 2, 1)", // Green background for edit button
  cartAddBtnBackground: "rgba(4, 49, 248, 1)", // Blue background for add button
  cartDeleteBtnBackground: "rgba(249, 118, 3, 1)", // Orange background for delete button
  cartAddToCartBtnBackground: "rgba(28, 248, 72, 0.91)", // Orange background for add to cart button
  cartBackBackground: "rgba(249, 118, 3, 1)", // Orange background for back button
  cartBtnTextColor: "rgba(249, 249, 249, 1)", // White text for buttons
  cartBackBtnColor: "rgba(255, 255, 255, 0.95)", //  White text for buttons
  cartAddToCartBtnColor: "rgba(249, 118, 3, 1)", // Orange text for buttons
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: background-color 0.5s, color 0.5s;
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  },
  * {
    margin: 0;
    padding: 0;
  },

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;
export { lightTheme, darkTheme, GlobalStyle };
