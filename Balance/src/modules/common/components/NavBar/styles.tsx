import styled, { css } from "styled-components";

interface BackDropProps {
  showBackDrop: boolean;
}

interface MenuProps {
  mobileMenu: boolean;
  displayMenu?: boolean;
}

export const Span = styled.div`
  display: flex;
`;

export const LabelItem = styled.div`
  margin-right: auto;
  font-size: 1.4rem;
`;

export const BackDrop = styled.div<BackDropProps>`
  ${(props) =>
    props.showBackDrop &&
    css`
      top: 0;
      left: 0;
      z-index: 2;
      right: 0;
      bottom: 0;
      display: flex;
      position: fixed;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.5);
      -webkit-tap-highlight-color: transparent;
      opacity: 1;
      transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    `}
`;

export const List = styled.ul`
  list-style: none;
  padding: 24px 16px 24px 16px;
  margin: 0;
  width: 100%;
`;

export const ItemMenuNav = styled.li`
  display: flex;
  font-size: 0.95em;
  font-weight: regular;
  background-repeat: no-repeat;
  background-position: left 15px center;
  background-size: auto 20px;
  transition: all 0.15s linear;
  border-radius: 4px;
  cursor: pointer;
  background-position: center;
  transition: background 0.8s;

  :hover {
    background-color: rgba(38, 50, 56, 0.04);
    background: rgba(38, 50, 56, 0.04)
      radial-gradient(circle, transparent 1%, white 1%) center/15000%;
  }

  :active {
    background-color: rgba(63, 81, 181, 0.2);
    background-size: 100%;
    transition: background 0s;
  }

  :focus {
    outline: none;
  }
`;

export const Link = styled.a`
  color: #263238;
  width: 100%;
  padding: 10px 8px;
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;
  justify-content: flex-start;
  line-height: 1.75;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  user-select: none;
`;

export const Menu = styled.nav<MenuProps>`
  height: 100vh;
  z-index: 2;
  width: 255px;
  top: 64px;
  position: fixed;
  left: 0;
  outline: none;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  color: #263238;
  background-color: #fff;

  @media screen and (max-width: 1250px) {
    body {
      padding-left: 0;
    }
    width: 230px;
    transform: translate3d(-230px, 0, 0);
    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    z-index: 1350;
    top: 0;

    ${(props) =>
      props.displayMenu
        ? css`
            display: flex !important;
          `
        : css`
            display: none !important;
          `}
  }

  ${(props) =>
    props.mobileMenu &&
    css`
      transform: translate3d(0, 0, 0) !important;
    `}
`;

export const InputMenuMobile = styled.input.attrs({
  type: "checkbox",
})`
  overflow: hidden;
  position: absolute;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  display: none;

  @media screen and (max-width: 1250px) {
    display: block;
  }
`;

export const CustomMobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 1250px) {
    display: flex;
  }
`;
