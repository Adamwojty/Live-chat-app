import * as React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { Wrapper, Info } from "./ChatHeader.styles";

type chatProps = {
  roomName?: string;
  roomId?: string;
  messages: any;
};

const ChatHeader: React.FC<chatProps> = ({ roomName, roomId, messages }) => {
  return (
    <Wrapper>
      <Avatar src={`https://avatars.dicebear.com/api/human/${roomId}.svg`} />
      <Info>
        <h3>{roomName}</h3>
        <p>
          {messages.length
            ? new Date(
                messages[messages.length - 1]?.timestamp?.toDate()
              ).toUTCString()
            : "No messages yet"}
        </p>
      </Info>
      <IconButton>
        <MoreVert />
      </IconButton>
    </Wrapper>
  );
};
export default ChatHeader;
