import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { AppDispatch } from "../data/store";
import { signInSuccess, signOut, UserState } from "../data/slices/login";

export const listenForAuthChanges = (
  dispatch: AppDispatch,
  userDetails: UserState | null
) => {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      try {
        // Fetch user details from Firestore
        const uid = user.uid;
        const docRef = doc(db, "Users", uid);
        if (userDetails === null) {
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const userData = docSnap.data();
            dispatch(signInSuccess(userData));
          } else {
            console.error("User details not found in Firestore.");
            dispatch(signOut());
          }
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        dispatch(signOut());
      }
    } else {
      auth.signOut();
      dispatch(signOut());
    }
  });
};
