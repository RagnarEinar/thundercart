import { takeEvery, put, call } from "redux-saga/effects";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
import {
  signInFailure,
  signInRequest,
  updateAddress,
  updateAddressFailure,
  updateAddressSuccess,
  // signInSuccess,
} from "../../slices/login";
import { updateAddressInDB } from "./loginCrud";
// import { doc, DocumentSnapshot, getDoc } from "firebase/firestore";

function* fireBaseLogin(action: ReturnType<typeof signInRequest>) {
  try {
    const { email, password } = action.payload;
    const userCredential: Awaited<
      ReturnType<typeof signInWithEmailAndPassword>
    > = yield call(signInWithEmailAndPassword, auth, email, password);
    console.log(userCredential);
    // try {
    //   const uid = userCredential.user.uid;
    //   const docRef = doc(db, "Users", uid);
    //   const docSnap: DocumentSnapshot = yield call(getDoc, docRef);

    //   if (docSnap.exists()) {
    //     const userData = docSnap.data();
    //     yield put(signInSuccess(userData));
    //   } else {
    //     yield put(signInFailure("User details not found."));
    //   }
    // } catch (e) {
    //   yield put(signInFailure((e as string) || "Error fetching user details."));
    // }
  } catch (e) {
    yield put(signInFailure(e as string));
  }
}

function* updatefireBaseAddress(action: ReturnType<typeof updateAddress>) {
  try {
    const updatedAddress: string = yield call(updateAddressInDB, action.payload);
    yield put(updateAddressSuccess(updatedAddress));
  } catch (e) {
    yield put(updateAddressFailure((e as Error).message));
  }
}

function* loginSaga() {
  yield takeEvery("login/signInRequest", fireBaseLogin);
  yield takeEvery("login/updateAddress", updatefireBaseAddress);
}

export default loginSaga;
