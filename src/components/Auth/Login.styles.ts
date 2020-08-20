import styled from "styled-components";
import { Colors } from "../../config/styles";
export const Wrapper = styled.div`
  background-color: ${Colors.BACKGROUND};
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`;
export const Container = styled.div`
  background-color: ${Colors.APPBACKGROUND};
  padding: 100px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  color: ${Colors.STROKE};
  button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: ${Colors.STROKE} !important;
    color: white;
  }
`;
export const Text = styled.h1``;
