import React, { memo } from "react";

interface Props {
  color?: string;
  height?: string;
  width?: string;
  style?: React.CSSProperties | undefined;
}

const BurguerMenu: React.FC<Props> = (props) => {
  return (
    <svg
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      height={props.height}
      viewBox="0 0 24 24"
      width={props.width}
      fill={props.color}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
};

const defaultProps: Props = {
  width: "24",
  height: "24",
};

BurguerMenu.defaultProps = defaultProps;

export default memo(BurguerMenu);
