import React, { useState } from "react";
import MaterialTable from "material-table";
import { MTableCell } from "material-table";
import { Checkbox } from "semantic-ui-react";
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';
import { DialogTitle } from '@mui/material';
import "./job.css";
import '../Pages.css';
import Tooltip from '@material-ui/core/Tooltip';
import Editjob from './JobEdit/Jobedit';
import Addjob from './NewJob/Jobnew';
import SampleContextProvider from './NewJob/context/SampleContext';
import SampleContextProvider1 from './JobEdit/context/SampleContext';
import {useTranslation,Trans} from 'react-i18next';

import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import {Icon} from 'semantic-ui-react';
import {
  jobData_withoutcomplete,
  jobData_withcomplete,
} from "../../../Data/JobData";

export default function Job() {

  const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        setOpen(false);

    };
    const [editopen, setEditOpen] = React.useState(false);
    const handleClickEditOpen = () => {
        setEditOpen(true);
    };

    const handleEditClose = (event, reason) => {
        setEditOpen(false);

    };

  const [selected, toggleselected] = useState(false);
  const {t} =useTranslation();
  
  const columns = [
    {

      title: t('jobs.status',"Status"),
      field: "status",
     
     
      lookup: { '0': <Trans i18nKey="jobs.raised">Raised</Trans>,
      '1': t('jobs.raisedandassigned','Raised And Assigned'),
      '2': t('jobs.inprogress','In Progress'),
      '3': t('jobs.onhold','On Hold'),
      '4': t('jobs.completed','Completed'),

      } ,
      render: rowData => {
        return <Tooltip title={rowData.status} placement="bottom-start" arrow>
           </Tooltip>            
     },
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

    { title: t('jobs.priority','Priority'), field: "priority" ,
    lookup: { '0': t('jobs.low','Low'), 
    '1': t('jobs.normal','Normal'), 
    '2': t('jobs.high','High'), 
    '3': t('jobs.safety','Safety')},

    render: rowData => {
      switch (rowData.priority) {
        case '0':
           return <Icon name='angle down'size='large'/>
        case '1':
           return <Icon name='blue angle up'size='large'/>
        case '2':
           return <Icon name='red angle double up'size='large'/>
   
        case '3':
           return <Icon name='orange exclamation triangle'size='large'/>
    default:
      return <></>
    }}
  },

    { title: t('jobs.description','Description'), field: "description" },
    { title: t('jobs.category','Category'), field: "category" ,
    lookup: { '0': 'None', '1': 'Equipment', '2': 'Paddock', '3': 'Fuel Tank', '4': 'Silo', '5': 'Livestock'},},
    { title: t('jobs.asset','Asset'), field: "asset" },
    { title: t('jobs.duedate','Due Date'), field: "duedate", type:"date", filtering: false },
    { title: t('jobs.lastupdate','Last Update'), field: "lastupdate", type:"date", filtering: false },

    
  ];
 
  return (
    <div  className= "table-size">
    
    <div className= "subheader">
             

        <h1 style={{"color": "black", "margin-bottom":"0px"}}><Trans i18nKey="jobs.heading">Jobs</Trans> </h1><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>

      
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
          data={selected ? jobData_withcomplete : jobData_withoutcomplete}
          
          localization={{
            toolbar:{
              searchTooltip:t('materialtable.searchtooltip','Search'),
              searchPlaceholder:t('materialtable.searchplaceholder','Search')
            },
            header:{
              actions:t('materialtable.headeractions','Actions')

            },
            body:{
              addTooltip:t('materialtable.bodyaddtooltip','Add'),
              deleteTooltip:t('materialtable.bodydeletetooltip','Delete'),
              editTooltip:t('materialtable.edittooltip','Edit'),
              emptyDataSourceMessage:t('materialtable.emptydatasourcemessage','No records to diplay'),
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
           components={{
          Cell: (props) => (
            <Tooltip title={props.value ? props.value : ''}>
              <MTableCell {...props} />
            </Tooltip>       /// Add translation for tooltip also
          ),
        }}
          actions={[
          {
            icon: () => <AddCircleRoundedIcon fontSize="large" color="primary" />,
            isFreeAction: true,
            onClick: (event) => setOpen(true)
          },
          {
            icon: () => <CreateIcon color="action" />,
           
            onClick: (event) => setEditOpen(true)
          },
          {
            icon: () => <DeleteIcon color="action" />
          }
          ]}
        ></MaterialTable>
        <Dialog open={open} onClose={handleClose} maxWidth="100" scroll="paper">
                <DialogTitle sx={{ fontSize: 24, fontWeight: 'large' }}>Job Details</DialogTitle>
                <DialogContent>
                <SampleContextProvider>
                    <Addjob />
                    </SampleContextProvider>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">CANCEL</Button>
                    <Button onClick={handleClose} color="primary">SAVE</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={editopen} onClose={handleEditClose} maxWidth="lg" scroll="paper">
                <DialogTitle sx={{fontSize:24, fontWeight:'large'}}>Job Details</DialogTitle>
                <DialogContent>
                <SampleContextProvider1>
                    <Editjob />
                </SampleContextProvider1>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditClose} className="float-left">DELETE</Button>
                    <Button onClick={handleEditClose}>CANCEL</Button>
                    <Button onClick={handleEditClose}>SAVE</Button>
                </DialogActions>
            </Dialog>
      </div>
    </div>
  );
}
