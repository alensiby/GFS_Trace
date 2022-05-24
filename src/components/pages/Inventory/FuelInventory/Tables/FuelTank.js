import React, { useEffect, useState } from "react";
import MaterialTable,{ MTableToolbar } from "material-table";
import { Progress } from "semantic-ui-react";
import {Checkbox} from "semantic-ui-react";
import {fuelTank_data,type_data} from "./Tabledatas";

import "../Fuel.css";
import "./archived.css";
import Export from "./export.png";


export default function FuelTank() {
  const [selected, toggleselected] = React.useState(false);
  const [type, setType] = useState({});
const [data, setData] = React.useState(fuelTank_data );
  const columns = [
    {
      title: "Farm",
      field: "farm",filtering:false,
    },
    {
      title: "Name",
      field: "name",filtering:false,
    },
    {
      title: "Type",
      field: "type",lookup:type,
    },
   
    {
      title: "Capacity",
      field: "capacity",filtering:false,
    },
    {
      title: "Contents",
      field: "contents",filtering:false,
    },
    // {
    //   title: "Contents",
    //   field: "contents",filtering:false,
    // },
    {
      title: "Contents",
      field: "contents",filtering:false,
      render: rowData => {
        return <Progress percent={rowData.contents} progress color="rgb(68, 63, 63)" />
      }
    },
    
   
  ]
  const columns_archived = [
    {
      title: "Farm",
      field: "farm",filtering:false,
    },
    {
      title: "Name",
      field: "name",filtering:false,
    },
    {
      title: "Type",
      field: "type",lookup:type,
    },
   
    {
      title: "Capacity",
      field: "capacity",filtering:false,
    },
    {
      title: "Contents",
      field: "contents",filtering:false,
      
    },
    {
      title: "Contents",
      field: "contents",filtering:false,
      render: rowData => {
        return <Progress percent={rowData.contents} progress color="rgb(68, 63, 63)" />
      }

    },
    {
      title: "Archived",
      field: "archived",filtering:false,
    },
  ];
  useEffect(() => {
    const type = {};
    type_data.map((row) => (type[row.id] = row.title));
    setType(type);
  }, []);
  return (
    <div>
      <MaterialTable
        title="FUEL TANK"
        data={data}
        columns={selected ? columns_archived : columns}
        // columns={columns}
        // detailPanel={(rowData) => {
        //   return <Chart />;
        // }}
        options={{
          actionsColumnIndex: -1,
          paging: true,
          pageSizeOptions: [2, 5, 10, 15, 20],
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          exportButton: true,filtering:true
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
          // Edit: () => <CreateIcon color="action" />,
          // Delete: () => <DeleteIcon color="action" />
        }}
      />
    </div>
  );
}


