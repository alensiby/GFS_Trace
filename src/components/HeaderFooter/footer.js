
import React from 'react';
import WebIcon from 'mdi-react/WebIcon';
import YoutubeIcon from 'mdi-react/YoutubeIcon';
import "./footer.css";
import FacebookIcon from 'mdi-react/FacebookIcon';
import TwitterIcon from 'mdi-react/TwitterIcon';
//import EyeIcon from 'mdi-react/EyeIcon';

export default function Footer() {
  return(
       
       
      <div style={{"float": "right"}}>
    <a href="#" className="margin-one footer-button footer-button-icon footer-button-round button-color button-size-small">
      <span className="footer-icon"><WebIcon size={24} /></span></a>
      
     <a href="#" className="margin-one footer-button footer-button-icon footer-button-round button-color button-size-small"><span className="footer-icon"><FacebookIcon size={24} /></span></a>
      
      <a href="#" className="margin-one footer-button footer-button-icon footer-button-round button-color button-size-small"><span className="footer-icon"><TwitterIcon size={24} /></span></a>
      
      <a href="#" className="margin-one footer-button footer-button-icon footer-button-round button-color button-size-small"><span className="footer-icon"><YoutubeIcon size={24} /></span></a>
      
      <span style={{"margin-left": "10px", "align-items": "center", "color": "rgb(79, 79, 79)", "top": "0"}}> © 2021 
    
      </span>
    </div>
  
     
      );
}

