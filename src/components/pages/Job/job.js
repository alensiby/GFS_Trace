import React, { useState } from "react";
import MaterialTable, { MTableCell }  from "material-table";
import { Checkbox, Modal, Icon, Form, Button, Input } from "semantic-ui-react";
import "./job.css";
import '../Pages.css';
import Tooltip from '@material-ui/core/Tooltip';
import {useTranslation,Trans} from 'react-i18next';
import CreateIcon from '@mui/icons-material/Create';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { Useform} from './Useform';
import Select from './controls/Select';
import SelectCheck from './controls/SelectCheck';
import *as jobAssign from './services/JobAssign';
import Category from './controls/Category';
import MyDatePicker from './controls/MyDatePicker';
import { Grid,TextField, Fade, FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import './destxt.css'
import { TextareaAutosize } from '@mui/material';

import {
  jobData_withoutcomplete,
  jobData_withcomplete,
} from "../../../Data/JobData";

const initialValues = {
    creator: '',
    assigned: '',
    category: '',
    dueDate: new Date(),
    priority: '',
    started: '',
    completed: '',
    restartjob: '',
    description: "",
    notes: "",
}

export default function Job() {

  const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
   

  const [selected, toggleselected] = useState(false);
  const [rowdatas, setrowdatas] = React.useState({});
  const [newedit, setnewedit] = React.useState(true);
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
 
  const {
    values,
    setValues,
    handleInputChange
} = Useform(initialValues);

const [bool, setbool] = React.useState(false);
const [status, setstatus] = React.useState(1);
const [startdate, setstartdate] = React.useState('None');
const [starttime, setstarttime] = React.useState('');
const [enddate, setenddate] = React.useState('None');
const [endtime, setendtime] = React.useState('');
const [img, setimg] = React.useState(<Icon name='blue circle outline' size='large'/>);
const date = "";
var d = 3;
const [checked, setChecked] = React.useState(false);

const handleChange = (event) => {
    setstatus(event.target.value);
    d = event.target.value;
    setimg(jobAssign.getStatus()[d - 1].icon);
    if (d == 3 || (status <= 2 && d > 3)) {
        const current = new Date();
        const date = current.toLocaleDateString('en-GB',
            {
                day: '2-digit', month: 'long', year: 'numeric'
            }).replace(/ /g, ' ');
        setstartdate(date);
        setstarttime(current.toLocaleTimeString("en-US",
            {
                hour: "2-digit",
                minute: "2-digit",
            }));
    }
    if (d == 5) {
        const current = new Date();
        setChecked(true);
        setbool(true);
        const date = current.toLocaleDateString('en-GB',
            {
                day: '2-digit', month: 'long', year: 'numeric'
            }).replace(/ /g, ' ');
        setenddate(date);
        setendtime(current.toLocaleTimeString("en-US",
            {
                hour: "2-digit",
                minute: "2-digit",
            }));

    }

};

const handleClick = (e) => {
    setChecked(false);
    setbool(false);
    setenddate('None');
    setendtime('');
    setstatus(3);
    setimg(jobAssign.getStatus()[2].icon);
}


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
      <Modal onClose={() => setOpen(false)} open={open} as={Form}  size='small'>
        <Modal.Header>
          {newedit === true ? "New Job" : "Edit Job"}
        </Modal.Header>
        <Modal.Content>
        
        <Form>
             <InputLabel>CREATOR</InputLabel>
                <FormControl fullWidth>
                    <TextField                    
                        name="creator"
                        value="JESTEENA JOSE"
                        variant="standard"
                        fluid
                        InputProps={{
                            readOnly: true,
                          }}
                        onChange={handleInputChange}
                        defaultValue=""
                    />
                </FormControl>
                    <br/><br/>
                   
                    <SelectCheck
                        name="assigned"
                        label="ASSIGNED"
                        value={values.assigned}
                        onChange={handleInputChange}
                    />
                    <br /><br />
                    <Category
                        name="category"
                        label="Category"
                        value={values.category}
                        onChange={handleInputChange}
                        options={jobAssign.getCategory()}
                        
                    />
                    <br /><br />
                  
                    <InputLabel>DUE DATE</InputLabel>
                   
                            <MyDatePicker
                                name="dueDate"
                                
                                value={values.dueDate}
                                onChange={handleInputChange}
                                defaultValue={rowdatas.duedate}
                            />
                      <br /><br /> <br />
                        
                            <Select
                                name="priority"
                                label="PRIORITY"
                                value={values.priority}
                                
                                onChange={handleInputChange}
                                options={jobAssign.getPriority()}
                                
                            />    
                    <br /> <br />
                    <Grid container >
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6}>
                                <InputLabel>STARTED</InputLabel>
                                <p>{startdate}</p>
                                <p>{starttime}</p>
                            </Grid>
                            
                            <Grid item xs={6} sm={6}>
                                <InputLabel>COMPLETED</InputLabel>
                                <p>{enddate}</p>
                                <p>{endtime}</p>
                            </Grid>
                        </Grid>
                        <br /><br />  <br /><br />
                        <Grid container spacing={0} alignItems="center">
                            <Grid item xs={0} sm={0} md={0}>
                                <br />
                                {img}
                            </Grid>
                            <Grid item xs={30} md={4}>
                                <FormControl fullWidth
                                    variant="standard">
                                    <InputLabel>STATUS</InputLabel>
                                    <MuiSelect
                                        label="STATUS"
                                        name="status"
                                        value={status}
                                        onChange={handleChange}
                                        inputProps={{ readOnly: bool }}>
                                        {
                                            jobAssign.getStatus().map(
                                                item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                                            )
                                        }
                                    </MuiSelect>
                                </FormControl>
                                </Grid>
                            <Grid item xs={30} md={5}>
                                <Fade in={checked}>
                                    <p style={{cursor:'pointer', paddingLeft:'95px', color:'green'}} onClick={handleClick}>RE-START JOB</p>
                                </Fade>
                            </Grid>
                        </Grid>
                    </Grid >
                    <br />
                    <div className="des">
                        <label>DESCRIPTION</label>
                    </div>
                    <br />
                    <TextareaAutosize style={{border:"none",outline:"none",width:650, height:200}}/>
                    <div className="des">
                        <label>NOTES</label>
                    </div>
                    <br />
                    <TextareaAutosize style={{border:"none",outline:"none",width:650, height:200}}/>
        </Form>
            </Modal.Content>
        <Modal.Actions>
          <Button type="submit" color="black" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            content="Save"
            labelPosition="right"
            icon="checkmark"
            onClick={() => {
              setOpen(false);
             
            }}
            positive
          />
        </Modal.Actions>
      </Modal>
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
            <Tooltip placement="bottom" title={props.value ? props.value : ''}>
              <MTableCell {...props} />
            </Tooltip>       /// Add translation for tooltip also
          ),
        }}
          actions={[
          {
            icon: () => <AddCircleRoundedIcon fontSize="large" color="primary" />,
            isFreeAction: true,
            onClick: () => {
                setnewedit(true);
                setrowdatas({});
                setOpen(true);
              },
          },
          {
            icon: () => <CreateIcon color="action" />,
           
            onClick: (rowData, e) => {
                setnewedit(false);
                setrowdatas(e);
                setOpen(true);
              },
          },
          {
            icon: () => <DeleteIcon color="action" />
          }
          ]}
        ></MaterialTable>        
      </div>
    </div>
  );
}
