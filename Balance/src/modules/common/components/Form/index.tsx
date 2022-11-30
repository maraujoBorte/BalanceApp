import React, { FormEventHandler, ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { FormStyle } from "./styles";

interface Props {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const Form: React.FC<Props> = (props) => {
  return (
    <FormStyle noValidate onSubmit={props.onSubmit} className={props.className} style={props.style}>
      {props.children}
    </FormStyle>
  );
};

export default Form;
