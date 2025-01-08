import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CrudProductState,
  fetchProducts,
  ProductsState,
} from "../../data/slices/products";
import { RootState } from "../../data/store";
import Loader from "../../components/Loader";
import {
  CataLogWrapper,
  ContentWrapper,
  ProductsWrapper,
  SearchIconWrapper,
  SearchInput,
  SearchWrapper,
  Wrapper,
} from "./styled.components";
import Sidebar from "../../components/SideBar";
import CataLogItem from "./CataLogItem";
import { Outlet, useLocation } from "react-router";
import { LoginState } from "../../data/slices/login";
import { AddButton } from "./CataLogItem/styled.components";
import ProductForm from "../Admin/ProductsList/ProductForm";
import { CiSearch } from "react-icons/ci";

const Products: React.FC = () => {
  const { filteredProducts, isLoading, isWriteSuccess } = useSelector<
    RootState,
    ProductsState
  >((s) => s.products);

  const { userDetails } = useSelector<RootState, LoginState>((s) => s.login);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<CrudProductState | null>(null);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const dispatch = useDispatch();
  const location = useLocation();
  const isBaseRoute = location.pathname.includes("/products/productDetails");

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWriteSuccess]);

  const add = () => {
    setIsModalOpen(true);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchInput
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <SearchIconWrapper>
            <CiSearch size={20} />
          </SearchIconWrapper>
      </SearchWrapper>
      {isBaseRoute ? (
        <Outlet />
      ) : (
        <ContentWrapper>
          <Sidebar />
          <ProductsWrapper>
            {userDetails?.role === "admin" && (
              <AddButton onClick={add}>Add New Product</AddButton>
            )}
            <CataLogWrapper>
              {filteredProducts.length > 0 ? (
                <CataLogItem productList={filteredProducts} />
              ) : (
                <div>No Products Available</div>
              )}
            </CataLogWrapper>
          </ProductsWrapper>
          {isModalOpen && (
            <ProductForm
              selectedProduct={selectedProduct}
              onClose={closeModal}
            />
          )}
        </ContentWrapper>
      )}
    </Wrapper>
  );
};

export default Products;
