import styled from "styled-components";
import { Colors } from "../../config/styles";
export const Wrapper = styled.div`
  height: 62px;
  border-top: 1px solid ${Colors.STROKE};
  display: flex;
  align-items: center;
`;
export const Form = styled.form`
  display: flex;
  flex: 1;
  margin: 0 30px;
  input {
    flex: 1;
    border-radius: 30px;
    padding: 10px;
    border: 0;
  }
  button {
    display: none;
  }
`;
