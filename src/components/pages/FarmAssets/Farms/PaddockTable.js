import React from 'react'
import MaterialTable from 'material-table';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import PaddockData from "../../../../Data/PaddockData";
export default function PaddockTable(props) {
    const farm = props.farm;
    

    
  const columns = [{
      title: 'Name', field: 'name'
  },
  {
      title: 'Size', field: 'size', type: 'numeric'
  },
  {
      title: 'Unit', field: 'unit', 
      lookup: { 0:'feet square', 1:'metre square',2: 'acres', 3: 'hectare'},
  }, {
      title: 'Cultivar', field: 'cultivar', 
      lookup: { 'fallow': 'Fallow', 'abc': 'abc', 'dfg':'dfg' },
  }, {
      title: 'Rotation', field: 'rotation',
      lookup: {'D': 'Dryland' ,'NR': 'Normal Rotation', 'DC': 'Double Crop', 'LF': 'Long Fallow', 
      'SF': 'Short Fallow', 'I': 'Irrigated', 'SI': 'Semi-irrigated', 'AP': 'After Pulse' },
  }, {
      title: 'Year', field: 'year', type: 'numeric'
  }]
    return (
        <div>
            <MaterialTable title="Paddocks"
                data={PaddockData}
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
