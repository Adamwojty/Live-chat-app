import styled from "styled-components";
import { Media, Colors } from "../../config/styles";
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media ${Media.MOBILE_L} {
    border-bottom: 1px solid ${Colors.STROKE};
  }
`;
export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 10vw;
  .MuiSvgIcon-root {
    font-size: 24px !important;
  }
  @media ${Media.MOBILE_L} {
    display: none;
  }
`;
