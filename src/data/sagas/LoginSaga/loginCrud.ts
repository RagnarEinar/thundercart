import { doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../../../config/firebase";

export const updateAddressInDB = async (address: string): Promise<string> => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error("No user is currently logged in.");
    }

    const userRef = doc(db, "Users", user.uid);
    await updateDoc(userRef, {
      address: address,
    });

    console.log("Address updated successfully");
    return address; // Return the updated address
  } catch (e) {
    console.error("Error while updating address", e);
    throw new Error("Error while updating address");
  }
};
