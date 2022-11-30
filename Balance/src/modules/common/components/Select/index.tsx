import React, { memo } from "react";
import {
    ActionMeta,
  default as ReactSelect,
  GroupBase,
  OptionsOrGroups,
} from "react-select";

interface SelectProps {
  onChange: ((newValue: any, actionMeta: ActionMeta<any>) => void) | undefined;
  defaultValue: any;
  options?: OptionsOrGroups<any, GroupBase<any>> | undefined;
}

const Select: React.FC<SelectProps> = (props) => {
  return (
    <ReactSelect
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          lineHeight: "2.50em",
          marginBottom: "7px",
        }),
      }}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      options={props.options}
    />
  );
};

export default memo(Select);
