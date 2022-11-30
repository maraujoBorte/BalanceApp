import React, { memo } from "react";
import { HeaderArea } from "./styles";
import Box from "../Box";
import MobileMenu from "../NavBar/MobileMenu";
import MoneyHeader from "../../../lotties-components/MoneyHeader";

interface Props {
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenu: boolean;
  displayMenu: boolean;
  setDisplayMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
}

const Header: React.FC<Props> = (props) => {
  return (
    <HeaderArea>
      <Box
        style={{ height: "100%", paddingLeft: "24px", paddingRight: "24px" }}
      >
        <MoneyHeader />
        {props.showMenu && (
          <MobileMenu
            colorIcon="white"
            style={{ marginLeft: "auto", alignItems: "center" }}
            {...props}
          />
        )}
      </Box>
    </HeaderArea>
  );
};

export default memo(Header);
