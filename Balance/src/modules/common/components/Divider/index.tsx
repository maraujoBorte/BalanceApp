import React, { memo } from "react";
import { DividerStyle } from "./styles";

interface Props {
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
}

const Divider: React.FC<Props> = (props) => {
  return <DividerStyle style={props.style} className={props.className} />;
};

export default memo(Divider);
