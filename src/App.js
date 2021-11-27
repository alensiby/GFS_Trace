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
          </Routes>
          
          </Structure>       
         
      </Router>
    );
  }
}

export default App;
