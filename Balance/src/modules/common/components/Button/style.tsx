import styled, { css } from "styled-components";

interface HoverEffects {
  active: boolean;
}

export const CustomButton = styled.button<HoverEffects>`
  color: #fff;
  background-color: #3f51b5;
  padding: 6px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  background-position: center;
  transition: background 0.8s;

  ${(props) =>
    props.active === true
      ? css`
          :hover {
            background-color: rgb(44, 56, 126);
            background: rgb(44, 56, 126)
              radial-gradient(circle, transparent 1%, rgb(44, 56, 126) 1%)
              center/15000%;
          }

          :active {
            box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
              0px 8px 10px 1px rgb(0 0 0 / 14%),
              0px 3px 14px 2px rgb(0 0 0 / 12%);
            background-color: #3f51b5;
            background-size: 100%;
            transition: background 0s;
          }
        `
      : css`
          background-color: #fff;
          border: 0;
          outline: 0;
          padding: 1.5rem 2rem;
          font-family: monospace;
          box-shadow: 0px 5px 10px #0057ab;
          transition: all 0.3s;
          cursor: pointer;
          border-radius: 5px;
          border-bottom: 4px solid #d9d9d9;

          :hover {
            box-shadow: 0px 15px 25px -5px #0057ab;
            transform: scale(1.03);
          }
          :active {
            box-shadow: 0px 4px 8px #0065c8;
            transform: scale(0.98);
          }
        `}
`;

export const LabelButton = styled.span`
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
`;
