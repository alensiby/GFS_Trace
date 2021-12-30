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
import InventoryChemical from "./components/pages/Inventory/InventoryChemical/InventoryChemical";
//import Grain from "./components/pages/Inventory/Grain/Grain";
import Spraylogs from "./components/pages/Activities/Spraylogs/Spraylogs";
import Planting from "./components/pages/Activities/Planting/Planting";
import Spreading from "./components/pages/Activities/Spreading/Spreading";
import Harvest from "./components/pages/Activities/Harvest/Harvest";
import Grazing from "./components/pages/Activities/Grazing/Grazing";

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
            <Route path="/InventoryChemical" element={<InventoryChemical/>}/>
            <Route path="/Spraylogs" element={<Spraylogs/>}/>
            <Route path="/Planting" element={<Planting/>}/>
            <Route path="/Spreading" element={<Spreading/>}/>
            <Route path="/Harvest" element={<Harvest/>}/>
            <Route path="/Grazing" element={<Grazing/>}/>
          {/*<Route path="/Grain" element={<Grain/>}/>*/}
           
          </Routes>
          
          </Structure>       
         
      </Router>
    );
  }
}

export default App;
