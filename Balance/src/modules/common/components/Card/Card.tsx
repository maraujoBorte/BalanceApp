import React, { ReactNode, memo } from "react";
import { CardStruct } from "./styles";

interface Props {
  children?: ReactNode;
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  border?: "none" | "block";
  backgroundColor?: string;
}

const Card: React.FC<Props> = (props) => {
  return (
    <CardStruct {...props} className={props.className} style={props.style}>
      {props.children}
    </CardStruct>
  );
};

const defaultProps: Props = {
  border: "block",
  backgroundColor: "#ffffff",
};

Card.defaultProps = defaultProps;

export default memo(Card);
