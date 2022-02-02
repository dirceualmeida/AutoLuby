import React from "react";
import DashboardWrapper from "../../components/dashboard-wrapper";
import App from "../../components/vehicles-table"

const Vehicles: React.FC = ({}) => {
 
    return (
      <DashboardWrapper pageTitle="Todos Veículos">
        <App/>
      </DashboardWrapper>
    );
} 

export default Vehicles;