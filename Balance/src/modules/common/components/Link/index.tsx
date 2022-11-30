import React, { ReactNode } from "react";
import { LinkStyle } from "./styles";

interface Props {
  children?: ReactNode;
  href?: string;
  color?: string;
}

const Link: React.FC<Props> = (props) => {
  return (
    <LinkStyle color={props.color} href={props.href}>
      {props.children}
    </LinkStyle>
  );
};

const defaultProps: Props = {
  color: "#3f51b5",
};

Link.defaultProps = defaultProps;

export default Link;
