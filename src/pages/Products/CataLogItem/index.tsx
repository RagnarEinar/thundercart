import React, { Fragment, useEffect, useState } from "react";
import {
  ItemDetails,
  ItemName,
  PriceContainer,
  DiscountedPrice,
  OrgPrice,
  DiscountedPercent,
  PrdImage,
  ItemDesc,
  ButtonContainer,
  EditButton,
  DeleteButton,
  CatalogItemContainer,
  CatalogItem,
  CataLogWrapper,
  Ruppeeicon,
  FreeDelivery,
  CartContentContainer,
} from "./styled.components";

import { useDispatch, useSelector } from "react-redux";
import cart3 from "../../../assets/cart3.png";
import { RootState } from "../../../data/store";
import { LoginState } from "../../../data/slices/login";
import {
  CrudProductState,
  deleteProduct,
  ProductDetailsState,
} from "../../../data/slices/products";
import ProductForm from "../../AdminDashboard/ProductsList/ProductForm";
import { FormatProductdetailsToCrudState, getDiscountPercent } from "./utils";
import { useNavigate } from "react-router";
import Rating from "../../../components/Rating";
import ProductsPopModal from "../../../components/ProductsPopModal";
import ProductDetails from "../ProductDetails";

interface CataLogItemProps {
  productList: ProductDetailsState[];
}

const CataLogItem: React.FC<CataLogItemProps> = ({ productList }) => {
  const [openProductsInModal, setOpenProductsInModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string>("");
  const { userDetails } = useSelector<RootState, LoginState>((s) => s.login);
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<CrudProductState | null>(null);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };
  const updateProduct = (product: ProductDetailsState) => {
    const result: CrudProductState = FormatProductdetailsToCrudState(product);
    setSelectedProduct(result);
    setIsModalOpen(true);
  };

  const drop = (id: string) => {
    dispatch(deleteProduct(id));
  };

  const goToProductDetails = (prduniqueid: string) => {
    if (userDetails?.role !== "admin") {
      // navigate(`productDetails/${prduniqueid}`);
      setSelectedProductId(prduniqueid);
      setOpenProductsInModal(true);
    }
  };

  useEffect(() => {
    console.log("productList:", productList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (openProductsInModal) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    // Cleanup to ensure the style is reverted on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openProductsInModal]);

  return (
    <CataLogWrapper>
      {productList.map((item, index) => {
        return (
          <CatalogItemContainer key={item.prduniqueid || index}>
            <CatalogItem>
              <CartContentContainer
                onClick={() => goToProductDetails(item.prduniqueid as string)}
              >
                <PrdImage src={cart3} alt="Image not available" />
                <ItemDetails>
                  <ItemName>{item.prdname}</ItemName>
                  <ItemDesc>{item.prddesc}</ItemDesc>
                  {item.rating?.length > 0 && (
                    <Rating
                      displayMode="compact"
                      rating={
                        item.rating.reduce((acc, rating) => acc + rating, 0) /
                        item.rating.length
                      }
                      ratingCount={item.rating.length}
                    />
                  )}
                  <PriceContainer>
                    <DiscountedPrice>
                      <Ruppeeicon />
                      {item.discountedprice}
                    </DiscountedPrice>
                    <OrgPrice>{item.orgprice}</OrgPrice>
                    <DiscountedPercent>
                      {getDiscountPercent(item.orgprice, item.discountedprice)}%
                      off
                    </DiscountedPercent>
                  </PriceContainer>
                  {userDetails?.role === "customer" && (
                    <FreeDelivery>Free delivery</FreeDelivery>
                  )}
                  <ButtonContainer>
                    {userDetails?.role === "admin" && (
                      <>
                        <EditButton onClick={() => updateProduct(item)}>
                          Edit
                        </EditButton>
                        <DeleteButton
                          onClick={() => drop(item.prduniqueid as string)}
                        >
                          Delete
                        </DeleteButton>
                      </>
                    )}
                  </ButtonContainer>
                </ItemDetails>
              </CartContentContainer>
            </CatalogItem>
          </CatalogItemContainer>
        );
      })}
      {isModalOpen && (
        <ProductForm selectedProduct={selectedProduct} onClose={closeModal} />
      )}

      {openProductsInModal && (
        <ProductsPopModal closeModal={() => setOpenProductsInModal(false)}>
          <ProductDetails
            productId={selectedProductId}
            isOpenedInModal={true}
            onBack={() => setOpenProductsInModal(false)}
          />
        </ProductsPopModal>
      )}
    </CataLogWrapper>
  );
};

export default CataLogItem;
