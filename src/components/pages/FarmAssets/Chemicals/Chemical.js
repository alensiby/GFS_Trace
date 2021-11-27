import React from 'react'
import MaterialTable from 'material-table';
import '../../Pages.css';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import Export from '../../export.png';
export default function Chemicals() {
    
    

    const [data, setData] = React.useState([
        { name: 'Lagon', actives: 'Aclonifene', group: 3, rate: '23', runit:'ml/ha',inventory: '12', iunit:'ml', period: 10 },
        { name: 'Imidan', actives: 'Phosmet', group: 3, rate: '50', runit:'lb/ha', inventory: '23', iunit:'l', period: 20 },
        { name: 'Decis',actives: 'Deltamethrin', group: 3, rate: '40', runit:'oz/ha', inventory: '25', iunit:'oz', period: 5 },
        { name: 'Actara',actives: 'Thiamethoxam', group: 3, rate: '10', runit:'oz/ha', inventory: '12', iunit:'lb', period: 10 }
         ])
    const columns = [{
        title: 'Name', field: 'name'
    },
    {
      title: 'Actives', field: 'actives'
  },
  {
    title: 'Resistance Group', field: 'group'
},
    {
        title: 'Default Application rate', field: 'rate'
    },
    {
        title: 'Unit', field: 'runit',
        lookup: { 'ml/ha': 'ml/ha', 'kg/ha': 'Kg/ha','l/ha': 'L/ha','lb/ha': 'lb/ha','oz/ha': 'oz/ha','g/ha': 'g/ha',
        'floz/ac': 'floz/ac','qt/ac': 'qt/ac','pt/ac': 'pt/ac','oz/ac': 'oz/ac','lb/ac': 'lb/ac','g/ac': 'g/ac',
        'kg/1000L': 'Kg/1000L','t/ha': 't/ha','l/kg': 'L/Kg','L/t': 'L/t',},
    }, 
    {
      title: 'Inventory', field: 'inventory'
  },
  {
      title: 'Unit', field: 'iunit',
      lookup: { 'ml': 'mL', 'kg': 'Kg','l': 'L','lb': 'lb','oz': 'oz','g': 'g',
      'floz': 'floz','qt': 'qt','pt': 'pt','t': 't'},
  }, 
  {
        title: 'Witholding Period', field: 'period', type: 'numeric',
        
    }]
    return (
        <div>
          <div  className= "table-size">
    
    <div className= "subheader">
             
        <h1 style={{"color": "black", "margin-bottom":"0px"}}>Chemicals </h1><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
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
                    exportButton: true,
                    showTitle: false,
                }}
                icons={{
                  Export: () => <img src={Export}></img>,
                  Add: () => <AddCircleRoundedIcon fontSize="large" color="primary" />,
                  Edit: () => <CreateIcon color="action" />,
                  Delete: () => <DeleteIcon color="action" />
                }}
            /> </div>
        </div>
    )
}
