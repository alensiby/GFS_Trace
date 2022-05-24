import React from 'react'
import MaterialTable, { MTableToolbar } from 'material-table';
import Export from '../../../export.png';
import { chemicals_data } from '../../../../../Data/InventoryChemicalData';
import { Checkbox } from "semantic-ui-react";
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import './archived.css';
export default function Chemicals() {
    const [selected, toggleselected] = React.useState(false);
    const [data, setData] = React.useState(chemicals_data)
    const columns = [{
        title: 'Name', field: 'name'
    },
    {
        title: 'Resistance Group', field: 'resistancegrp',
    },
    {
        title: 'Actives', field: 'actives',
    }, {
        title: 'Amount', field: 'amount',
    }]
    const columns_archived = [{
        title: 'Name', field: 'name'
    },
    {
        title: 'Resistance Group', field: 'resistancegrp',
    },
    {
        title: 'Actives', field: 'actives',
    }, {
        title: 'Amount', field: 'amount',
    },
    {
        title: "Archived",
        field: "archived",
      },]
    return (
        <div>
            <MaterialTable title="CHEMICALS"
                data={data}
                columns={selected ? columns_archived : columns}

                options={{
                    
                    paging: true,
                    pageSizeOptions: [2, 5, 10, 15, 20],
                    paginationType: "stepped",
                    showFirstLastPageButtons: false,
                    filtering: true,
                    actionsColumnIndex:-1
                  }}
                components={{
                    Toolbar: props => (
                      <div>
                        <MTableToolbar {...props} />
                        <div className="toggle-switch">
                          <Checkbox
                            toggle
                            onClick={() => toggleselected(!selected)}
                            checked={selected}
                            label="Show Archived Chemicals"
                          />
                        </div>
                      </div>
                    ),
                  }}
                  editable={{
                    onRowAdd:(newRow)=> new Promise((resolve,reject)=>{}),
                    onRowUpdate:(newRow,oldRow)=> new Promise(()=>{}),
                    onRowDelete:(selectedRow)=> new Promise(()=>{})
                  }}
                  icons={{
                    Add: () => <AddCircleRoundedIcon fontSize="large" color="primary" />,
                    Edit: () => <CreateIcon color="action" />,
                    Export: () => <img src={Export}></img>,
                    Delete: () => <DeleteIcon color="action" />
                   
                  }}
                
            />
        </div>
    )
}