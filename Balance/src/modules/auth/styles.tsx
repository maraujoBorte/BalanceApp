import styled from "styled-components";

export const AuthGrid = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: 64px 1fr;
  grid-template-areas:
    "h"
    "main";
`;

export const AuthArea = styled.main`
  grid-area: main;
`;
