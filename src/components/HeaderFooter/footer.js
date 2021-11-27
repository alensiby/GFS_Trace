
import React from 'react';
import WebIcon from 'mdi-react/WebIcon';
import YoutubeIcon from 'mdi-react/YoutubeIcon';
import "./footer.css";
import FacebookIcon from 'mdi-react/FacebookIcon';
import TwitterIcon from 'mdi-react/TwitterIcon';
//import EyeIcon from 'mdi-react/EyeIcon';

export default function Footer() {
  return(
   
  <footer className="v-footer" data-booted="true">
   {  /*  <span small="" style={{"margin-left": "50px"}}>Icons by{' '} 
  <a target="_blank" href="https://icons8.com/">Icons8</a>
      </span>*/}
  
        <div className="spacer"></div>
       
      <div style={{"margin-right": "20px"}}>
    <a href="" target="_blank" className="mr-1 v-btn-footer v-btn--icon v-btn--round theme--light v-size--small">
      <span className="v-btn__content"><WebIcon size={24} /></span></a>
      
     <a href="" target="_blank" className="mr-1 v-btn-footer v-btn--icon v-btn--round theme--light v-size--small"><span className="v-btn__content"><FacebookIcon size={24} /></span></a>
      
      <a href="" target="_blank" className="mr-1 v-btn-footer v-btn--icon v-btn--round theme--light v-size--small"><span className="v-btn__content"><TwitterIcon size={24} /></span></a>
      
      <a href="" target="_blank" className="mr-1 v-btn-footer v-btn--icon v-btn--round theme--light v-size--small"><span className="v-btn__content"><YoutubeIcon size={24} /></span></a>
      
      <span style={{"margin-left": "10px", "align-items": "center", "color": "rgb(79, 79, 79)", "top": "0"}}> © 2021 
    
      </span>
    </div>
     
   </footer>
     
      );
}

