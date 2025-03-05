import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CrudProductState,
  fetchProducts,
  ProductsState,
  resetFilteredProducts,
} from "../../data/slices/products";
import { RootState } from "../../data/store";
import Loader from "../../components/Loader";
import {
  CataLogWrapper,
  ContentWrapper,
  ProductsPageContainer,
  ProductsWrapper,
  SearchIconWrapper,
  SearchInput,
  SearchWrapper,
  Wrapper,
  ShowSideBar,
  SidebarWrapperIB,
  SidebarWrapperMB,
  SearchContainer,
} from "./styled.components";
import Sidebar from "../../components/SideBar";
import CataLogItem from "./CataLogItem";
import { Outlet, useLocation, useNavigate } from "react-router";
import { LoginState } from "../../data/slices/login";
import { AddButton } from "./CataLogItem/styled.components";
import ProductForm from "../AdminDashboard/ProductsList/ProductForm"; // Ensure the import is correct
import { CiSearch } from "react-icons/ci";
import {
  CartsandOrdersState,
  fetchCartsandOrders,
} from "../../data/slices/cartsandOrders";
import ErrorModal from "../../components/ErrorModel";
import ProductsPopModal from "../../components/ProductsPopModal";

const Products: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [errorHeader, seterrorHeader] = useState("");
  const [errorBody, seterrorBody] = useState("");
  const [errorPrimaryText, setErrorPrimaryText] = useState("");
  const { filteredProducts, isLoading, isWriteSuccess, allProducts, error } =
    useSelector<RootState, ProductsState>((s) => s.products);

  const { cartItems } = useSelector<RootState, CartsandOrdersState>(
    (s) => s.cartandOrders
  );
  const navigate = useNavigate();

  const { userDetails } = useSelector<RootState, LoginState>((s) => s.login);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<CrudProductState | null>(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const dispatch = useDispatch();
  const location = useLocation();
  const isProductDetailsRoute = location.pathname.includes(
    "/products/productDetails"
  );
  const handlePrimaryAction = () => {
    dispatch(fetchProducts());
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
    navigate("/");
  };

  const add = () => {
    setIsModalOpen(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const setShowFilter = () => {
    setShowSidebar(!showSidebar);
  };

  // Fetch carts and orders on initial load if cart is empty
  useEffect(() => {
    if (cartItems.length === 0 && !userDetails) {
      dispatch(fetchCartsandOrders());
    }
  }, [cartItems.length, dispatch, userDetails]);

  // Handle error state for products
  useEffect(() => {
    if (allProducts.length === 0 && error) {
      seterrorHeader("No Products List");
      seterrorBody("Something went wrong, please try later...");
      setErrorPrimaryText("Try again");
      setShowModal(true);
    }

    return () => {
      dispatch(resetFilteredProducts());
    };
  }, [allProducts, dispatch, error]);

  // Memoize search results
  const searchedProducts = useMemo(() => {
    if (searchQuery.trim() === "") return filteredProducts;

    return filteredProducts.filter(
      (product) =>
        product.prdname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.prddesc.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [filteredProducts, searchQuery]);

  // Reload products when write action is successful
  useEffect(() => {
    if (isWriteSuccess) {
      dispatch(fetchProducts());
    }
  }, [dispatch, isWriteSuccess]);

  useEffect(() => {
    if (cartItems.length <= 0) {
      dispatch(fetchCartsandOrders());
    }
  }, [cartItems.length, dispatch]);

  if (isLoading) {
    return <Loader message="Fetching products..." />;
  }

  return (
    <Wrapper>
      {isProductDetailsRoute ? (
        <Outlet />
      ) : (
        <ProductsPageContainer>
          <SearchContainer>
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
            {userDetails?.role === "admin" && (
              <AddButton onClick={add}>Add New Product</AddButton>
            )}
          </SearchContainer>

          <ContentWrapper>
            {userDetails?.role !== "admin" && (
              <>
                <SidebarWrapperIB>
                  <Sidebar />
                </SidebarWrapperIB>
                <ShowSideBar onClick={setShowFilter}>
                  {showSidebar ? "Hide Filters" : "Show Filters"}
                </ShowSideBar>
                {showSidebar && (
                  <SidebarWrapperMB>
                    <Sidebar setShowFilter={setShowFilter} />
                  </SidebarWrapperMB>
                )}
              </>
            )}

            <ProductsWrapper>
              <CataLogWrapper>
                {searchedProducts.length > 0 ? (
                  <CataLogItem productList={searchedProducts} />
                ) : (
                  // <NoProducts>
                  //   No Products available for your query, please check for other
                  //   items...
                  // </NoProducts>
                  <>
                    {!error && (
                      <ErrorModal
                        header={"No Matching Products found"}
                        body={
                          "No Products available for your query, please check for other  items"
                        }
                        onClose={() => {
                          setSearchQuery("");
                          dispatch(resetFilteredProducts());

                          if (
                            location.pathname === "/products" &&
                            location.search
                          ) {
                            navigate("/products"); // Remove query parameters
                          }
                        }}
                      />
                    )}
                  </>
                )}
              </CataLogWrapper>
            </ProductsWrapper>
            {isModalOpen && (
              <ProductsPopModal closeModal={closeModal}>
                <ProductForm
                  selectedProduct={selectedProduct}
                  onClose={closeModal}
                />
              </ProductsPopModal>
            )}
          </ContentWrapper>
        </ProductsPageContainer>
      )}
      {showModal && (
        <ErrorModal
          header={errorHeader}
          body={errorBody}
          primaryBtnText={errorPrimaryText}
          primaryBtnAction={handlePrimaryAction}
          onClose={handleClose}
        />
      )}
    </Wrapper>
  );
};

export default Products;
