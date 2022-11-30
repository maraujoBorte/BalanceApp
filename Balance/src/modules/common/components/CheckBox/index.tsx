import React, { ChangeEventHandler, memo } from "react";
import { CheckBoxLabel, Icon, Input, Label, Span } from "./style";
import _uniqueId from "lodash/uniqueId";

interface Props {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  width?: string;
  height?: string;
  label?: string;
}

const CheckBox: React.FC<Props> = (props) => {
  const id = _uniqueId("checkbox-");

  return (
    <>
      <Input onChange={props.onChange} id={id} name={id} />
      <Label htmlFor={id}>
        <Span>
          <Icon width={props.width} height={props.height} viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </Icon>
        </Span>
        <CheckBoxLabel>{props.label}</CheckBoxLabel>
      </Label>
    </>
  );
};

export default memo(CheckBox);
