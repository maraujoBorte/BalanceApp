import styled from "styled-components";

interface BoxTemplateProps {
  m?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  p?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  displayBox?: "flex" | "none" | "block";
  alignItems?: "flex-start" | "flex-end" | "center";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between";
  directionBox?: "row" | "column";
  bgcolor?: string;
  fullWidth?: boolean;
  width?: string | number;
  height?: string | number;
  borderRadius?: number;
  absolutePosition?: "absolute";
}

const localStyle: any = {
  Box: {
    width: "auto",
    zIndex: 0,
  },
  fullWidth: {
    width: "100%",
  },
  "display-flex": {
    display: "flex",
  },
  "display-none": {
    display: "none",
  },
  "display-block": {
    display: "block",
  },
  "align-flex-start": {
    alignItems: "flex-start",
  },
  "align-flex-end": {
    alignItems: "flex-end",
  },
  "align-center": {
    alignItems: "center",
  },
  "justify-flex-start": {
    justifyContent: "flex-start",
  },
  "justify-flex-end": {
    justifyContent: "flex-end",
  },
  "justify-center": {
    justifyContent: "center",
  },
  "justify-space-around": {
    justifyContent: "space-around",
  },
  "justify-space-between": {
    justifyContent: "space-between",
  },
  "direction-row": {
    flexDirection: "row",
  },
  "direction-column": {
    flexDirection: "column",
  },
};

export const BoxTemplate = styled.div<BoxTemplateProps>`
  margin: ${(props) => props.m && 8 * props.m + `px`};
  margin-top: ${(props) => props.mt && 8 * props.mt + `px`};
  margin-right: ${(props) => props.mr && 8 * props.mr + `px`};
  margin-bottom: ${(props) => props.mb && 8 * props.mb + `px`};
  margin-left: ${(props) => props.ml && 8 * props.ml + `px`};

  padding: ${(props) => props.p && 8 * props.p + `px`};
  padding-top: ${(props) => props.pt && 8 * props.pt + `px`};
  padding-right: ${(props) => props.pr && 8 * props.pr + `px`};
  padding-bottom: ${(props) => props.pb && 8 * props.pb + `px`};
  padding-left: ${(props) => props.pl && 8 * props.pl + `px`};

  width: ${(props) =>
    !props.fullWidth && props.width && props.width + `px !important`};
  height: ${(props) => props.height && props.height + `px !important`};

  background-color: ${(props) => props.bgcolor && props.bgcolor};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius + `px` : 0};

  position: ${(props) => props.absolutePosition && props.absolutePosition};

  ${localStyle.Box}
  ${(props) => !!props.alignItems && localStyle[`align-${props.alignItems}`]}
        ${(props) =>
    !!props.justifyContent && localStyle[`justify-${props.justifyContent}`]}
        ${(props) =>
    !!props.directionBox && localStyle[`direction-${props.directionBox}`]}
        ${(props) =>
    !!props.displayBox && localStyle[`display-${props.displayBox}`]}
     ${(props) => props.fullWidth && localStyle.fullWidth}
`;

const defaultIconProps: BoxTemplateProps = {
  fullWidth: true,
  displayBox: "flex",
};

BoxTemplate.defaultProps = defaultIconProps;
