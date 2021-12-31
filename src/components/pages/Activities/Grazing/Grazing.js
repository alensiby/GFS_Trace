import React, { useState } from "react";
import MaterialTable from "material-table";
import { Checkbox } from "semantic-ui-react";
import '../../Pages.css';
import CreateIcon from '@mui/icons-material/Create';
import {useTranslation,Trans} from 'react-i18next';
import {Icon} from 'semantic-ui-react';
import {
    grazingData_withoutcomplete,
    grazingData_withcomplete,
} from "../../../../Data/GrazingData";

export default function Grazing() {
  const [selected, toggleselected] = useState(false);
  const {t} =useTranslation();
  const columns = [
    {
      title: t('activities.status','Status'),
      field: "status",
     
     
      lookup: { '0': 'Raised',
      '1': 'Raised and Assigned',
      '2': 'In Progress',
      '3': 'On Hold',
      '4': 'Completed',
      } ,
      render: rowData => {
        switch (rowData.status) {
        case '0':
                return <Icon name='blue circle outline' size='large'/>
        case '4':
                return <Icon name='green circle' size='large'/>
        case '1':
                return <Icon name='blue circle'size='large'/>
        case '3':
               return <Icon name='red circle'size='large'/>
        case '2':
               return <Icon name='orange circle'size='large'/>
      default:
        return <></>
          }
        }

  
},

    
    { title: t('activities.approved','Approved'), field: "approved",lookup: { 'no': 'No',
    'yes': 'Yes'}
   },
    { title: t('activities.description','Description'), field: "description" },
        
{ title: t('activities.livestock','Livestock'), field: "livestock",  

lookup:{
    'cattle': "Cattle" ,
    'bulls': "Bulls" ,
    'sheep': "Sheep" ,
    'horses': "Horses" ,
    'chickens': "Chickens" ,
    'pigs': 'Pigs' ,
    'deer': 'Deer' ,
    'goats': 'Goats' ,
    'llamas': 'Llamas' ,
    'Bees': 'Bees' ,
}
},
    { title: t('activities.scheduleddate','Scheduled Date'), field: "scheduleddate", type:"date", filtering: false },
    { title: t('activities.started','Started'), field: "started",lookup: { 'no': 'No',
    'yes': 'Yes'} },
    { title: t('activities.completed','Completed '), field: "completed", lookup: { 'no': 'No',
    'yes': 'Yes'} },
    
  ];
 
  return (
    <div  className= "table-size">
    
    <div className= "subheader">
             
        <h1 style={{"color": "black", "margin-bottom":"0px"}}><Trans i18nKey="grazing.heading">Grazing</Trans> </h1><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      
        <div className="toggle-switch">
          <Checkbox
            toggle
            onClick={() => toggleselected(!selected)}
            checked={selected}
          />
        </div>
        <div className="completed"><Trans i18nKey="general.showcompleted">Show Completed</Trans></div>
      </div>

      <div className="equipment-table">
        <MaterialTable
          columns={columns}
          data={selected ? grazingData_withcomplete : grazingData_withoutcomplete}
          editable={{
            
            onRowUpdate:(newRow,oldRow)=> new Promise(()=>{}),
            onRowDelete:(selectedRow)=> new Promise(()=>{})
          }}
          localization={{
            toolbar:{
              searchTooltip:t('materialtable.searchtooltip','Search'),
              searchPlaceholder:t('materialtable.searchplaceholder','Search')
            },
            header:{
              actions:t('materialtable.headeractions','Actions')

            },
            body:{
              deleteTooltip:t('materialtable.bodydeletetooltip','Delete'),
              editTooltip:t('materialtable.edittooltip','Edit'),
              emptyDataSourceMessage:t('materialtable.emptydatasourcemessage','No recorde to diplay'),
              editRow:{
                deleteText:t('materialtable.deletetext','Are you sure u want to delete?'),
                cancelTooltip:t('materialtable.editrowcanceltip','Cancel'),
                saveTooltip:t('materialtable.editrowsavetooltip','Save')
              },
              filterRow:{
                filterTooltip:t('materialtable.feltertooltip','Filter')
              }
            },
            pagination:{
              previousTooltip:t('materialtable.previoustooltip','Previous Page'),
              nextTooltip:t('materialtable.nexttooltip','Next Page'),
              labelRowsSelect:t('materialtable.labelrowselect','rows')
              
            }
          }}
          options={{
            showTitle: false,
            paging: true,
            pageSizeOptions: [2, 5, 10, 15, 20],
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            filtering: true,
            actionsColumnIndex:-1
          }}
          icons={{
          
            
            Edit: () => <CreateIcon color="action" />,
           
          }}
        ></MaterialTable>
      </div>
    </div>
  );
}
