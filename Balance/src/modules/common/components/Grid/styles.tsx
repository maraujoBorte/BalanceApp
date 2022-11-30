import styled, { css } from "styled-components";

interface GridProps {
  container?: boolean;
  item?: boolean;
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
}

const size = 100 / 12;

export const FlexBox = styled.div<GridProps>`
  ${(props) =>
    props.container &&
    css`
      flex-wrap: wrap;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
    `}

  ${(props) =>
    props.item &&
    css`
      padding: 4px;
     
      @media screen and (max-width: 1920px) {
        flex-grow: 0;
        max-width: ${!!props.lg && props.lg * size + `%`};
        flex-basis: ${!!props.lg && props.lg * size + `%`};
      }
      @media screen and (max-width: 960px) {
        flex-grow: 0;
        max-width: ${!!props.md && props.md * size + `%`};
        flex-basis: ${!!props.md && props.md * size + `%`};
      }
      @media screen and (max-width: 600px) {
        flex-grow: 0;
        max-width: ${!!props.sm && props.sm * size + `%`};
        flex-basis: ${!!props.sm && props.sm * size + `%`};
      }
    `}
`;
