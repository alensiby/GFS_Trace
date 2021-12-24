import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Structure from "./components/Layout/Structure";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Job from "./components/pages/Job/job";
import Equipments from "./components/pages/FarmAssets/Equipments/Equipments";
import Farms from "./components/pages/FarmAssets/Farms/farms";
import Chemicals from "./components/pages/FarmAssets/Chemicals/Chemical";
import Users from "./components/pages/FarmAssets/Users/Users";
import Fertiliser from "./components/pages/FarmAssets/Fertiliser/FertiliserTable";
import Livestock from "./components/pages/FarmAssets/Livestock/LiveStock";
import WaterLicence from "./components/pages/FarmAssets/WaterLicence/WaterLicence";
import Nozzles from "./components/pages/FarmAssets/Nozzles/Nozzles";
//import InventoryChemical from "./components/pages/Inventory/InventoryChemical/InventoryChemical";

class App extends Component {
  render() {
    return (
      <Router >
        <Structure>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/Jobs" element={<Job/>}/>
            <Route path="/Equipments" element={<Equipments/>}/>
            <Route path="/Farms" element={<Farms/>}/>
            <Route path="/Chemicals" element={<Chemicals/>}/>
            <Route path="/Users" element={<Users/>}/>
            <Route path="/Fertiliser" element={<Fertiliser/>}/>
            <Route path="/Nozzles" element={<Nozzles/>}/>
            <Route path="/Livestock" element={<Livestock/>}/>
            <Route path="/WaterLicence" element={<WaterLicence/>}/>
          
           
          </Routes>
          
          </Structure>       
         
      </Router>
    );
  }
}

export default App;
