import React from "react";
import DashboardWrapper from "../../components/dashboard-wrapper";
import App2 from "../../components/our-vehicles-table";


const OurVehicles: React.FC = ({}) => {
 
    return (
      <DashboardWrapper pageTitle="Seus Veículos">
        <App2/>
      </DashboardWrapper>
    );
} 

export default OurVehicles;