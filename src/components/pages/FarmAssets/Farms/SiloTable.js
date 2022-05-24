import React from 'react'
import MaterialTable from 'material-table';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import SiloData from '../../../../Data/SiloData';
export default function SiloTable(props) {
    const farm = props.farm;

   
  const columns = [{
      title: 'Name', field: 'name'
  },
  {
      title: 'Capacity', field: 'capacity', type: 'numeric',
  },
  {
      title: 'Unit', field: 'unit',
      lookup: { 't': 'Tonnes', 'wt': 'Wheat tonnes', 'm3':'Cubic metre', 'f3':'Cubic feet'},
  }, {
      title: 'Cultivar', field: 'cultivar', 
      lookup: { 'fallow': 'Fallow', 'abc': 'abc', 'dfg':'dfg' },
  }, {
      title: 'status', field: 'status',
      lookup: {'N': 'Normal' ,'S': 'Seed', 'T': 'Treated', 'TS': 'Treated Seed', 
      'C': 'Contaminated', 'A': 'Archived' },
  }]
    return (
        <div>
            <MaterialTable title="Silos"
                data={SiloData}
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
