import styled from "styled-components";
import { Colors } from "../../config/styles";
export const Wrapper = styled.div`
  flex: 1;
  background-color: ${Colors.CHATBODY};
  padding: 30px;
  overflow-y: auto;
`;
export const Message = styled.p<{ reciever: boolean }>`
  position: relative;
  font-size: 16px;
  padding: 10px;
  background-color: ${({ reciever }) =>
    reciever ? `${Colors.RECIEVER}` : `${Colors.SENDER}`};
  border-radius: 10px;
  color: ${Colors.PARAGRAPH};
  width: fit-content;
  margin-bottom: 30px;
  margin-left: ${({ reciever }) => (reciever ? "none" : "auto")};
  display: flex;
  flex-direction: column;
  max-width: 40%;
`;
export const Name = styled.span`
  color: ${Colors.PARAGRAPH2};
  position: absolute;
  top: -15px;
  font-size: 10px;
  font-weight: 500;
`;
export const Time = styled.span`
  margin-top: 5px;
  font-size: 8px;
`;
