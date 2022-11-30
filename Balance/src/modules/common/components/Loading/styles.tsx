import styled from "styled-components";
import Loading from ".";

export const LoadingBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const LoadingStyled = styled(Loading)`
  > div {
    height: 100%;
  }
`;
