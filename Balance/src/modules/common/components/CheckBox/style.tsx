import styled from "styled-components";

interface IconProps {
  width?: string;
  height?: string;
}

export const Icon = styled.svg<IconProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const defaultIconProps: IconProps = {
  width: "12",
  height: "10",
};

Icon.defaultProps = defaultIconProps;

export const Span = styled.span`
  display: inline-block;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
  

  :first-child {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 3px;
    transform: scale(1);
    vertical-align: middle;
    border: 1px solid #9098a9;
    transition: all 0.2s ease;
  }

  :first-child ${Icon} {
    position: absolute;
    top: 3px;
    left: 2px;
    fill: none;
    stroke: #ffffff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }

  :first-child:before {
    content: "";
    width: 100%;
    height: 100%;
    background: #3f51b5;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
  }

  :last-child {
    padding-left: 8px;
  }
`;

export const Label = styled.label`
  margin: auto;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;

  :hover ${Span}:first-child {
    border-color: #3f51b5;
  }
`;

export const CheckBoxLabel = styled.span`
  padding-left: 20px;
`;

export const Input = styled.input.attrs({ type: "checkbox" })`
  display: none;

  :checked + ${Label} span:first-child {
    background: #3f51b5;
    border-color: #3f51b5;
    animation: wave 0.4s ease;
  }
  :checked + ${Label} span:first-child svg {
    stroke-dashoffset: 0;
  }
  :checked + ${Label} span:first-child:before {
    transform: scale(3.5);
    opacity: 0;
    transition: all 0.6s ease;
  }

  @keyframes wave {
    50% {
      transform: scale(0.9);
    }
  }
`;
