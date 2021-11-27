import React from 'react'
import MaterialTable from 'material-table';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';

export default function FueltankTable() {
    const [open, setOpen] = React.useState(false);
    

    const [data, setData] = React.useState([
        { name: 'SR Fuel Tank', capacity: '23', unit:'L', type: 'diesel' },
        { name: 'NewSon Fuel Tank', capacity: '50', unit:'L', type: 'avaition' },
        { name: 'Queen Tank', capacity: '40', unit:'gal', type: 'unleaded' },
        { name: 'Anns Tank', capacity: '10', unit:'gal', type: 'adblue' }
         ])
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
                data={data}
                columns={columns}
                editable={{
                
                        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
          
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
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
