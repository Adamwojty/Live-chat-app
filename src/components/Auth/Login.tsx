import React, { useContext } from "react";
import MessageIcon from "@material-ui/icons/Message";
import { Button } from "@material-ui/core";
import { Wrapper, Container, Text } from "./Login.styles";
import { store } from "../../config/Store/store";
import { handleSignIn } from "./actions/handleSignIn";
const Login: React.FC = () => {
  const { dispatch } = useContext(store);
  return (
    <Wrapper>
      <Container>
        <MessageIcon style={{ fontSize: 120 }} />
        <Text>Sign in to live chat app</Text>
        <Button type='submit' onClick={() => handleSignIn(dispatch)}>
          Sign In With Google
        </Button>
      </Container>
    </Wrapper>
  );
};
export default Login;
