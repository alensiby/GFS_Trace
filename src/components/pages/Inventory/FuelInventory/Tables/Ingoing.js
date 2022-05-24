import React, { useEffect, useState } from 'react'
import MaterialTable, { MTableToolbar } from 'material-table';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { ingoing_data,type_data } from './Tabledatas';
import { Checkbox } from "semantic-ui-react";
import Export from './export.png';
import { DisabledByDefault } from '@mui/icons-material';
export default function Ingoing() {
    const [selected, toggleselected] = React.useState(false);
    const [type, setType] = useState({});
    const [data, setData] = React.useState(ingoing_data)
    const columns = [{
        title: 'Fuel Tank', field: 'fuelTank',filtering:false,
    },
    
    {
        title: 'Date/Time', field: 'dateTime',filtering:false,
    }, {
        title: 'Operator', field: 'operator',filtering:false,
    },
    {
        title: 'Amount', field: 'amount',filtering:false,
    },
    {
        title: 'Type', field: 'type',lookup:type,
    },
    {
        title: 'Supplier', field: 'supplier',filtering:false,
    },
    
    {
        title: 'Notes', field: 'notes',filtering:false,
    },
    
    
  ]
  const columns_archived = [{
    title: 'Fuel Tank', field: 'fuelTank',filtering:false,
},

{
    title: 'Date/Time', field: 'dateTime',filtering:false,
}, {
    title: 'Operator', field: 'operator',filtering:false,
},
{
    title: 'Amount', field: 'amount',filtering:false,
},
{
    title: 'Type', field: 'type',lookup:type,
},
{
    title: 'Supplier', field: 'supplier',filtering:false,
},

{
    title: 'Notes', field: 'notes',filtering:false,
},
{
    title: 'Archived', field: 'archived',filtering:false,
},
  ];
  useEffect(() => {
    const type = {};
    type_data.map((row) => (type[row.id] = row.title));
    setType(type);
  }, []);
    return (
        <div>
            <MaterialTable title="INGOING"
                data={data}
                columns={selected ? columns_archived : columns}
                editable={{
                  onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setData([...data, newRow]);
              setTimeout(() => resolve(), 500);
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
                    filtering:true
                }}
                components={{
                    Toolbar: (props) => (
                      <div>
                        <MTableToolbar {...props} />
                        <div className="toggle-switch">
                          <Checkbox
                            toggle
                            onClick={() => toggleselected(!selected)}
                            checked={selected}
                            label="Show Archived"
                          />
                        </div>
                      </div>
                    ),
                  }}
                icons={{
                    Export: () => <img src={Export}></img>,
                    Edit: () => <CreateIcon color="action" />,
                    Delete: () => <DeleteIcon color="action" />
                  }}
            />
        </div>
    )
}