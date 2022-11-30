import React, { memo } from "react";

interface Props {
  color?: string;
  height?: string;
  width?: string;
  style?: React.CSSProperties | undefined;
}

const AddIcon: React.FC<Props> = (props) => {
  return (
    <svg
      width={props.width}
      fill={props.color}
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
    </svg>
  );
};

const defaultProps: Props = {
  width: "15",
  height: "15",
};

AddIcon.defaultProps = defaultProps;

export default memo(AddIcon);
