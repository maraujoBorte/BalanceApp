import React from "react";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import Input from "../Input";

const defaultMaskOptions = {
  prefix: "R$",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ",",
  allowDecimal: true,
  decimalSymbol: ".",
  decimalLimit: 2,
  integerLimit: 7,
  allowNegative: false,
  allowLeadingZeroes: false,
};

interface CurrencyInputProps {
  Id?: string | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  label?: string;
  name?: string;
  defaultValue?: string | number | readonly string[] | undefined;
}

const CurrencyInput: React.FC<CurrencyInputProps> = (props) => {
  const currencyMask = createNumberMask(defaultMaskOptions);

  return (
    <MaskedInput
      mask={currencyMask}
      id={props.Id}
      render={(ref, s) => (
        <Input
          {...s}
          ref={(input) => ref(input!)}
          idInput={props.Id}
          label={props.label}
          name={props.name}
          type="text"
          defaultValue={props.defaultValue}
          onChange={props.onChange}
        />
      )}
    />
  );
};

export default CurrencyInput;
