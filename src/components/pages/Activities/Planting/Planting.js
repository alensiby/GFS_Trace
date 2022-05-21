import React, { useState } from "react";
import MaterialTable from "material-table";
import { Checkbox } from "semantic-ui-react";
import '../../Pages.css';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import {Icon} from 'semantic-ui-react';
import {
    plantingData_withoutcomplete,
    plantingData_withcomplete,
} from "../../../../Data/PlantingData";

import farm from "../../../../Data/farmData";

export default function Planting() {
  const [selected, toggleselected] = useState(false);
  
  var obj = farm.reduce(function(acc, cur, i) {
    acc[cur.farm_id] = cur.value;

    return acc;
  }, {});
  console.log(obj);
  
  
  const columns = [
    {
      title: "Farm", field: "farm", lookup: obj, 
    },
    {
      title: "Status",
      field: "status",
     
      lookup: { '0': 'Started',
      '1': 'In-progress',
      '2': 'Completed',
      '3': 'Cancelled',
     
      } ,
      render: rowData => {
        switch (rowData.status) {
        case '0':
                return <Icon name='blue circle outline' size='large'/>
        case '2':
                return <Icon name='green circle' size='large'/>
        case '1':
                return <Icon name='blue circle'size='large'/>
        case '3':
               return <Icon name='red circle'size='large'/>
        
      default:
        return <></>
          }
        }

  
},   
{ title: "Contract", field: "contract",  
lookup: { '0': 'No',
'1': 'Yes'}
},
    
    { title: "Approved", field: "approved",lookup: { '0': 'No',
    '1': 'Yes'}
    
   },
    { title: "Description", field: "description" },
    { title: "Due Date", field: "duedate", type:"date", filtering: false },
    { title: "Started", field: "started",lookup: { '0': 'No',
    '1': 'Yes'}
    },
    { title: "Completed", field: "completed", lookup: { '0': 'No',
    '1': 'Yes'}
    },
    
  ];
 
 
  return (
    <div  className= "table-size">
    
    <div className= "subheader">
             
        <h1 style={{"color": "black", "margin-bottom":"0px"}}>Planting </h1><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      
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
          data={selected ? plantingData_withcomplete : plantingData_withoutcomplete}
          editable={{
            onRowAdd:(newRow)=> new Promise((resolve,reject)=>{}),
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
            Add: () => <AddCircleRoundedIcon fontSize="large" color="primary" />,
            Edit: () => <CreateIcon color="action" />,
            Delete: () => <DeleteIcon color="action" />
           
          }}
        ></MaterialTable>
      </div>
    </div>
  );
}
