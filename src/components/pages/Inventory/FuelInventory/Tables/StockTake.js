import React, { useEffect, useState } from 'react'
import MaterialTable,{ MTableToolbar } from 'material-table';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Export from './export.png';
import { stocktake_data,type_data } from './Tabledatas';
import { Checkbox } from "semantic-ui-react";
export default function StockTake() {
  const [selected, toggleselected] = React.useState(false);
  const [type, setType] = useState({});
    const [data, setData] = React.useState(stocktake_data)
    const columns = [{
      title: 'Fuel Tank', field: 'fuelTank',filtering:false,
   },

    {
       title: 'Date/Time', field: 'dateTime',filtering:false,
    }, 
    {
      title: 'Operator', field: 'operator',filtering:false,
    },
    
    
    {
        title: 'Reported', field: 'reported',filtering:false,
    },
    {
      title: 'Adjustment', field: 'adjustment',filtering:false,
  },
  {
    title: 'Type', field: 'type',lookup:type,
},
  ]
    const columns_archived = [
      {
        title: 'Fuel Tank', field: 'fuelTank',filtering:false,
     },
  
      {
         title: 'Date/Time', field: 'dateTime',filtering:false,
      }, 
      {
        title: 'Operator', field: 'operator',filtering:false,
      },
      
      
      {
          title: 'Reported', field: 'reported',filtering:false,
      },
      {
        title: 'Adjustment', field: 'adjustment',filtering:false,
    },
    {
      title: 'Type', field: 'type',lookup:type
  },
      {
        title: "Archived",
        field: "archived",
      },];
      useEffect(() => {
        const type = {};
        type_data.map((row) => (type[row.id] = row.title));
        setType(type);
      }, []);
    return (
        <div>
            <MaterialTable title="STOCKTAKE"
                data={data}
                columns={selected ? columns_archived : columns}
                editable={{
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
                    exportButton: true,filtering:true,
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