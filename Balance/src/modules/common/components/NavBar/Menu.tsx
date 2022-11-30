import React, { memo, ReactNode } from "react";
import { List, Menu } from "./styles";

interface Props {
  style?: React.CSSProperties | undefined;
  mobileMenu: boolean;
  displayMenu: boolean;
  className?: string | undefined;
  listProps?: {
    style?: React.CSSProperties | undefined;
    className?: string | undefined;
  };
  children?: ReactNode;
}

const NavBar: React.FC<Props> = (props) => {
  return (
    <Menu
      mobileMenu={props.mobileMenu}
      displayMenu={props.displayMenu}
      style={props.style}
      className={props.className}
      tabIndex={0}
    >
      <List {...props.listProps}>{props.children}</List>
    </Menu>
  );
};

export default memo(NavBar);
