import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Login from "./pages/Login";
import AppProvider from "./AppProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import { listenForAuthChanges } from "./utils/listenForAuthChanges";
import { useDispatch, useSelector } from "react-redux";
import { LoginState } from "./data/slices/login";
import { RootState } from "./data/store";
import ProductsList from "./pages/AdminDashboard/ProductsList";
import UsersList from "./pages/AdminDashboard/UsersList";
import ProductDetails from "./pages/Products/ProductDetails";
import Cart from "./pages/Cart";
import Loader from "./components/Loader";
import { PageNotFound } from "./pages/Login/styled.components";
import Register from "./pages/Register";
import Payment from "./components/Payment";
import AdminDashboard from "./pages/AdminDashboard";
import About from "./pages/About";

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

  useEffect(() => {
    listenForAuthChanges(dispatch);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppProvider />}>
          {/* Customer Routes */}
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
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
            path="/payment"
            element={
              <ProtectedRoute>
                <Payment />
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
                <AdminDashboard />
              </AdminRoute>
            }
          >
            {/* default admin route */}
            <Route index element={<Navigate to="manageproducts" replace />} />
            <Route path="manageproducts" element={<ProductsList />} />
            <Route path="manageusers" element={<UsersList />} />
          </Route>

          <Route
            path="*"
            element={<PageNotFound>404 - Page Not Found</PageNotFound>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
