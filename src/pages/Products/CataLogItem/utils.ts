import {
  CrudProductState,
  ProductDetailsState,
} from "../../../data/slices/products";

export const FormatProductdetailsToCrudState = (
  item: ProductDetailsState
): CrudProductState => {
  return {
    prduniqueid: item.prduniqueid,
    prdname: item.prdname,
    prddesc: item.prddesc,
    prdsummary: item.prdsummary,
    prdimg: item.prdimg,
    orgprice: item.orgprice,
    discountedprice: item.discountedprice,
    category: item.category,
    availableQuantity: item.availableQuantity,
  };
};

export const getDiscountPercent = (
  orgprice: number,
  discountedprice: number
): string => {
  const discountPercent = ((orgprice - discountedprice) / orgprice) * 100;
  return discountPercent.toFixed(0).toString();
};
