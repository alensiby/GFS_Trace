import React, { useState } from "react";
import MaterialTable from "material-table";
import { Checkbox } from "semantic-ui-react";
import '../../Pages.css';
import CreateIcon from '@mui/icons-material/Create';

import {Icon} from 'semantic-ui-react';
import {
    vettreatmentData_withoutcomplete,
    vettreatmentData_withcomplete,
} from "../../../../Data/VetTreatmentData";

export default function VetTreatment() {
  const [selected, toggleselected] = useState(false);
  
  const columns = [
    {
      title: "Status",
      field: "status",
     
     
      lookup: { '0': 'Raised',
      '1': 'Raised and Assigned',
      '2': 'In Progress',
      '3': 'On Hold',
      '4': 'Completed',
      } ,
      render: rowData => {
        switch (rowData.status) {
        case '0':
                return <Icon name='blue circle outline' size='large'/>
        case '4':
                return <Icon name='green circle' size='large'/>
        case '1':
                return <Icon name='blue circle'size='large'/>
        case '3':
               return <Icon name='red circle'size='large'/>
        case '2':
               return <Icon name='orange circle'size='large'/>
      default:
        return <></>
          }
        }

  
},

    
    { title: "Approved", field: "approved",lookup: { 'no': 'No',
    'yes': 'Yes'}
   },
    { title: "Description", field: "description" },
        
{ title: "Livestock", field: "livestock",  

lookup:{
    'cattle': "Cattle" ,
    'bulls': "Bulls" ,
    'sheep': "Sheep" ,
    'horses': "Horses" ,
    'chickens': "Chickens" ,
    'pigs': 'Pigs' ,
    'deer': 'Deer' ,
    'goats': 'Goats' ,
    'llamas': 'Llamas' ,
    'Bees': 'Bees' ,
}
},
{ title: "Product", field: "product" },

    { title: "Scheduled Date", field: "scheduleddate", type:"date", filtering: false },
    { title: "Started", field: "started",lookup: { 'no': 'No',
    'yes': 'Yes'} },
    { title: "Completed", field: "completed", lookup: { 'no': 'No',
    'yes': 'Yes'} },
    
  ];
 
  return (
    <div  className= "table-size">
    
    <div className= "subheader">
             
        <h1 style={{"color": "black", "margin-bottom":"0px"}}>Vet Treatments </h1><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      
        <div className="toggle-switch">
          <Checkbox
            toggle
            onClick={() => toggleselected(!selected)}
            checked={selected}
          />
        </div>
        <div className="completed">Show Completed</div>
      </div>

      <div className="equipment-table">
        <MaterialTable
          columns={columns}
          data={selected ? vettreatmentData_withcomplete : vettreatmentData_withoutcomplete}
          editable={{
            
            onRowUpdate:(newRow,oldRow)=> new Promise(()=>{}),
            onRowDelete:(selectedRow)=> new Promise(()=>{})
          }}
          options={{
            showTitle: false,
            paging: true,
            pageSizeOptions: [2, 5, 10, 15, 20],
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            filtering: true,
            actionsColumnIndex:-1
          }}
          icons={{
          
            
            Edit: () => <CreateIcon color="action" />,
           
          }}
        ></MaterialTable>
      </div>
    </div>
  );
}