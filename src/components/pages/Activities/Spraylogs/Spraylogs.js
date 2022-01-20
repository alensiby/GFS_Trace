import React, { useState } from "react";
import MaterialTable from "material-table";
import { Checkbox } from "semantic-ui-react";
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@material-ui/core'
import { MTableCell } from "material-table";
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import '../../Pages.css';
import Tooltip from '@material-ui/core/Tooltip';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import {useTranslation,Trans} from 'react-i18next';
import Addspraylog from './NewSpraylog/Spraylognew';
import SampleContextProvider from './NewSpraylog/context/SampleContext';
import {Icon} from 'semantic-ui-react';
import {
    spraylogsData_withoutcomplete,
    spraylogsData_withcomplete,
} from "../../../../Data/SpraylogsData";

export default function Spraylogs() {
  const {t} =useTranslation();
  const [selected, toggleselected] = useState(false);
  const [description, setdescription] = React.useState("");
  const [bool, setbool] = React.useState(false);
  const [helper, sethelper] = React.useState("");
  //const [s,setS]=React.useState(0);
  
  //const [bool2, setbool2] = React.useState(false);
  //const [anchorEl, setAnchorEl] = React.useState(null);
  const [items, setitems] = React.useState([]);
  //const [name, setname] = React.useState();
  const [dataedit, setdataedit] = React.useState("");
  
  //const [helper2, sethelper2] = React.useState("");
  
  //const [newitem, setnewitem] = React.useState();
  //const open = Boolean(anchorEl);
  //const [opendescription, setopendescription] = React.useState(false);
  //const [openedit, setopenedit] = React.useState(false);


  const [open, setOpen] = React.useState(false);
    
    const handleClose = (event, reason) => {
        setOpen(false);

    };

    const [openAddSpraylog, setOpenAddSpraylog] = React.useState(false);
    const handleClickOpen = () => {
      setOpenAddSpraylog(true);
  };
    const handleCloseSpraylog = (event, reason) => {
      setOpenAddSpraylog(false);

    };

  const handleChange = (event) => {
    setdescription(event.target.value);
    setdataedit(event.target.value)
    if (event.target.value=='') {
        setbool(true)
        sethelper("Required")
    }
    else{
        setbool(false)
        sethelper("")
    }
};


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
    
{ title: t('activities.contract','Contract'), field: "contract",  
lookup: { 'no': 'No',
'yes': 'Yes'}
},
    
    { title: t('activities.approved','Approved'), field: "approved",lookup: { 'no': 'No',
    'yes': 'Yes'}
   },
    { title: t('activities.description','Description'), field: "description" },
    { title: t('activities.duedate','Due Date'), field: "duedate", type:"date", filtering: false },
    { title: t('activities.started','Started'), field: "started",lookup: { 'no': 'No',
    'yes': 'Yes'} },
    { title: t('activities.completed','Completed '), field: "completed", lookup: { 'no': 'No',
    'yes': 'Yes'} },
    
  ];
 
  return (
    <div  className= "table-size">
    
    <div className= "subheader">
             
        <h1 style={{"color": "black", "margin-bottom":"0px"}}><Trans i18nKey="spraylogs.heading">Spray Logs</Trans> </h1><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      
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
          data={selected ? spraylogsData_withcomplete : spraylogsData_withoutcomplete}
          
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
              emptyDataSourceMessage:t('materialtable.emptydatasourcemessage','No records to diplay'),
              editRow:{
                deleteText:t('materialtable.deletetext','Are you sure you want to delete?'),
                cancelTooltip:t('materialtable.editrowcanceltip','Cancel'),
                saveTooltip:t('materialtable.editrowsavetooltip','Save')
              },
              filterRow:{
                filterTooltip:t('materialtable.filtertooltip','Filter')
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
              <Tooltip placement="bottom" title={props.value ? props.value : ''}>
                <MTableCell {...props} />
              </Tooltip>       /// Add translation for tooltip also
            ),
          }}
            actions={[
            {
              icon: () => <AddCircleRoundedIcon fontSize="large" color="primary" />,
              isFreeAction: true,
              onClick: (event) => setOpen(true),
              tooltip: 'New Item'
            },
            {
              icon: () => <CreateIcon color="action" />,
              tooltip: 'Edit Item'
             
            },
          
            ]}
        ></MaterialTable>
         <Dialog open={open} onClose={handleClose}>
            <DialogTitle>New Item</DialogTitle>
            <DialogContent>
                <Box component="form" sx={{ display: 'grid' }}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 420 }}>
                        <TextField
                            variant="standard"
                            name="description"
                            label="Description"
                            value={description}
                            onChange={handleChange}
                            helperText={helper}
                            error={bool}
                            required
                            autocomplete="off"
                        />
                    </FormControl>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">CANCEL</Button>
                <Button onClick={handleClickOpen} color="primary">SAVE</Button>
            </DialogActions>
          </Dialog>
          
          <Dialog open={openAddSpraylog} onClose={handleCloseSpraylog} maxWidth="100" scroll="paper">
                <DialogTitle sx={{ fontSize: 24, fontWeight: 'large' }}>{description}</DialogTitle>
                <DialogContent dividers>
                <SampleContextProvider>
                    <Addspraylog />
                    </SampleContextProvider>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseSpraylog} color="primary">CANCEL</Button>
                    <Button onClick={handleCloseSpraylog} color="primary">SAVE</Button>
                </DialogActions>
            </Dialog>
           
                            
      </div>
    </div>
  );
}
