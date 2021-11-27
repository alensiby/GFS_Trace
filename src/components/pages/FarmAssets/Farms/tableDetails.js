import React from 'react';
import PaddockTable from './PaddockTable';
import FueltankTable from './FueltankTable';
import SiloTable from './SiloTable';

export default function TableDetails(props) {
  const dataValue = props.dataValue;
    switch (dataValue) {
    case 'PADDOCK':
            return <PaddockTable/>
    case 'FUEL TANKS':
            return <FueltankTable/>
    case 'SILOS':
            return <SiloTable/>
    
     default:
         return( <></>  ) ;
    }
}
