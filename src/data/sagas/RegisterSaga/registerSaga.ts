import { takeEvery, put, call } from "redux-saga/effects";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import {
  registerFailure,
  registerRequest,
  registerSuccess,
} from "../../slices/register";
import { doc, setDoc } from "firebase/firestore";

function* fireBaseRegister(action: ReturnType<typeof registerRequest>) {
  try {
    const { email, password, name, address } = action.payload;
    const userCredential: Awaited<
      ReturnType<typeof createUserWithEmailAndPassword>
    > = yield call(createUserWithEmailAndPassword, auth, email, password);
    console.log(userCredential);
    try {
      if (userCredential.user) {
        setDoc(doc(db, "Users", userCredential.user.uid), {
          email: userCredential.user.email,
          name: name,
          role: "customer",
          address: address,
        });
      }
      auth.signOut();
      yield put(registerSuccess({ name, email, address }));
    } catch (e) {
      yield put(registerFailure(e as string));
    }
  } catch (e) {
    yield put(registerFailure(e as string));
  }
}

function* registerSaga() {
  yield takeEvery("register/registerRequest", fireBaseRegister);
}

export default registerSaga;
