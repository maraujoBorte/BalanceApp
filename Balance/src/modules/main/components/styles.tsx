import styled from "styled-components";

export const MainGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 64px 1fr;
  grid-template-areas:
    "h h"
    "navbar main";

  @media screen and (max-width: 1250px) {
    grid-template-areas:
      "h h"
      "main main";
  }
`;

export const HeaderArea = styled.header`
  background-color: #3f51b5 !important;
  grid-area: h;
  min-height: 56px;
  height: 64px;
  width: 100%;
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  top: 0;
  left: auto;
  right: 0;
  position: fixed;
`;

export const NavArea = styled.div`
  grid-area: navbar;
`;

export const MainArea = styled.main`
  grid-area: main;
`;
