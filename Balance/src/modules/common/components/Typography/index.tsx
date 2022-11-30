import React, { memo, ReactNode } from "react";
import { CSSProperties } from "styled-components";

interface Props {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  gutterBottom?: boolean;
  children?: ReactNode;
}

const localStyle: CSSProperties = {
  marginBottom: "0.35em",
};

const Typography: React.FC<Props> = (props) => {
  switch (props.variant) {
    case "h1":
      return (
        <h1 style={!!props.gutterBottom ? localStyle : undefined}>
          {props.children}
        </h1>
      );
    case "h2":
      return (
        <h2 style={!!props.gutterBottom ? localStyle : undefined}>
          {props.children}
        </h2>
      );
    case "h3":
      return (
        <h3 style={!!props.gutterBottom ? localStyle : undefined}>
          {props.children}
        </h3>
      );
    case "h4":
      return (
        <h4 style={!!props.gutterBottom ? localStyle : undefined}>
          {props.children}
        </h4>
      );
    case "h5":
      return (
        <h5 style={!!props.gutterBottom ? localStyle : undefined}>
          {props.children}
        </h5>
      );
    case "h6":
      return (
        <h6 style={!!props.gutterBottom ? localStyle : undefined}>
          {props.children}
        </h6>
      );
  }
};

const defaultProps: Props = {
  gutterBottom: false,
  variant: "h4",
};

Typography.defaultProps = defaultProps;

export default memo(Typography);
