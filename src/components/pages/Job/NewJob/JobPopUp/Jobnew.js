import React from 'react'
import { Grid } from '@material-ui/core';
import { Useform, Form } from './Useform';
import Input from './controls/Input';
import Select from './controls/Select';
import SelectCheck from './controls/SelectCheck';
import *as jobAssign from './services/JobAssign';
import Category from './controls/Category';
import MyDatePicker from './controls/MyDatePicker';
import { Button, Fade, FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import './destxt.css'
import { SampleContext } from '../context/SampleContext';
import { TextareaAutosize } from '@mui/material';
import { border, height } from '@mui/system';


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

function Jobnew() {

    const {
        values,
        setValues,
        handleInputChange
    } = Useform(initialValues);

    const { bool, setbool } = React.useContext(SampleContext)
    const [status, setstatus] = React.useState('');
    const [startdate, setstartdate] = React.useState('None');
    const [starttime, setstarttime] = React.useState('');
    const [enddate, setenddate] = React.useState('None');
    const [endtime, setendtime] = React.useState('');
    const [img, setimg] = React.useState();
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
        <Form>
            <Grid container>
                <Grid item xs={12} sm={11}>
                    <Input
                        name="creator"
                        label="CREATOR"
                        value={values.creator}
                        onChange={handleInputChange}
                    />
                    <SelectCheck
                        name="assigned"
                        label="ASSIGNED"
                        value={values.assigned}
                        onChange={handleInputChange}
                        restart={bool}

                    />
                    <br /><br />
                    <Category
                        name="category"
                        label="Category"
                        value={values.category}
                        onChange={handleInputChange}
                        options={jobAssign.getCategory()}
                        restart={bool}
                    />
                    <Grid container spacing={10}>
                        <Grid item xs={12} sm={5}>
                            <MyDatePicker
                                name="dueDate"
                                label="Due Date"
                                value={values.dueDate}
                                onChange={handleInputChange}
                                restart={bool}
                            />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Select
                                name="priority"
                                label="PRIORITY"
                                value={values.priority}
                                onChange={handleInputChange}
                                options={jobAssign.getPriority()}
                                restart={bool}
                            />
                        </Grid>
                    </Grid>
                    <br />
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
                                            jobAssign.getStatus().map(
                                                item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                                            )
                                        }
                                    </MuiSelect>
                                </FormControl>
                            </Grid>
                            <Grid item xs={5} md={5}>
                                <Fade in={checked}>
                                    <Button variant="text" color="primary" onClick={handleClick}>RE-START JOB</Button>
                                </Fade>
                            </Grid>
                        </Grid>
                    </Grid >
                    </Grid>
            </Grid>
                    <br />
                    <div className="des">
                        <label>DESCRIPTION</label>
                    </div>
                    <br />
                    <TextareaAutosize style={{border:"none",outline:"none",width:700, height:200}}disabled={bool}/>
                    <div className="des">
                        <label>NOTES</label>
                    </div>
                    <br />
                    <TextareaAutosize style={{border:"none",outline:"none",width:700, height:200}}/>
        </Form>

    )
}

export default Jobnew

