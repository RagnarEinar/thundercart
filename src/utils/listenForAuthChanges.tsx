import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { AppDispatch } from "../data/store";
import { signInSuccess, signOut, UserState } from "../data/slices/login";

export const listenForAuthChanges = (dispatch: AppDispatch) => {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      try {
        // Fetch user details from Firestore
        const uid = user.uid;
        const docRef = doc(db, "Users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();

          // Create a user object based on the relevant fields for UserState
          const formattedUserData: UserState = {
            name: userData.name || "",
            email: userData.email || "",
            role: userData.role || "",
            address: userData.address || "",
          };

          dispatch(signInSuccess(formattedUserData));
        } else {
          console.error("User details not found in Firestore.");
          dispatch(signOut());
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        dispatch(signOut());
      }
    } else {
      // User is signed out
      auth.signOut();
      dispatch(signOut());
    }
  });
};
