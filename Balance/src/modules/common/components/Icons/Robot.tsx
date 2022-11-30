import React from "react";

interface Props {
  color?: string;
  height?: string;
  width?: string;
  style?: React.CSSProperties | undefined;
}
const Robot: React.FC<Props> = (props) => {
  return (
    <svg
      style={props.style}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 128.000000 128.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
        fill={props.color}
        stroke="none"
      >
        <path
          d="M600 1210 c-27 -27 -25 -64 5 -88 20 -16 25 -29 25 -66 l0 -46 -99 0
 c-72 0 -102 -4 -110 -14 -8 -9 -11 -70 -9 -197 l3 -184 70 -5 c68 -5 70 -6 73
 -33 3 -27 4 -27 82 -27 78 0 79 0 82 27 3 27 5 28 73 33 l70 5 3 189 c2 145
 -1 191 -10 198 -7 4 -57 8 -110 8 l-98 0 0 43 c0 34 6 48 25 65 30 26 33 72 7
 95 -25 23 -58 21 -82 -3z m-5 -294 c22 -33 5 -66 -33 -66 -49 0 -69 42 -36 74
 23 23 51 20 69 -8z m163 12 c7 -7 12 -21 12 -33 0 -12 -5 -26 -12 -33 -28 -28
 -78 -7 -78 33 0 12 5 26 12 33 7 7 21 12 33 12 12 0 26 -5 33 -12z m-178 -204
 l0 -55 -32 3 c-30 3 -33 6 -36 42 -5 53 3 66 38 66 30 0 30 0 30 -56z m90 1
 c0 -54 0 -55 -30 -55 -30 0 -30 1 -30 55 0 54 0 55 30 55 30 0 30 -1 30 -55z
 m95 0 c0 -49 -1 -50 -32 -53 l-33 -3 0 56 0 56 33 -3 c31 -3 32 -4 32 -53z"
        />
        <path
          d="M325 898 c-45 -41 -55 -90 -30 -142 10 -20 31 -44 46 -52 l29 -15 0
 121 c0 66 -2 120 -5 120 -3 0 -21 -15 -40 -32z"
        />
        <path
          d="M910 812 c0 -60 3 -111 6 -115 10 -10 54 24 70 54 27 53 9 135 -35
 159 -38 20 -41 13 -41 -98z"
        />
        <path d="M410 322 l0 -182 233 2 232 3 0 178 0 178 -233 2 -232 2 0 -183z" />
        <path
          d="M280 275 l0 -225 60 0 c57 0 60 1 60 25 0 16 -6 25 -15 25 -13 0 -15
 29 -15 200 l0 200 -45 0 -45 0 0 -225z"
        />
        <path
          d="M920 304 c0 -187 -1 -196 -20 -201 -13 -3 -20 -14 -20 -29 0 -23 3
 -24 60 -24 l60 0 0 225 0 225 -40 0 -40 0 0 -196z"
        />
      </g>
    </svg>
  );
};

const defaultProps: Props = {
  width: "24",
  height: "24",
};

Robot.defaultProps = defaultProps;

export default Robot;
