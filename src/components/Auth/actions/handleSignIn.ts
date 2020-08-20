import { setUser } from "../../../config/Store/store";
import { auth, provider } from "../../../config/firebase/firebaseInit";
import { Redirect } from "react-router";

export const handleSignIn = (dispatch: any) => {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      dispatch(setUser(result));
    })
    .catch((error) => error.message);
};
