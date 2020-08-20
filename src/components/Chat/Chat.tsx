import React from "react";
import { useParams } from "react-router";
import { Wrapper } from "./Chat.styles";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { useRoomData } from "./hooks/useRoomData";

const Chat: React.FC = () => {
  const { roomId } = useParams();
  const { messages, roomName } = useRoomData(roomId);
  return (
    <Wrapper>
      <ChatHeader roomName={roomName} roomId={roomId} messages={messages} />
      <ChatBody messages={messages} />
      <ChatFooter roomId={roomId} />
    </Wrapper>
  );
};
export default Chat;
