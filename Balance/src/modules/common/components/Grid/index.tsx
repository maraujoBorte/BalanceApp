import React, { memo, ReactNode } from "react";
import { FlexBox } from "./styles";

interface Props {
  container?: boolean;
  item?: boolean;
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  children?: ReactNode;
}

const Grid: React.FC<Props> = (props) => {
  return (
    <FlexBox style={props.style} className={props.className} {...props}>
      {props.children}
    </FlexBox>
  );
};

export default memo(Grid);
