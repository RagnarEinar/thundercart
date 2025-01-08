import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppProvider from "./AppProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import { listenForAuthChanges } from "./utils/listenForAuthChanges";
import { useDispatch, useSelector } from "react-redux";
import { LoginState } from "./data/slices/login";
import { RootState } from "./data/store";
import Admin from "./pages/Admin";
import ProductsList from "./pages/Admin/ProductsList";
import OrdersList from "./pages/Admin/OrdersList";
import UsersList from "./pages/Admin/UsersList";
import ProductDetails from "./pages/Products/ProductDetails";
import Cart from "./pages/Cart";

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { userDetails } = useSelector<RootState, LoginState>(
    (state) => state.login
  );

  if (!userDetails || userDetails.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector<RootState, LoginState>((s) => s.login);

  useEffect(() => {
    listenForAuthChanges(dispatch, userDetails);
  }, [dispatch, userDetails]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppProvider />}>
          {/* Customer Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />}>
            <Route path="productDetails/:id" element={<ProductDetails />} />
          </Route>

          {/* Protected Customer Routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          >
            <Route path="products" element={<ProductsList />} />
            <Route path="orders" element={<OrdersList />} />
            <Route path="users" element={<UsersList />} />
          </Route>

          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
