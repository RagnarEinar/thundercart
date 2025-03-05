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
  SubmitButton,
  Error,
  DropDown,
} from "./styled.components";

interface ProductFormProps {
  selectedProduct: CrudProductState | null;
  onClose: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  selectedProduct,
  onClose,
}) => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (selectedProduct) {
      setProductData({ ...selectedProduct });
    } else {
      setProductData({
        prdname: "",
        prddesc: "",
        prdsummary: "",
        prdimg: "",
        orgprice: 0,
        discountedprice: 0,
        category: "",
        availableQuantity: 0,
      });
    }
  }, [selectedProduct]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // Convert numeric fields to valid numbers
    const parsedValue = [
      "orgprice",
      "discountedprice",
      "availableQuantity",
    ].includes(name)
      ? value.replace(/^0+/, "") || "0" // Remove leading zeros but keep "0" if empty
      : value;

    setProductData((prev) => ({ ...prev, [name]: parsedValue }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear field error
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!productData.prdname.trim()) {
      newErrors.prdname = "Product Name is required";
    }
    if (!productData.prddesc.trim()) {
      newErrors.prddesc = "Product Description cannot be empty";
    }
    if (!productData.prdsummary.trim()) {
      newErrors.prdsummary = "Please provide a summary for the product";
    }
    if (!productData.prdimg.trim()) {
      newErrors.prdimg = "Product Image URL is required";
    }
    if (!productData.category.trim()) {
      newErrors.category = "Please select a category";
    }
    if (productData.orgprice <= 0) {
      newErrors.orgprice = "Original Price must be greater than 0";
    }
    if (productData.discountedprice < 0) {
      newErrors.discountedprice = "Discounted Price cannot be negative";
    }
    if (productData.discountedprice >= productData.orgprice) {
      newErrors.discountedprice =
        "Discounted Price must be less than Original Price";
    }
    if (productData.availableQuantity < 0) {
      newErrors.availableQuantity = "Quantity cannot be negative";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // No errors mean form is valid
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (selectedProduct?.prduniqueid) {
      dispatch(updateProduct(productData));
    } else {
      dispatch(addProduct(productData));
    }
    onClose();
  };

  return (
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
        <label htmlFor="availableQuantity">Available Quantity</label>
        <input
          type="number"
          id="availableQuantity"
          name="availableQuantity"
          value={productData.availableQuantity}
          onChange={handleChange}
        />
        {errors.availableQuantity && <Error>{errors.availableQuantity}</Error>}
      </FormField>

      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
};

export default ProductForm;
