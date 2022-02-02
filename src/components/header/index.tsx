import React from "react";
import { Container, InnerContainer } from "./styles";
import Button from '../button';
import LogoAutoluby from "../logo/logo";
import { useAuth } from "../../hooks/auth-context";
import { useHistory } from "react-router-dom";


const Header: React.FC= () => {
  const { signOut } = useAuth();
  const history = useHistory();
    return (
      <Container>
        <InnerContainer>
          <LogoAutoluby />
          <Button style={{width: 75}} onClick={()=>{ history.push(`/`); signOut(); }}>Sair</Button>
        </InnerContainer>
      </Container>
    );
} 

export default Header;