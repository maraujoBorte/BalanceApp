import styled, { css } from "styled-components";

interface CustomFadeProps {
  variant: string;
  active: boolean;
}

export const CustomFade = styled.div<CustomFadeProps>`
  width: 100%;
  height: 100%;

  ${(props) =>
    props.active &&
    css`
      ${props.variant === "fade-in" &&
      css`
        -webkit-animation: fade-in 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        animation: fade-in 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

        @-webkit-keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}

      ${props.variant === "fade-in-bottom" &&
      css`
        -webkit-animation: fade-in-bottom 0.6s
          cubic-bezier(0.39, 0.575, 0.565, 1) both;
        animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

        @-webkit-keyframes fade-in-bottom {
          0% {
            -webkit-transform: translateY(50px);
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fade-in-bottom {
          0% {
            -webkit-transform: translateY(50px);
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}

      ${props.variant === "fade-in-top" &&
      css`
        -webkit-animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
          both;
        animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

        @-webkit-keyframes fade-in-top {
          0% {
            -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fade-in-top {
          0% {
            -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}

      ${props.variant === "fade-in-left" &&
      css`
        -webkit-animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
          both;
        animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

        @-webkit-keyframes fade-in-left {
          0% {
            -webkit-transform: translateX(-50px);
            transform: translateX(-50px);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fade-in-left {
          0% {
            -webkit-transform: translateX(-50px);
            transform: translateX(-50px);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}

      ${props.variant === "fade-in-right" &&
      css`
        -webkit-animation: fade-in-right 0.6s
          cubic-bezier(0.39, 0.575, 0.565, 1) both;
        animation: fade-in-right 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

        @-webkit-keyframes fade-in-right {
          0% {
            -webkit-transform: translateX(50px);
            transform: translateX(50px);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fade-in-right {
          0% {
            -webkit-transform: translateX(50px);
            transform: translateX(50px);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}

      ${props.variant === "fade-out" &&
      css`
        -webkit-animation: fade-out 1s ease-out both;
        animation: fade-out 1s ease-out both;

        @-webkit-keyframes fade-out {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        @keyframes fade-out {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}

      ${props.variant === "fade-out-top" &&
      css`
        -webkit-animation: fade-out-top 0.7s
          cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: fade-out-top 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

        @-webkit-keyframes fade-out-top {
          0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
            opacity: 0;
          }
        }
        @keyframes fade-out-top {
          0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
            opacity: 0;
          }
        }
      `}

      ${props.variant === "fade-out-bottom" &&
      css`
        -webkit-animation: fade-out-bottom 0.7s
          cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: fade-out-bottom 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          both;

        @-webkit-keyframes fade-out-bottom {
          0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            -webkit-transform: translateY(50px);
            transform: translateY(50px);
            opacity: 0;
          }
        }
        @keyframes fade-out-bottom {
          0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            -webkit-transform: translateY(50px);
            transform: translateY(50px);
            opacity: 0;
          }
        }
      `}

      ${props.variant === "fade-out-left" &&
      css`
        -webkit-animation: fade-out-left 0.3s
          cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: fade-out-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

        @-webkit-keyframes fade-out-left {
          0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            -webkit-transform: translateX(-50px);
            transform: translateX(-50px);
            opacity: 0;
          }
        }
        @keyframes fade-out-left {
          0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            -webkit-transform: translateX(-50px);
            transform: translateX(-50px);
            opacity: 0;
          }
        }
      `}

      ${props.variant === "fade-out-right" &&
      css`
        -webkit-animation: fade-out-right 0.7s
          cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: fade-out-right 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

        @-webkit-keyframes fade-out-right {
          0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            -webkit-transform: translateX(50px);
            transform: translateX(50px);
            opacity: 0;
          }
        }
        @keyframes fade-out-right {
          0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            -webkit-transform: translateX(50px);
            transform: translateX(50px);
            opacity: 0;
          }
        }
      `}
    `}
`;
