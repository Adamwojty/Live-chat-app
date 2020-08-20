import * as React from "react";
import { Wrapper, Message, Name, Time } from "./ChatBody.styles";
import { store } from "../../config/Store/store";
type ChatProps = {
  messages: any | [];
};
type MessageType = {
  name: string;
  timestamp: {
    toDate(): Date;
  };
  message: string;
  userImg: string;
};
const ChatBody: React.FC<ChatProps> = ({ messages }) => {
  const { user } = React.useContext(store);
  return (
    <Wrapper>
      {messages.map(({ name, timestamp, message, userImg }: MessageType) => (
        <Message reciever={name !== user.user.displayName} key={message}>
          <Name>{name}</Name>
          {message}
          <Time>{new Date(timestamp?.toDate()).toUTCString()}</Time>
        </Message>
      ))}
    </Wrapper>
  );
};
export default ChatBody;
