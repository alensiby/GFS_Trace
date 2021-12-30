import React from 'react'
import MaterialTable from 'material-table';
import '../../Pages.css';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import Export from '../../export.png';
import ChemicalData from '../../../../Data/ChemicalData';
export default function Chemicals() {
    
    

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
                data={ChemicalData}
                columns={columns}
                editable={{
                  onRowAdd:(newRow)=> new Promise((resolve,reject)=>{}),
                  onRowUpdate:(newRow,oldRow)=> new Promise(()=>{}),
                  onRowDelete:(selectedRow)=> new Promise(()=>{})
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
                  Export: () => <img src={Export} alt="export"></img>,
                  Add: () => <AddCircleRoundedIcon fontSize="large" color="primary" />,
                  Edit: () => <CreateIcon color="action" />,
                  Delete: () => <DeleteIcon color="action" />
                }}
            /> </div>
        </div>
    )
}
