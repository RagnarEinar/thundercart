import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Login from "./pages/Login";
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
import ForgotPassword from "./pages/Login/ForgetPassword";
import Loader from "./components/Loader";
import { PageNotFound } from "./pages/Login/styled.components";
import Register from "./pages/Register";

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { userDetails } = useSelector<RootState, LoginState>(
    (state) => state.login
  );

  if (!userDetails) {
    return <Loader />;
  }

  if (userDetails.role !== "admin") {
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
          <Route path="/forgetpassword" element={<ForgotPassword />} />
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
            {/* default admin route */}
            <Route index element={<Navigate to="products" replace />} />
            <Route path="products" element={<ProductsList />} />
            <Route path="orders" element={<OrdersList />} />
            <Route path="users" element={<UsersList />} />
          </Route>

          <Route path="*" element={<PageNotFound>404 - Page Not Found</PageNotFound>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
