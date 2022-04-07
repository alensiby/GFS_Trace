import React from 'react'
import MaterialTable,{ MTableToolbar } from 'material-table';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { stocktake_data } from './Tabledatas';
import { Checkbox } from "semantic-ui-react";
export default function StockTake() {
  const [selected, toggleselected] = React.useState(false);
    const [data, setData] = React.useState(stocktake_data)
    const columns = [
    {
        title: 'Date', field: 'date',
    }, {
        title: 'Operator', field: 'operator',
    },
    {
        title: 'Fertilisers', field: 'fertilisers',
    },
    {
        title: 'Reported', field: 'report',
    }]
    const columns_archived = [
      {
          title: 'Date', field: 'date',
      }, {
          title: 'Operator', field: 'operator',
      },
      {
          title: 'Fertilisers', field: 'fertilisers',
      },
      {
          title: 'Reported', field: 'report',
      },
      {
        title: "Archived",
        field: "archived",
      },]
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
                          label="Show Archived Tickets"
                        />
                      </div>
                    </div>
                  ),
                }}
                icons={{
                    Edit: () => <CreateIcon color="action" />,
                    Delete: () => <DeleteIcon color="action" />
                  }}
            />
        </div>
    )
}