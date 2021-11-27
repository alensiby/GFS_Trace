import React from 'react'
import MaterialTable from 'material-table';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';

export default function PaddockTable() {
    const [open, setOpen] = React.useState(false);
    

    const [data, setData] = React.useState([
      { name: 'Linta Paddock', size: '23', unit:'ac', cultivar: 'fallow', rotation: 'NR', year: 2017 },
      { name: 'K2K Paddock', size: '50', unit:'ac', cultivar: 'dfg', rotation: 'DC', year: 2019 },
      { name: 'Harry Woods Paddock', size: '40', unit:'f2', cultivar: 'abc', rotation: 'LF', year: 2020 },
      { name: 'Peter Dein Co.', size: '10', unit:'m2', cultivar: 'abc', rotation: 'SF', year: 2019 }
       ])
  const columns = [{
      title: 'Name', field: 'name'
  },
  {
      title: 'Size', field: 'size', type: 'numeric'
  },
  {
      title: 'Unit', field: 'unit',
      lookup: { 'ac': 'acres', 'ha': 'hectare', 'm2':'metre square', 'f2':'feet square'},
  }, {
      title: 'Cultivar', field: 'cultivar', 
      lookup: { 'fallow': 'Fallow', 'abc': 'abc', 'dfg':'dfg' },
  }, {
      title: 'Rotation', field: 'rotation',
      lookup: {'D': 'Dryland' ,'NR': 'Normal Rotation', 'DC': 'Double Crop', 'LF': 'Long Fallow', 
      'SF': 'Short Fallow', 'I': 'Irrigated', 'SI': 'Semi-irrigated', 'D': 'Dryland', 'AP': 'After Pulse' },
  }, {
      title: 'Year', field: 'year', type: 'numeric'
  }]
    return (
        <div>
            <MaterialTable title="Paddocks"
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
