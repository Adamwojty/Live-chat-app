import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors, Media } from "../../config/styles";

export const LinkWrapper = styled(Link)`
  display: block;
  color: ${Colors.PARAGRAPH2};
  &:hover {
    color: ${Colors.PARAGRAPH};
  }
  @media ${Media.MOBILE_L} {
    max-height: 150px;
  }
`;
export const Chat = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid ${Colors.STROKE};
  color: ${Colors.PARAGRAPH2};
  @media ${Media.MOBILE_L} {
    flex-direction: column;
    padding: 20px 5px;
  }
  &:hover {
    background-color: ${Colors.HIGHLIGHT};
    color: ${Colors.PARAGRAPH};
  }
  h2 {
    @media ${Media.MOBILE_L} {
      font-size: 14px;
    }
  }
  h3 {
    font-size: 16px;
    margin-bottom: 8px;
  }
  img {
    @media ${Media.MOBILE_L} {
      margin: 0 auto;
    }
  }
`;
export const Info = styled.div`
  margin-left: 15px;
  @media ${Media.MOBILE_L} {
    margin: 10px 0;
    overflow-y: auto;
  }
`;
