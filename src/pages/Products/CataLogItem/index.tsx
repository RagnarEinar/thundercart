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
  ItemSumm,
  ButtonContainer,
  EditButton,
  DeleteButton,
  ItemRating,
  ItemReviews,
  CatalogItemContainer,
  CatalogItem,
  AddButton,
  CataLogWrapper,
  Ruppeeicon,
  FreeDelivery,
} from "./styled.components";

import { useDispatch, useSelector } from "react-redux";
import cart1 from "../../../assets/cart1.png";
import cart2 from "../../../assets/cart2.png";
import cart3 from "../../../assets/cart3.png";
import { RootState } from "../../../data/store";
import { LoginState } from "../../../data/slices/login";
import {
  CrudProductState,
  deleteProduct,
  ProductDetailsState,
} from "../../../data/slices/products";
import ProductForm from "../../Admin/ProductsList/ProductForm";
import { FormatProductdetailsToCrudState } from "./utils";
import { useNavigate } from "react-router";
import Rating from "../../../components/Rating";

interface CataLogItemProps {
  productList: ProductDetailsState[];
}

const CataLogItem: React.FC<CataLogItemProps> = ({ productList }) => {
  const { userDetails } = useSelector<RootState, LoginState>((s) => s.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<CrudProductState | null>(null);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const getDiscountPercent = (
    orgprice: number,
    discountedprice: number
  ): string => {
    const discountPercent = ((orgprice - discountedprice) / orgprice) * 100;
    return discountPercent.toFixed(0).toString();
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
    if (userDetails?.role === "customer") {
      navigate(`productDetails/${prduniqueid}`);
    }
  };

  useEffect(() => {
    console.log("productList:", productList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CataLogWrapper>
      {productList.map((item, index) => (
        <CatalogItemContainer key={index}>
          <CatalogItem
            onClick={() => {
              goToProductDetails(item.prduniqueid as string);
            }}
          >
            <PrdImage src={cart3} alt={"Image Network Error"} />
            <ItemDetails>
              <ItemName>{item.prdname}</ItemName>
              <ItemDesc>{item.prddesc}</ItemDesc>
              <Rating rating={4.5} ratingCount={2444} />
              <PriceContainer>
                <DiscountedPrice>
                  <Ruppeeicon />
                  {item.discountedprice}
                </DiscountedPrice>
                <OrgPrice>
                  <Ruppeeicon />
                  {item.orgprice}
                </OrgPrice>
                <DiscountedPercent>
                  {getDiscountPercent(item.orgprice, item.discountedprice)}% off
                </DiscountedPercent>
              </PriceContainer>
              <FreeDelivery>Free delivery</FreeDelivery>
            </ItemDetails>
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
          </CatalogItem>
        </CatalogItemContainer>
      ))}
      {isModalOpen && (
        <ProductForm selectedProduct={selectedProduct} onClose={closeModal} />
      )}
    </CataLogWrapper>
  );
};

export default CataLogItem;
