import React from "react";
import {Switch} from "react-router-dom";
import Route from "./Router";
import Login from "../screens/login";
import Menu from "../screens/menu";
import Vehicles from "../screens/vehicles";
import OurVehicles from "../screens/our-vehicles";
import Employees from "../screens/employees";


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />

        
    <Route path="/menu" component={Menu} isPrivate />
    <Route path="/vehicles" component={Vehicles} isPrivate/>
    <Route path="/ourvehicles" component={OurVehicles} isPrivate/>
    <Route path="/employees" component={Employees} isPrivate/>
  </Switch>
)

export default Routes;