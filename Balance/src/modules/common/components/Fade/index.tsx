import React, { memo, ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { CustomFade } from "./styles";

interface Props {
  variant:
    | "fade-in"
    | "fade-in-bottom"
    | "fade-in-top"
    | "fade-in-left"
    | "fade-in-right"
    | "fade-out"
    | "fade-out-top"
    | "fade-out-bottom"
    | "fade-out-left"
    | "fade-out-right";
  active: boolean;
  children?: ReactNode;
  styles?: CSSProperties;
}

const Fade: React.FC<Props> = (props) => {
  return (
    <CustomFade
      style={props.styles}
      active={props.active}
      variant={props.variant}
    >
      {props.children}
    </CustomFade>
  );
};

export default memo(Fade);
