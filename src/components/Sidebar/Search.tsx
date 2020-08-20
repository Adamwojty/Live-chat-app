import React from "react";
import SearchOutLined from "@material-ui/icons/SearchOutlined";
import { Wrapper, SearchContainer } from "./Search.styles";
const Search: React.FC = () => {
  return (
    <Wrapper>
      <SearchContainer>
        <SearchOutLined />
        <input placeholder='Search or start new chat' type='text' />
      </SearchContainer>
    </Wrapper>
  );
};
export default Search;
