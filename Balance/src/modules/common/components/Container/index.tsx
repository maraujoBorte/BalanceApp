import React, { memo, ReactNode } from "react";
import { CustomContainer } from "./style";

interface Props {
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  children?: ReactNode;
  maxWidth?: string;
}

const Container: React.FC<Props> = (props) => {
  return (
    <CustomContainer
      maxWidth={props.maxWidth}
      className={props.className}
      style={props.style}
    >
      {props.children}
    </CustomContainer>
  );
};

const defaultProps: Props = {
  maxWidth: "1200px",
};

Container.defaultProps = defaultProps;

export default memo(Container);
