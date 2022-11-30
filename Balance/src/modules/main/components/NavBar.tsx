import React from "react";
import Item from "../../common/components/NavBar/Item";
import NavComponent from "../../common/components/NavBar/Menu";
import Routes from "../../../routes/routes";
import { useHistory } from "react-router-dom";

import { NavArea } from "./styles";

interface Props {
  mobileMenu: boolean;
  displayMenu: boolean;
}

const NavBar: React.FC<Props> = (props) => {
  const history = useHistory();

  return (
    <NavArea>
      <NavComponent {...props}>
        {Routes.map((x, index) => {
          return (
            x.menuNav && (
              <Item
                key={index}
                onClick={() => history.push(x.layout + x.path)}
                Icon={x.icon}
              >
                {x.name}
              </Item>
            )
          );
        })}
      </NavComponent>
    </NavArea>
  );
};

export default NavBar;
