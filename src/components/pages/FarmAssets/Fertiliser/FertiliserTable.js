import React from 'react'
import MaterialTable from 'material-table';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import Export from '../../export.png';

export default function FertiliserTable() {
  const [data, setData] = React.useState([
    { name: 'Abc', form: 1, inventory: 12, units: 1, nutrients: "Abc", composition: "12%" },
    { name: 'Efg', form: 3, inventory: 12, units: 2, nutrients: "efg", composition: "22%" },
    { name: 'xyz', form: 0, inventory: 12, units: 0, nutrients: "hij", composition: "45%" },
    { name: 'wer', form: 1, inventory: 12, units: 3, nutrients: "klm", composition: "50%" },
  ])
  const columns = [{
    title: 'Name', field: 'name',
  },
  {
    title: 'Form', field: 'form', lookup: { 0: 'Granular', 1: 'Powder', 2: 'Liquid', 3: 'Gas' }
  },
  {
    title: "Inventory", field: "inventory",
  },
  {
    title: 'Units', field: 'units', lookup: { 0: 'litres', 1: 'gallons', 2: 'kilograms', 3: 'pounds', 4: 'tonnes' }, filtering: false
  },
  {
    title: 'Nutrients Name', field: 'nutrients', filtering: false
  },
  {
    title: 'Nutrients Composition', field: 'composition', filtering: false
  },
  ]
  return (
    <div>
      <MaterialTable title="Fertilisers"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);

                resolve();
              }, 1000)
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
          exportButton: true,
          filtering: true,
          search: false,
        }}
        icons={{
          Export: () => <img src={Export}></img>,
          Add: () => <AddCircleRoundedIcon fontSize="large" color="primary" />,
          Edit: () => <CreateIcon color="action" />,
          Delete: () => <DeleteIcon color="action" />
        }}
      />
    </div>
  )
}