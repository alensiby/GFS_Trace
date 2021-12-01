import React, { useState,useEffect } from "react";
import MaterialTable from "material-table";
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';

const dropletSize=[
    {id:0,title:"N/A",icon:<icon>paddock</icon>},
    {id:1,title:"Extremely Fine"},
    {id:2,title:"Very Fine"},
    {id:3,title:"Fine"},
    {id:4,title:"Medium"},
    {id:5,title:"Coarse"},
    {id:6,title:"Very Coarse"},
    {id:7,title:"Extremely Coarse"},
    {id:8,title:"Ultra Coarse"},
]

export default function NTable() {
    const [drop,setDrop]=useState({})
    const [tableData,setTableData]=useState([
        {name:"abc",operatingPressure:"176",unit:"0",dropletSize:"0"}
    ])
    const columns=[
        {title:"Name",field:"name",validate: rowData =>{if(rowData.name === undefined || rowData.name===""){return "Required"}
        else if(rowData.name.length<3){return "Name Should Contain Atleast 3 chars"}
        return true}},
        {title:"Operating Pressure", field:"operatingPressure"},
        {title:"Unit", field:"unit", lookup:{0:"PSI",1:"BAR"}},
        {title:"Droplet Size", field:"dropletSize",lookup:drop}
    ]
    useEffect(()=>{
        const drop={}
        dropletSize.map(row=>drop[row.id]=row.title)
        setDrop(drop)
    },[])
    return (
        <div>
            <MaterialTable
        title="Nozzles"
        data={tableData}
        columns={columns}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData([...tableData, newRow]);
              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData[(oldRow, tableData.id)] = newRow;
              setTableData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
            onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...tableData];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setTableData([...dataDelete]);
  
                resolve()
              }, 1000)
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
    )
}
