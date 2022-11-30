import { ErrorMessage } from "@hookform/error-message";
import React, {
  ChangeEventHandler,
  forwardRef,
  InputHTMLAttributes,
} from "react";
import { DeepMap, FieldError } from "react-hook-form";
import { Message, TextField } from "./styles";

interface Props {
  label?: string;
  type?: string;
  name?: string;
  style?: React.CSSProperties | undefined;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  id?: string;
  required?: boolean;
  inputColor?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  idInput?: string;
  value?: string | number | readonly string[] | undefined;
  errors?: DeepMap<Record<string, any>, FieldError>;
  errorMessage?: string;
  defaultValue?: string | number | readonly string[] | undefined;
  maxLength?: number;
  disabled?: boolean;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  props,
  ref
) => {
  return (
    <TextField inputColor={props.inputColor} id={props.id} style={props.style}>
      <input
        {...props.inputProps}
        id={props.idInput}
        name={props.name}
        type={props.type}
        autoComplete=""
        onChange={props.onChange}
        value={props.value}
        disabled={props.disabled}
        required={true}
        ref={ref}
        defaultValue={props.defaultValue}
        onClick={props.onClick}
        maxLength={props.maxLength}
      />
      <label placeholder={props.label + (props.required ? " *" : "")} />
      {props.errors && (
        <ErrorMessage
          errors={props.errors}
          name={props.name || ""}
          render={() => <Message>{props.errorMessage}</Message>}
        />
      )}
    </TextField>
  );
};

export default forwardRef(Input);
