import React from 'react'
import MaterialTable, { MTableToolbar } from 'material-table';
import Export from '../../../export.png';
import { storages_data } from '../../../../../Data/InventoryWaterData'
import './archived.css';
export default function Storages() {
    const [data, setData] = React.useState(storages_data)
    const columns = [{
        title: 'Farms', field: 'farm'
    },
    {
        title: 'Name', field: 'name',
    },
    {
        title: 'Capacity', field: 'capacity',
    }, {
        title: 'Contents', field: 'contents',
    }]
    
    return (
        <div>
            <MaterialTable title="STORAGES"
                data={data}
                columns={ columns}

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