import React, { useEffect, useState } from "react";
import {
  addProduct,
  CrudProductState,
  updateProduct,
} from "../../../../data/slices/products";
import { useDispatch } from "react-redux";
import {
  FormContainer,
  FormField,
  ModalContent,
  ModalOverlay,
  SubmitButton,
  Error,
  DropDown,
} from "./styled.components";

interface ProductFormState {
  selectedProduct: CrudProductState | null;
  onClose: () => void;
}

const ProductForm: React.FC<ProductFormState> = ({
  selectedProduct,
  onClose,
}) => {
  const [productData, setProductData] = useState<CrudProductState>({
    prdname: "",
    prddesc: "",
    prdsummary: "",
    prdimg: "",
    orgprice: 0,
    discountedprice: 0,
    category: "",
    availableQuantity: 0,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    // For numeric inputs, convert to number
    const parsedValue =
      name === "orgprice" || name === "discountedprice" || name === "quantity"
        ? value
          ? parseFloat(value)
          : 0 // Convert to number or default to 0
        : value;

    setProductData({
      ...productData,
      [name]: parsedValue,
    });
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear field error
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    Object.entries(productData).forEach(([key, value]) => {
      if (key !== "prdid" && !value) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // No errors mean form is valid
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    if (selectedProduct?.prduniqueid) {
      console.log("form value", productData);
      dispatch(updateProduct(productData));
    } else {
      console.log("form value", productData);
      dispatch(addProduct(productData));
    }
    onClose();
  };

  useEffect(() => {
    if (selectedProduct !== null) {
      setProductData(selectedProduct);
    }
  }, [selectedProduct]);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <FormContainer onSubmit={handleSubmit}>
          <h2>{selectedProduct ? "Edit Product" : "Add Product"}</h2>
          <FormField>
            <label htmlFor="prdname">Product Name</label>
            <input
              type="text"
              id="prdname"
              name="prdname"
              value={productData.prdname}
              onChange={handleChange}
            />
            {errors.prdname && <Error>{errors.prdname}</Error>}
          </FormField>
          <FormField>
            <label htmlFor="prddesc">Product Description</label>
            <textarea
              id="prddesc"
              name="prddesc"
              value={productData.prddesc}
              onChange={handleChange}
            />
            {errors.prddesc && <Error>{errors.prddesc}</Error>}
          </FormField>
          <FormField>
            <label htmlFor="prdsummary">Product Summary</label>
            <textarea
              id="prdsummary"
              name="prdsummary"
              value={productData.prdsummary}
              onChange={handleChange}
            />
            {errors.prdsummary && <Error>{errors.prdsummary}</Error>}
          </FormField>
          <FormField>
            <label htmlFor="prdimg">Product Image URL</label>
            <input
              type="text"
              id="prdimg"
              name="prdimg"
              value={productData.prdimg}
              onChange={handleChange}
            />
            {errors.prdimg && <Error>{errors.prdimg}</Error>}
          </FormField>
          <FormField>
            <label htmlFor="orgprice">Original Price</label>
            <input
              type="number"
              id="orgprice"
              name="orgprice"
              value={productData.orgprice}
              onChange={handleChange}
            />
            {errors.orgprice && <Error>{errors.orgprice}</Error>}
          </FormField>
          <FormField>
            <label htmlFor="discountedprice">Discounted Price</label>
            <input
              type="number"
              id="discountedprice"
              name="discountedprice"
              value={productData.discountedprice}
              onChange={handleChange}
            />
            {errors.discountedprice && <Error>{errors.discountedprice}</Error>}
          </FormField>
          <FormField>
            <label htmlFor="category">Category</label>
            <DropDown
              id="category"
              name="category"
              value={productData.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
              <option value="toys">Toys</option>
            </DropDown>
            {errors.category && <Error>{errors.category}</Error>}
          </FormField>
          <FormField>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={productData.availableQuantity}
              onChange={handleChange}
            />
            {errors.quantity && <Error>{errors.quantity}</Error>}
          </FormField>
          <SubmitButton type="submit">Submit</SubmitButton>
        </FormContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProductForm;
