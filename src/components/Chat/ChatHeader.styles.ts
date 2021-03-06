import styled from "styled-components";
import { Colors, Media } from "../../config/styles";
export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Colors.STROKE};
  button {
    @media ${Media.MOBILE_L} {
      display: none;
    }
  }
`;
export const Info = styled.div`
  flex: 1;
  padding-left: 20px;
  h3 {
    margin-bottom: 3px;
    font-weight: 500;
  }
  p {
    color: ${Colors.PARAGRAPH2};
    @media ${Media.MOBILE_L} {
      display: none;
    }
  }
`;
