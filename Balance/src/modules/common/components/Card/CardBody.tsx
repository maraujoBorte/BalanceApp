import React, { memo, ReactNode } from "react";
import { PatternPadding } from "./styles";

interface Props {
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  children?: ReactNode;
}

const CardBody: React.FC<Props> = (props) => {
  return (
    <PatternPadding className={props.className} style={props.style}>
      {props.children}
    </PatternPadding>
  );
};

export default memo(CardBody);
