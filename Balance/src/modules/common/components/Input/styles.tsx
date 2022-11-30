import styled from "styled-components";

interface TextFielProps {
  inputColor?: string;
  errors?: any;
}

export const Message = styled.p`
  margin-bottom: 10px;
  font-size: 1.4rem;
  color: red;

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
`;

export const TextField = styled.div<TextFielProps>`
  padding-top: 10px;

  input {
    box-sizing: border-box;
    width: 100%;
    margin: 0 0 1em;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: ${(p) => p.inputColor};
    resize: none;
    outline: none;
    padding: 18.5px 14px;
  }

  input[required]:focus {
    border-color: #3f51b5;
  }

  input[required]:focus + label[placeholder]:before {
    color: #3f51b5;
  }
  input[required]:focus + label[placeholder]:before,
  input[required]:valid + label[placeholder]:before {
    transition-duration: 0.2s;
    transform: translate(0, -1.75em) scale(0.9, 0.9);
  }
  /* input[required]:invalid + label[placeholder]:before {
    content: attr(placeholder);
  } */
  input[required] + label[placeholder] {
    display: block;
    pointer-events: none;
    line-height: 1.25em;
    margin-top: calc(-3em - 2px);
    margin-bottom: calc((3em - 1em) + 2px);
  }
  input[required] + label[placeholder]:before {
    content: attr(placeholder);
    display: inline-block;
    margin: 0 calc(0.1em + 2px);
    padding: 0 3px;
    color: #898989;
    white-space: break-spaces;
    transition: 0.3s ease-in-out;
    background-image: linear-gradient(to bottom, #fff, #fff);
    background-size: 100% 5px;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
