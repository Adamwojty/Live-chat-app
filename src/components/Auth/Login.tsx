import React, { useContext } from "react";
import MessageIcon from "@material-ui/icons/Message";
import { Button } from "@material-ui/core";
import { Wrapper, Container, Text } from "./Login.styles";
import { auth, provider } from "../../config/firebase/firebaseInit";
import { store, setUser } from "../../config/Store/store";

const Login: React.FC = () => {
  const { dispatch } = useContext(store);
  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(setUser(result));
      })
      .catch((error) => error.message);
  };
  return (
    <Wrapper>
      <Container>
        <MessageIcon style={{ fontSize: 120 }} />
        <Text>Sign in to live chat app</Text>
        <Button type='submit' onClick={handleSignIn}>
          Sign In With Google
        </Button>
      </Container>
    </Wrapper>
  );
};
export default Login;
