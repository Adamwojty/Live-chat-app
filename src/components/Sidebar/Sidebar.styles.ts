import styled from "styled-components";
import { Colors } from "../../config/styles";
export const Wrapper = styled.div`
  flex: 0.35;
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${Colors.STROKE};
`;
export const ChatsWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  background-color: ${Colors.APPBACKGROUND};
`;
