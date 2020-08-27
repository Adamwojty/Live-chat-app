import React, { useContext } from "react";
import { Avatar, IconButton } from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Wrapper, IconsWrapper } from "./Header.styles";
import { store } from "../../config/Store/store";

const Header: React.FC = () => {
  const data = useContext(store);
  return (
    <Wrapper>
      <IconsWrapper>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </IconsWrapper>
      <Avatar src={data.user?.user.photoURL} />
    </Wrapper>
  );
};
export default Header;
