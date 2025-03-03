import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../config/firebase";
import { CrudProductState, ProductDetailsState } from "../../slices/products";
import { FilterObjectState } from "../../../components/SideBar";

// get from db
export const getProducts = async (): Promise<ProductDetailsState[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "Products"));
    if (querySnapshot.empty) {
      throw new Error("Collection 'Productss' is empty or does not exist.");
    }
    const productsList: ProductDetailsState[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      productsList.push({
        prduniqueid: doc.id,
        prdname: data.prdname,
        prddesc: data.prddesc,
        prdsummary: data.prdsummary,
        prdimg: data.prdimg,
        orgprice: data.orgprice,
        discountedprice: data.discountedprice,
        availableQuantity: data.availableQuantity,
        reviews: data.reviews,
        category: data.category,
        rating: data.rating,
      });
    });
    if (productsList.length === 0) {
      throw new Error("No products found in the collection.");
    }
    return productsList;
  } catch (error) {
    console.error("Error fetching products: ", error);
    throw new Error("Could not fetch products");
  }
};

// add in db

export const createProduct = async (
  product: CrudProductState
): Promise<void> => {
  try {
    const docRef = await addDoc(collection(db, "Products"), {
      prdname: product.prdname,
      prddesc: product.prddesc,
      prdsummary: product.prdsummary,
      prdimg: product.prdimg,
      orgprice: product.orgprice,
      discountedprice: product.discountedprice,
      availableQuantity: product.availableQuantity,
      category: product.category,
      rating: [],
      reviews: [],
    });
    console.log("Product created with id", docRef.id);
  } catch (e) {
    console.error("Error adding product: ", e);
    throw new Error("Error adding product:");
  }
};

// update db

export const modifyProduct = async (
  updatedProduct: CrudProductState
): Promise<void> => {
  try {
    const productRef = doc(
      db,
      "Products",
      updatedProduct.prduniqueid as string
    );
    const productSnapshot = await getDoc(productRef); // Use getDoc for single document

    if (!productSnapshot.exists()) {
      throw new Error("Product not found");
    }

    const currentProductData = productSnapshot.data();

    // Get the existing reviews and ratings, or default to empty arrays if they don't exist
    const existingReviews = currentProductData?.reviews || [];
    const existingRatings = currentProductData?.rating || [];
    await updateDoc(productRef, {
      prdname: updatedProduct.prdname,
      prddesc: updatedProduct.prddesc,
      prdsummary: updatedProduct.prdsummary,
      prdimg: updatedProduct.prdimg,
      orgprice: updatedProduct.orgprice,
      discountedprice: updatedProduct.discountedprice,
      availableQuantity: updatedProduct.availableQuantity,
      category: updatedProduct.category,
      reviews: existingReviews, // Keep old reviews
      rating: existingRatings, // Keep old ratings
    });
    console.log("Product updated successfully");
  } catch (e) {
    console.error("Error updating product: ", e);
    throw new Error("Error updating product:");
  }
};

// delete in db

export const dropProduct = async (prduid: string): Promise<void> => {
  try {
    const productRef = doc(db, "Products", prduid);
    await deleteDoc(productRef);
    console.log("product deleted successfully");
  } catch (e) {
    console.error("Error deleting product ", e);
    throw new Error("Error deleting product");
  }
};

export const getFilterProd = (
  products: ProductDetailsState[],
  filters: FilterObjectState
): ProductDetailsState[] => {
  try {
    const filteredProducts = products.filter((product) => {
      const matchesCategory =
        !filters.category || product.category === filters.category;

      const matchesPrice =
        !filters.priceRange ||
        (product.discountedprice >= filters.priceRange.min &&
          product.discountedprice <= filters.priceRange.max);

      const matchesAvailability =
        filters.availability === null ||
        (product.availableQuantity > 0) === filters.availability;

      const matchesRating =
        !filters.rating ||
        product.rating.reduce((sum, rate) => sum + rate, 0) /
          product.rating.length >=
          filters.rating;

      const matchesDiscount =
        !filters.discount ||
        100 - (product.discountedprice / product.orgprice) * 100 >=
          filters.discount;

      return (
        matchesCategory &&
        matchesPrice &&
        matchesAvailability &&
        matchesRating &&
        matchesDiscount
      );
    });
    console.log("filteredProducts", filteredProducts);
    return filteredProducts;
  } catch (e) {
    console.error("Error while filtering products", e);
    throw new Error("Error while filtering products");
  }
};
