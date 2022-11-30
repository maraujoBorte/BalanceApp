import React from "react";

interface Props {
  color?: string;
  height?: string;
  width?: string;
  style?: React.CSSProperties | undefined;
}
const Database: React.FC<Props> = (props) => {
  return (
    <svg
      width={props.width}
      fill={props.color}
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" />
    </svg>
  );
};

const defaultProps: Props = {
  width: "24",
  height: "24",
};

Database.defaultProps = defaultProps;

export default Database;
