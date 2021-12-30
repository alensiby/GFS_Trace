import React from 'react'
import MaterialTable from 'material-table';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import FuelTankData from '../../../../Data/FuelTankData';

export default function FueltankTable() {
  

    const columns = [{
        title: 'Name', field: 'name'
    },
    {
        title: 'Capacity', field: 'capacity'
    },
    {
        title: 'Unit', field: 'unit',
        lookup: { 'L': 'Litres', 'gal': 'Gallons'},
    }, {
        title: 'Type', field: 'type', 
        lookup: { 'avaition': 'Avaition', 'unleaded': 'Unleaded', 'adblue':'AdBlue', 'diesel':'Diesel' },
    }]
    return (
        <div>
            <MaterialTable title="Fuel Tanks"
                data={FuelTankData}
                columns={columns}
                editable={{
                  onRowAdd:(newRow)=> new Promise((resolve,reject)=>{}),
                  onRowUpdate:(newRow,oldRow)=> new Promise(()=>{}),
                  onRowDelete:(selectedRow)=> new Promise(()=>{})
                }}
               
               
                options={{
                    actionsColumnIndex: -1,
                    filtering: true,
                    paging: true,
                    pageSizeOptions: [2, 5, 10, 15, 20],
                    paginationType: "stepped",
                    showFirstLastPageButtons: false,
                }}
                icons={{
                 
                  Add: () => <AddCircleRoundedIcon fontSize="large" color="primary" />,
                  Edit: () => <CreateIcon color="action" />,
                  Delete: () => <DeleteIcon color="action" />
                }}
            /> 
        </div>
    )
}
