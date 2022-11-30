import React, {
  FormEventHandler,
  memo,
  MouseEventHandler,
  ReactNode,
} from "react";
import { CustomButton, LabelButton } from "./style";

interface Props {
  children?: ReactNode;
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  onSubmit?: FormEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
  active?: boolean;
}

const Button: React.FC<Props> = (props) => {
  return (
    <CustomButton
      onSubmit={props.onSubmit}
      onClick={props.onClick}
      className={props.className}
      style={props.style}
      type={props.type}
      active={props.active ?? true}
    >
      <LabelButton>{props.children}</LabelButton>
    </CustomButton>
  );
};

export default memo(Button);
