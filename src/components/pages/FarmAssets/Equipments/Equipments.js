import React, { useState } from "react";
import MaterialTable from "material-table";
import { Checkbox } from "semantic-ui-react";
import "./Equipment.css";
import '../../Pages.css';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import Export from '../../export.png';
import {
  equipmentData_archive,
  equipmentData_nonarchive,
} from "../../../../Data/EquipmentData";

export default function Equipments() {
  const [selected, toggleselected] = useState(false);
  const columns_non_archived = [
    {
      title: "Brand",
      field: "brand",
    },
    { title: "Name", field: "name" },
    { title: "Year", field: "year" },
    { title: "Serial No", field: "serialno" },
    { title: "Notes", field: "notes" },
    { title: "Fuelable", field: "fuelable" },
  ];
  const columns_archived = [
    {
      title: "Brand",
      field: "brand",
    },
    { title: "Name", field: "name" },
    { title: "Year", field: "year" },
    { title: "Serial No", field: "serialno" },
    { title: "Notes", field: "notes" },
    { title: "Fuelable", field: "fuelable" },
    {
      title: "Archived",
      field: "archived",
    },
  ];
  return (
    <div  className= "table-size">
    
    <div className= "subheader">
             
        <h1 style={{"color": "black", "margin-bottom":"0px"}}>Equipments </h1><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      
        <div className="toggle-switch">
          <Checkbox
            toggle
            onClick={() => toggleselected(!selected)}
            checked={selected}
          />
        </div>
        <div className="archived">Show Archived</div>
      </div>

      <div className="equipment-table">
        <MaterialTable
          columns={selected ? columns_archived : columns_non_archived}
          data={selected ? equipmentData_archive : equipmentData_nonarchive}
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
            exportButton: true,
            actionsColumnIndex:-1
          }}
          icons={{
            Export: () => <img src={Export} alt="export"></img>,
            Add: () => <AddCircleRoundedIcon fontSize="large" color="primary" />,
            Edit: () => <CreateIcon color="action" />,
            Delete: () => <DeleteIcon color="action" />
          }}
        ></MaterialTable>
      </div>
    </div>
  );
}
