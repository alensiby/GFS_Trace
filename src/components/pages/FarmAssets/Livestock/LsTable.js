import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';

export default function LsTable() {
  const [type, setType] = useState({});

  const lsType = [
    { id: 1, title: "Cattle" },
    { id: 2, title: "Bulls" },
    { id: 3, title: "Sheep" },
    { id: 4, title: "Horses" },
    { id: 5, title: "Chickens" },
    { id: 6, title: "Pigs" },
    { id: 7, title: "Deer" },
    { id: 8, title: "Goats" },
    { id: 9, title: "Llamas" },
    { id: 10, title: "Bees" },
  ];

  const [data, setData] = useState([
    {
      type: "1",
      names: "abc",

      number: "123",
      notes: "xyz",
    },
    {
      type: "2",

      names: "pqrs",

      number: "16343",
      notes: "xykfz",
    },
  ]);
  const columns = [
    {
      title: "Type",
      field: "type",
      lookup: type,
    },
    {
      title: "Name",
      field: "names",
      validate: (rowData) => {
        if (rowData.names === undefined || rowData.names === "") {
          return "Required";
        } else if (rowData.names.length < 3) {
          return "Name Should Contain Atleast 3 chars";
        }
        return true;
      },
    },

    {
      title: "Number",
      field: "number",
    },
    {
      title: "Notes",
      field: "notes",
    },
  ];
  useEffect(() => {
    const type = {};
    lsType.map((row) => (type[row.id] = row.title));
    setType(type);
  }, []);

  return (
    <div>
      <MaterialTable
        title="Livestock"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setData([...data, newRow]);
              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...data];
              updatedData[(oldRow, data.id)] = newRow;
              setData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
            }),
        }}
        options={{
          actionsColumnIndex: -1,
          showTitle: false,
          pageSizeOptions: [2, 5, 10, 15, 20],
          paginationType: "stepped",
          showFirstLastPageButtons: false,
        }}
        icons={{
         
          Add: () => <AddCircleRoundedIcon fontSize="large" color="primary" />,
          Edit: () => <CreateIcon color="action" />,
          Delete: () => <DeleteIcon color="action" />
        }}
      />
    </div>
  );
}
