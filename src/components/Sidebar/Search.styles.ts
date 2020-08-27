import styled from "styled-components";
import { Colors, Media } from "../../config/styles";
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Colors.APPBACKGROUND};
  padding: 10px;
  height: 39px;
  border-top: 1px solid ${Colors.STROKE};
  border-bottom: 1px solid ${Colors.STROKE};
  @media ${Media.MOBILE_L} {
    display: none;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 35px;
  border-radius: 20px;
  input {
    border: 0;
    margin-left: 10px;
    width: 70%;
    outline: none;
  }
  .MuiSvgIcon-root {
    color: grey;
    padding: 10px;
  }
`;
