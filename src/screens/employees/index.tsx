import React from "react";
import DashboardWrapper from "../../components/dashboard-wrapper";
import App1 from "../../components/employees-table";

const Employees: React.FC = ({}) => {
 
    return (
      <DashboardWrapper pageTitle="Funcionários">
        <App1/>
      </DashboardWrapper>
    );
} 

export default Employees;