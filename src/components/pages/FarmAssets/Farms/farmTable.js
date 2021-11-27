import React, {useState} from 'react'
import { Segment } from 'semantic-ui-react';
import {Menu} from 'semantic-ui-react';
import TableDetails from './tableDetails'


export default function FarmTable()  {
    const [state, setState] = React.useState("PADDOCK"); 

      return (
        <div>
          <Menu pointing>
            <Menu.Item
              name='PADDOCK'
              active={state === 'PADDOCK'}
             color="green"
             onClick={() => setState("PADDOCK")}
            />
            <Menu.Item
              name='FUEL TANKS'
              active={state === 'FUEL TANKS'}
              onClick={() => setState("FUEL TANKS")}
              color="green"
            />
            <Menu.Item
              name='SILOS'
              active={state === 'SILOS'}
              onClick={() => setState("SILOS")}
              color="green"
            />
          
           
          </Menu>
          
         <TableDetails dataValue={state}/>
      <br></br>
         
        </div>
    );
  }
