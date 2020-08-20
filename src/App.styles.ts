import styled from "styled-components";
import { Colors } from "./config/styles";
export const Wrapper = styled.div`
  background-color: ${Colors.BACKGROUND};
  height: 100vh;
  display: grid;
  place-items: center;
`;
export const AppWrapper = styled.main`
  display: flex;
  background-color: ${Colors.APPBACKGROUND};
  height: 90vh;
  width: 90vw;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.7);
  margin-top: -50px;
`;
