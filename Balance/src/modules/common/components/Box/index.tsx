import React, { memo } from "react";
import { ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { BoxTemplate } from "./styles";

interface Props {
  m?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  p?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  displayBox?: "flex" | "none" | "block";
  alignItems?: "flex-start" | "flex-end" | "center";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between";
  directionBox?: "row" | "column";
  bgcolor?: string;
  children?: ReactNode;
  fullWidth?: boolean;
  width?: number;
  height?: number;
  borderRadius?: number;
  absolutePosition?: "absolute";
  style?: CSSProperties;
}

const Box: React.FC<Props> = (props) => {
  if (props.displayBox === "none") return null;
  return (
    <BoxTemplate style={props.style} {...props}>
      {props.children}
    </BoxTemplate>
  );
};

export default memo(Box);
