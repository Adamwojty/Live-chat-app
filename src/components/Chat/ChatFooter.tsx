import * as React from "react";
import firebase from "firebase";
import { Wrapper, Form } from "./ChatFooter.styles";
import db from "../../config/firebase/firebaseInit";
import { store } from "../../config/Store/store";
type FooterProps = {
  roomId: string;
};

const ChatFooter: React.FC<FooterProps> = ({ roomId }) => {
  const { user } = React.useContext(store);
  const [input, setInput] = React.useState<string>("");
  const sendMessage = async (e: any) => {
    await e.preventDefault();

    await db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.user.displayName,
      userImg: user.user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    return await setInput("");
  };
  return (
    <Wrapper>
      <Form>
        <input
          value={input}
          placeholder='Type a message'
          onChange={(e) => setInput(e.target.value)}
          type='text'></input>
        <button type='submit' onClick={(e) => sendMessage(e)}>
          Send a message
        </button>
      </Form>
    </Wrapper>
  );
};
export default ChatFooter;
