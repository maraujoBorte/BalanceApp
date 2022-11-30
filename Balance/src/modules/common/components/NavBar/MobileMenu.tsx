import React, { memo, useEffect } from "react";
import _uniqueId from "lodash/uniqueId";
import { BackDrop, CustomMobileMenu, InputMenuMobile } from "./styles";
import BurguerMenu from "../Icons/BurguerMenu";
import useWindowSize from "../hooks/WindowSize";

interface Props {
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenu: boolean;
  displayMenu: boolean;
  setDisplayMenu: React.Dispatch<React.SetStateAction<boolean>>;
  colorIcon?: string;
  widthIcon?: string;
  heightIcon?: string;
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  labelProps?: {
    style?: React.CSSProperties | undefined;
    className?: string | undefined;
  };
}

const MobileMenu: React.FC<Props> = (props) => {
  const id = _uniqueId("mobile-menu-");
  const size = useWindowSize();

  function handleOnChangeCheckBox() {
    props.setDisplayMenu(true);

    setTimeout(() => {
      props.setMobileMenu(!props.mobileMenu);
    }, 0.1);
  }

  function handleOnClickBackDrop() {
    props.setMobileMenu(false);
    setTimeout(() => {
      props.setDisplayMenu(false);
    }, 50);
  }

  useEffect(() => {
    if (size.width > 1250) {
      props.setMobileMenu(false);
      props.setDisplayMenu(false);
    }
  }, [size, props]);

  return (
    <CustomMobileMenu style={props.style} className={props.className}>
      <BackDrop
        onClick={() => handleOnClickBackDrop()}
        showBackDrop={props.mobileMenu}
      ></BackDrop>
      <InputMenuMobile
        onChange={() => handleOnChangeCheckBox()}
        checked={props.mobileMenu}
        id={id}
      />
      <label {...props.labelProps} htmlFor={id}>
        <BurguerMenu
          height={props.heightIcon}
          width={props.widthIcon}
          color={props.colorIcon}
        />
      </label>
    </CustomMobileMenu>
  );
};

export default memo(MobileMenu);
