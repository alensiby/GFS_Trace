import React from "react";
import MaterialTable, { Column } from "material-table";
import "../../Pages.css";
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import Chip from '@mui/material/Chip';
import { render } from "@testing-library/react";
import { style } from "@mui/system";


const User_types = ["Owner", "Admin", "User"];
const User_permissions = [
  "Payroll",
  "Add/Edit Users",
  "Grain Inventory",
  "Grain Contracts",
  "Chemical Inventory",
  "Fertiliser Inventory",
  "Fuel Inventory",
  "Water Inventory",
  "Spray Logs",
  "Spray Log Approval",
  "Plantings",
  "Spreadings",
  "Harvests",
  "Paddock Miantainance",
  "Irigation",
  "Grazing",
];
const users_data = [
  {
    Name: "Alen Siby",
    user_role: "Owner",
    permissions: "All",
    Phone: "7034726499",
    email: "alensiby6@gmail.com",
    Address: "asdasdnasd,asfjksdlfm,asjfksdnf,684522,kerala,India",
  },
  {
    Name: "Align Elsa",
    user_role: "User",
    permissions: "Payroll, Add/Edit Users, Grain Inventory",
    Phone: "7034726499",
    email: "alensiby6@gmail.com",
    Address: "asdasdnasd,asfjksdlfm,asjfksdnf,684522,kerala,India",
  },
  {
    Name: "Ivin Siby",
    user_role: "Admin",
    permissions: "Payroll, Add/Edit Users, Grain Inventory",
    Phone: "7034726499",
    email: "alensiby6@gmail.com",
    Address: "asdasdnasd,asfjksdlfm,asjfksdnf,684522,kerala,India",
  },
];
var chipcolor="";

export default function Users() {

  const columns = [
    {
      title: "Name",
      field: "Name",
    },
    {
      title: "User Role",
      field: "user_role",
    render(rowdata){

        function Switches(rowdata) {
               if(rowdata.user_role==="Owner"){
                   chipcolor="error"
               }
               else if(rowdata.user_role==="User"){
                   chipcolor="primary"
               }
               else{
                   chipcolor="warning"
               }
                 
                return(
                <div>
                    <Chip color={chipcolor} label={rowdata.user_role} /></div>)
            }
        return(Switches(rowdata))
    },},
    {
      title: "Permissions",
      field: "permissions",
    },
    {
      title: "Phone",
      field: "Phone",
    },
    {
      title: "Email",
      field: "email",
    },
    {
      title: "Address",
      field: "Address",
    },
  ];
  return (
    <div className="table-size">
      <div className="subheader">
        <h1 style={{ color: "black", "margin-bottom": "0px" }}>Users </h1>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
      <div className="equipment-table"></div>
      <MaterialTable
          columns={columns}
          data={users_data}
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
            exportButton: false,
            actionsColumnIndex:-1
          }}
          icons={{
            Add: () => <AddCircleRoundedIcon fontSize="large" color="primary" />,
            Edit: () => <CreateIcon color="action" />,
            Delete: () => <DeleteIcon color="action" />
          }}
        ></MaterialTable>
    </div>
  );
}
