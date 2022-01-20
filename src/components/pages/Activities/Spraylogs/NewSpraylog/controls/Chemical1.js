import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import { InputLabel, MenuItem, Grid, TextField, Select as MuiSelect } from '@material-ui/core';
import Chemical_img from '../services/chemical.png'

export default function Chemicals(props) {
   
    const [chemical, setchemical] = React.useState("");
    const [chemical1, setchemical1] = React.useState("");
    const [chemical2, setchemical2] = React.useState("");
    
    const [paddock2, setpaddock2] = React.useState("");  
    const [paddock, setpaddock] = React.useState("");  
    const [unit, setunit] = React.useState("");   
    const [rate, setRate] = React.useState();
    const [helper, sethelper] = React.useState("");
    const [openchemical, setopenchemical] = React.useState(false);
    const [bool, setbool] = React.useState(false);
    
    const chemical_options =[
        {id:'1', title:'Chem1'},
        {id:'2', title:'Chem2'},
     
    ]
    const units = [
        { id: 1, title: 'ml/ha' },
        { id: 2, title: 'Kg/ha' },
        { id: 3, title: 'L/ha' },
        { id: 4, title: 'lb/ha' },
        { id: 5, title: 'oz/ha' },
        { id: 6, title: 'g/ha' },
        { id: 7, title: 'floz/ac' },
        { id: 8, title: 'qt/ac' },
        { id: 9, title: 'pt/ac' },
        { id: 10, title: 'oz/ac' },
        { id: 11, title: 'lb/ac' },
        { id: 12, title: 'g/ac' },
        { id: 13, title: 'Kg/1000L' },
        { id: 14, title: 't/ha' },
        { id: 15, title: 'L/Kg' },
        { id: 16, title: 'L/t' }
    ];
       
          
       
    const handleChange = (event, value) => {
       
        setchemical(value.props.children);
        setchemical1(event.target.value);
    };
    const handleChange3 = (event) => {
        setRate(event.target.value);
        if (event.target.value=='') {
            setbool(true)
            sethelper("Required")
        }
        else{
            setbool(false)
            sethelper("")
        }
    };
    const handleClose = () => {
       
        setopenchemical(false);
      
    };
    
   

    const handleClickchemical = (event) => {
        setopenchemical(true)
    }

    const handleOk = (event) => {
        setchemical2(chemical);
        setpaddock2(paddock);
            setopenchemical(false); 
            setbool(true);
        
    }
    const handleChange1 = (event) => {
     
        setunit(event.target.value);
    }
   
   const { name, label, restart } = props;
    
    return (
        <div>
           
            <Button style={{display: bool ? 'block' : 'none' }} color="inherit" onClick={handleClickchemical} size="large" fullWidth="true">
                <Grid container spacing={0}>
                    <Grid item xs={0} sm={0} md={0}>
                        <img src={Chemical_img} className="img" alt="tractor"></img>
                    </Grid>
                    <Grid item xs={3} md={0}>
                        <p>{chemical2}</p>
                        <InputLabel>{paddock2}</InputLabel>
                     </Grid>
                </Grid>
            </Button>
           
                            <Grid item xs={0} sm={0}>
                                <div><p>Estimated Total: 0 ha</p></div>
                            </Grid>
                            <Grid item xs={0} sm={0}>
                                <span align="right"><Button variant="text" color="primary" onClick={handleClickchemical}><b>ADD</b></Button></span>
                               
                                <Dialog open={openchemical} onClose={handleClose}>
                                 <DialogTitle>Chemicals/Additives</DialogTitle>
                                     <DialogContent>
                                       <Box component="form" sx={{ display: 'grid' }}>
                                        <FormControl variant="standard" sx={{ m: 1, minWidth: 420 }}>
                                         <InputLabel>{label}</InputLabel>
                                            <MuiSelect
                                                label="Chemical"
                                                name="chemical"
                                                value={chemical1}
                                                onChange={handleChange}
                                                displayEmpty>
                                                
                                                {
                                                    chemical_options.map(
                                                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                                                    )
                                                }
                                            </MuiSelect>
                                        </FormControl>
                                        <FormControl variant="standard" sx={{ m: 1, minWidth: 420 }}>
                                        <Grid container alignItems="flex-end">
                                            <Grid >
                                                <TextField
                                                    variant="standard"
                                                    name="rate"
                                                    label="Application rate"
                                                    value={rate}
                                                    onChange={handleChange3}
                                                    error={bool}
                                                    helperText={helper}
                                                    autocomplete="off"
                                                    maxLength={120}
                                                  
                                                />
                                            </Grid>
                                             <Grid >
                                                <InputLabel>Unit</InputLabel>
                                                    <MuiSelect
                                                        maxLength={120}
                                                        label="Unit"
                                                        name="unit"
                                                        value={unit}
                                                        onChange={handleChange1}
                                                        displayEmpty>
                                                        
                                                        {
                                                            units.map(
                                                                item => (<MenuItem key={item.id} value={item.title}>{item.title}</MenuItem>)
                                                            )
                                                        }
                                                    </MuiSelect>
                                            </Grid>
                                        </Grid>
                                           
                                        </FormControl>
                                      </Box>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} color="primary">CANCEL</Button>
                                        <Button onClick={handleOk} color="primary">SAVE</Button>
                                    </DialogActions>
                                </Dialog>
                            </Grid>
                            
            
        </div>
    );
}