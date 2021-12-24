import React from 'react'
import MaterialTable, { MTableToolbar } from 'material-table';
import Export from '../../../export.png';
import { chemicals_data } from '../../../../../Data/InventoryChemicalData';
import { Checkbox } from "semantic-ui-react";
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
                    exportButton: true,
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
                icons={{
                    Export: () => <img src={Export}></img>,
                  }}
            />
        </div>
    )
}