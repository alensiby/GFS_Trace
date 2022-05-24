import React from "react";
import farmsimple from "../../images/logo.jpg";
import "./header.css";
import {Trans} from 'react-i18next';

export default function Header() {
  return (
    <div className="header">
      <img className="main-logo" src={farmsimple} width="50" height="50" />
      <div class="logoName" style={{ color: "rgb(79, 79, 79)" }}>
        <b>GFS</b> Trace
      </div>
      <div className="spacer"></div>
      <span className="userDetails">Ashish Abhilash </span> |
      
     
      <button className="logout"><Trans i18nKey="header.logout"> Logout
        </Trans></button>
    </div>
  );
}
