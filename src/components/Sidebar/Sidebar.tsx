import * as React from "react";
import { Wrapper, ChatsWrapper } from "./Sidebar.styles";
import Header from "./Header";
import Search from "./Search";
import Chats from "./Chats";
import { useChatsData } from "./hooks/useChatsData";
type ChatsProps = {
  id: string;
  data: {
    name: string;
  };
};

const Sidebar: React.FC = () => {
  const rooms = useChatsData();
  return (
    <Wrapper>
      <Header />
      <Search />
      <ChatsWrapper>
        <Chats addNewChat />
        {rooms.map((room: ChatsProps) => (
          <Chats key={room.id} id={room.id} name={room.data.name} />
        ))}
      </ChatsWrapper>
    </Wrapper>
  );
};
export default Sidebar;
