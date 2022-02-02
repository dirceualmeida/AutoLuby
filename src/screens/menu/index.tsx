import React, { useEffect, useState } from "react";
import { Title, Subtitle } from "./styles";
import { useAuth } from "../../hooks/auth-context";
import Card from "../../components/card";
import SoldCarsImage from '../../img/img-sold-cars.png';
import AllCars from "../../img/img-all-cars.png";
import Employees from "../../img/img-employees.png";
import DashboardWrapper from "../../components/dashboard-wrapper";
import api from "../../services/api";

const Menu: React.FC = () => {
  const { user } = useAuth();
  const token = localStorage.getItem('@AutoLuby:token');
  const [vehicleRecords, setVehiclesRecords] = useState([]);
  const [employeesRecords, setEmployeesRecords] = useState([]);

  useEffect(()=>{
    api.get('/vehicles', {
      headers: { Authorization: `Bearer ${token}` }
    }).then((response)=> { 
      setVehiclesRecords(response.data.totalRecords);
    })
  },[])

  useEffect(()=>{
    api.get('/employees', {
      headers: { Authorization: `Bearer ${token}` }
    }).then((response)=> { 
      setEmployeesRecords(response.data.totalRecords);
    })
  },[])


    return (
      <DashboardWrapper>
        <Title>
          Bem vindo,
          {' '}
          {user.name}
        </Title>
        <Subtitle>
          Menu
        </Subtitle>
        <Card 
          title="Veículos reservados e vendidos" 
          subtitle="Veículos reservados e vendidos por você" 
          dataNumber={vehicleRecords}
          dataName="VEÍCULOS"
          cardPicture={SoldCarsImage}
          to="/ourvehicles"
        />
        <Card 
          title="Listagem geral de veículos" 
          subtitle="Listagem de veículos de toda a empresa" 
          dataNumber={user.vehicles.length}
          dataName="VEÍCULOS"
          cardPicture={AllCars}
          to="/vehicles"
        />
        <Card 
          title="Funcionários da empresa" 
          subtitle="Listagem de todos funcionários da empresa" 
          dataNumber={employeesRecords}
          dataName="FUNCIONÁRIOS"
          cardPicture={Employees}
          to="/employees"
        />
      </DashboardWrapper>  
    );
} 

export default Menu;