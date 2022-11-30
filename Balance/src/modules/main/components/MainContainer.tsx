import React, { ReactNode, useState } from "react";
import Container from "../../common/components/Container";
import Header from "../../common/components/Header";
import NavBar from "./NavBar";
import { MainArea, MainGrid } from "./styles";

interface Props {
  children?: ReactNode;
}

const MainContainer: React.FC<Props> = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <MainGrid>
      <Header
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        displayMenu={displayMenu}
        setDisplayMenu={setDisplayMenu}
        showMenu={true}
      />
      <NavBar mobileMenu={mobileMenu} displayMenu={displayMenu} />
      <MainArea>
        <Container maxWidth="100%">{children}</Container>
      </MainArea>
    </MainGrid>
  );
};

export default MainContainer;
