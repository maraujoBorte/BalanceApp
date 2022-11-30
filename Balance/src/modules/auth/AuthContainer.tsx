import React, { ReactNode, useState } from "react";
import Header from "../common/components/Header";
import { AuthArea, AuthGrid } from "./styles";
import Container from "../common/components/Container";

interface Props {
  children?: ReactNode;
}

const AuthContainer: React.FC<Props> = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <AuthGrid>
      <Header
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        displayMenu={displayMenu}
        setDisplayMenu={setDisplayMenu}
        showMenu={false}
      />
      <AuthArea>
        <Container
          style={{ height: "100%", display: "flex", alignItems: "center" }}
          maxWidth="500px"
        >
          {children}
        </Container>
      </AuthArea>
    </AuthGrid>
  );
};

// maxWidth="600px"

export default AuthContainer;
