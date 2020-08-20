import React from "react";
import { Avatar } from "@material-ui/core";
import { Info, Chat, LinkWrapper } from "./Chats.styles";
import { handleNewChat } from "./actions/handleNewChat";
import { Routes } from "../../config/routes/routes";
import { useLatestMsg } from "./hooks/useLatestMsg";
type ChatsProps = {
  addNewChat?: boolean;
  id?: string;
  name?: string;
};
const Chats: React.FC<ChatsProps> = ({ addNewChat, name, id }) => {
  const message = useLatestMsg(id);

  return !addNewChat ? (
    <LinkWrapper to={`${Routes.APP}${id}`}>
      <Chat>
        <Avatar src={`https://avatars.dicebear.com/api/human/${id}.svg `} />
        <Info>
          <h3>{name}</h3>
          <p>{message[0]?.message}</p>
        </Info>
      </Chat>
    </LinkWrapper>
  ) : (
    <Chat onClick={handleNewChat}>
      <h2>Add new chat</h2>
    </Chat>
  );
};
export default Chats;
