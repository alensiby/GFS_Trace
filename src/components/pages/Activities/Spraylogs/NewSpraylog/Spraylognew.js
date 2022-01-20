import React from 'react'
import { Grid } from '@material-ui/core';
import { Useform, Form } from './Useform';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import SelectCheck from './controls/SelectCheck';
import *as activityAssign from './services/ActivityAssign';
import Equipment from './controls/Equipment';
import Farms from './controls/Farms';
import Chemicals from './controls/Chemicals';
import MyDatePicker from './controls/MyDatePicker';
import { Button, Fade, FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import './destxt.css'
import { SampleContext } from './context/SampleContext';
import { TextareaAutosize } from '@mui/material';
import { Switch } from '@mui/material';


const initialValues = {
  
    operators: '',
    equipment: '',
    dueDate: new Date(),
    priority: '',
    started: '',
    completed: '',
    restartjob: '',
    description: "",
    notes: "",
}

function Jobnew() {

    const {
        values,
        setValues,
        handleInputChange
    } = Useform(initialValues);

    const { bool, setbool } = React.useContext(SampleContext);
    const [status, setstatus] = React.useState('');
    const [startdate, setstartdate] = React.useState('None');
    const [starttime, setstarttime] = React.useState('');
    const [enddate, setenddate] = React.useState('None');
    const [endtime, setendtime] = React.useState('');
    const [img, setimg] = React.useState();
    const date = "";
    var d = 3;
    const [checked, setChecked] = React.useState(false);

    const [selected, toggleselected] = React.useState(false);
    
    const handleChange = (event) => {
        setstatus(event.target.value);
        d = event.target.value;
        setimg(activityAssign.getStatus()[d - 1].icon);
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
        setimg(activityAssign.getStatus()[2].icon);
    }
    
    return (
        <Form>
           
                <Grid item xs={12} sm={11}>
                    
                    <SelectCheck
                        name="operators"
                        label="OPERATORS"
                        value={values.operators}
                        onChange={handleInputChange}
                        restart={bool}
                        choice="names"

                    />
                   
                        <Grid item xs={14} sm={14}>
                            <MyDatePicker
                                name="dueDate"
                                label="Due Date"
                                value={values.dueDate}
                                onChange={handleInputChange}
                                restart={bool}
                            />
                       
                    <br /><br />
                   
                    <Grid container spacing={2} >
                        <Grid item xs={6} sm={6}>
                            <FormGroup>
                                <FormControlLabel control={<Switch 
                                    onClick={() => toggleselected(!selected)}
                                    checked={selected}
                                    
                                />} 
                                label="Contract" 
                                />
        
                            </FormGroup>
                           
                        </Grid>
                    </Grid>
                        
                    
                    <br />
                    <Grid container >
                        <Grid container spacing={2} >
                            <Grid item xs={6} sm={6}  >
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
                        <br />
                        <Grid container spacing={0} alignItems="center">
                            <Grid item xs={0} sm={0} md={0}>
                                <br />
                                {img}
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <FormControl
                                    variant="standard">
                                    <InputLabel>STATUS</InputLabel>
                                    <MuiSelect
                                        label="STATUS"
                                        name="status"
                                        value={status}
                                        onChange={handleChange}
                                        inputProps={{ readOnly: bool }}>
                                        {
                                            activityAssign.getStatus().map(
                                                item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                                            )
                                        }
                                    </MuiSelect>
                                </FormControl>
                            </Grid>
                            <Grid item xs={5} md={5}>
                                <Fade in={checked}>
                                <Grid item xs={6} sm={6}>
                                    <div align="right"><Button variant="text" color="primary" onClick={handleClick}><b>RE-START JOB</b></Button></div>
                                </Grid>
                                   
                                </Fade>
                            </Grid>
                        </Grid>
                    </Grid >
                    </Grid>
            </Grid>
                    <br />
                    <div className="des">
                        <label>SPRAY EQUIPMENT</label>
                    </div>
                  
                    <Equipment
                        name="equipment"
                        label="Equipment"
                        value={values.equipment}
                        onChange={handleInputChange}
                        options={activityAssign.getCategory()}
                        restart={bool}
                    />
                    <br />
                    
                    <div className="des">
                        <label>FARMS / PADDOCKS</label>
                    </div>
                   
                    
                     <br />
                     <Farms
                                    name="farms"
                                    label="Farm"
                                    value={values.equipment}
                                    onChange={handleInputChange}
                                   
                                    restart={bool}
                                    />
                    
                    
                    

                    <div className="des">
                        <label>CHEMICALS / ADDITIVES</label>
                    </div>
                    <br />
                    <Chemicals
                                    name="chemicals"
                                    label="Chemicals"
                                    value={values.equipment}
                                    onChange={handleInputChange}
                                   
                                    restart={bool}
                                    />                
                
                     

                    <div className="des">
                        <label>APPLICATION DETAILS</label>
                    </div>
                    <br />
                    <TextareaAutosize style={{border:"none",outline:"none",width:700, height:200}}/>

                    <div className="des">
                        <label>NOTES</label>
                    </div>
                    <br />
                    <TextareaAutosize style={{border:"none",outline:"none",width:700, height:200}}/>
                    
        </Form>

    )
}

export default Jobnew

