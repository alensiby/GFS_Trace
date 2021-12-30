import React from 'react'
import MaterialTable from 'material-table';
import '../../Pages.css';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';

export default function WaterLicence() {
    
    

    const [data, setData] = React.useState([
        { name: 'xyz', license: 'Aclonifene', notes: 'qwert' },
        { name: 'abc', license: 'Phosmet', notes: 'asdfg' },
        
         ])
    const columns = [{
        title: 'Name', field: 'name'
    },
    {
      title: 'License number', field: 'license'
  },
  {
    title: 'Notes', field: 'notes'
}]
    return (
        <div>
          <div  className= "table-size">
    
    <div className= "subheader">
             
        <h1 style={{"color": "black", "margin-bottom":"0px"}}>Water Licences</h1><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
     
            <MaterialTable 
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
                    paging: true,
                    pageSizeOptions: [2, 5, 10, 15, 20],
                    paginationType: "stepped",
                    showFirstLastPageButtons: false,
                    
                    showTitle: false,
                }}
                icons={{
                  
                  Add: () => <AddCircleRoundedIcon fontSize="large" color="primary" />,
                  Edit: () => <CreateIcon color="action" />,
                  Delete: () => <DeleteIcon color="action" />
                }}
            /> </div>
        </div>
    )
}
