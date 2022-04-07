import React from 'react'
import MaterialTable, { MTableToolbar } from 'material-table';
import { fertiliser_data } from './Tabledatas';
import { Checkbox } from "semantic-ui-react";
import './archived.css';
export default function Fertilisers() {
    const [selected, toggleselected] = React.useState(false);
    const [data, setData] = React.useState(fertiliser_data)
    const columns = [{
        title: 'Name', field: 'name'
    },
    {
        title: 'Form', field: 'form',
    },
    {
        title: 'Nutrients', field: 'nutrients',
    }, {
        title: 'Amount', field: 'amount',
    }]
    const columns_archived = [{
        title: 'Name', field: 'name'
    },
    {
        title: 'Form', field: 'form',
    },
    {
        title: 'Nutrients', field: 'nutrients',
    }, {
        title: 'Amount', field: 'amount',
    },
    {
        title: "Archived",
        field: "archived",
      },]
    return (
        <div>
            <MaterialTable title="FERTILISERS"
                data={data}
                columns={selected ? columns_archived : columns}

                options={{
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
                            label="Show Archived Fertilisers"
                          />
                        </div>
                      </div>
                    ),
                  }}
            />
        </div>
    )
}