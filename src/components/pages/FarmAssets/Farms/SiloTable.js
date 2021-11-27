import React from 'react'
import MaterialTable from 'material-table';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SiloTable() {
    const [open, setOpen] = React.useState(false);
    

    const [data, setData] = React.useState([
      { name: 'Linta Paddock', capacity: '23', unit:'m3', cultivar: 'fallow', status: 'N' },
      { name: 'K2K Paddock', capacity: '50', unit:'f3', cultivar: 'dfg', status: 'C' },
      { name: 'Harry Woods Paddock', capacity: '40', unit:'wt', cultivar: 'abc', status: 'T' },
      { name: 'Peter Dein Co.', capacity: '10', unit:'t', cultivar: 'abc', status: 'TS' }
       ])
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
