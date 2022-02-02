import React, { Children } from "react";
import { Container, ContainerWrapper, PageTitle } from "./styles";
import Header from "../header";

interface DashboardWrapperProps{
  pageTitle?: string
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({children, pageTitle}) => {
  return (
    <Container>
      <Header/>
      <ContainerWrapper>
      {pageTitle ? <PageTitle> {pageTitle} </PageTitle> : false}
        {children}
      </ContainerWrapper>
    </Container>
  );
} 

export default DashboardWrapper;