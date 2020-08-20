import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../config/styles";

export const LinkWrapper = styled(Link)`
  color: ${Colors.PARAGRAPH2};
  &:hover {
    color: ${Colors.PARAGRAPH};
  }
`;
export const Chat = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid ${Colors.STROKE};
  color: ${Colors.PARAGRAPH2};
  &:hover {
    background-color: ${Colors.HIGHLIGHT};
    color: ${Colors.PARAGRAPH};
  }
  h2 {
  }
  h3 {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;
export const Info = styled.div`
  margin-left: 15px;
`;
