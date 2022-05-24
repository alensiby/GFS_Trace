import React from 'react'
import MaterialTable from 'material-table';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import WaterStorageData from '../../../../Data/WaterStorageData';

export default function WaterStorageTable(props) {
  const farm = props.farm;

  const columns = [{
      title: 'Name', field: 'name'
  },
  {
      title: 'Capacity', field: 'capacity', type: 'numeric',
  },
  {
      title: 'Unit', field: 'cunit',
      lookup: { '0': 'Litres',  '1': 'Gallons', '4':'Cubic metre', '2':'Cubic feet','3':'Cubic yard'},
  },{
    title: 'Surface Area', field: 'surface', type: 'numeric',
},
{
    title: 'Unit', field: 'sunit',
    lookup: { '3': 'Hectares', '2': 'Acres', '1':'Square metre', '0':'Square feet'},
},{
  title: 'Max Depth ', field: 'depth', type: 'numeric',
  
},
{
  title: 'Unit', field: 'dunit',
  lookup: { '0': 'mm', '1':'cm', '5':'metre', '2': 'inch', '3':'feet', '4':'yard'},
}, {
      title: 'Slop factor', field: 'slop', type: 'numeric', 
      
  }, {
      title: 'Notes', field: 'notes',
    
  }]
    return (
        <div>
            <MaterialTable title="Water Storages"
                data={WaterStorageData}
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
