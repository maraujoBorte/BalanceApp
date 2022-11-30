import React, { memo, ReactNode } from "react";
import { Category, PatternPadding } from "./styles";

interface Props {
  subheader?: string;
  title?: ReactNode | string;
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
}

const CardHeader: React.FC<Props> = (props) => {
  return (
    <PatternPadding style={props.style} className={props.className}>
      {typeof props.title === typeof String ? (
        <label> {props.title}</label>
      ) : (
        props.title
      )}
      <Category>
        <label>{props.subheader}</label>
      </Category>
    </PatternPadding>
  );
};

const defaultProps: Props = {
  subheader: "",
};

CardHeader.defaultProps = defaultProps;

export default memo(CardHeader);
