import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import { InputLabel, MenuItem, Grid, Select as MuiSelect } from '@material-ui/core';
import Paddock1 from '../services/paddock.png'

export default function Farms(props) {
   
    const [farm, setfarm] = React.useState("");
    const [farm1, setfarm1] = React.useState("");
    const [farm2, setfarm2] = React.useState("");
    
    const [paddock2, setpaddock2] = React.useState("");  
    const [paddock, setpaddock] = React.useState("");  
    const [paddock1, setpaddock1] = React.useState("");   
    const [img, setimg] = React.useState('');
    const [openfarm, setopenfarm] = React.useState(false);
    const [bool, setbool] = React.useState(false);
    
    const farm_options =[
        {id:'1', title:'Farm1'},
        {id:'2', title:'Farm2'},
     
    ]
    const paddock_options =[
        {id:'1', title:'Paddock1'},
        {id:'2', title:'Paddock2'},
     
    ]

    const handleChange = (event, value) => {
       
        setfarm(value.props.children);
        setfarm1(event.target.value);
    };
    const handleClose = () => {
       
        setopenfarm(false);
      
    };
    
   

    const handleClickfarm = (event) => {
        setopenfarm(true)
    }

    const handleOk = (event) => {
        setfarm2(farm);
        setpaddock2(paddock);
            setopenfarm(false); 
            setimg(Paddock1);
            setbool(true);
        
    }
    const handleChange1 = (event, value) => {
        setpaddock(value.props.children);
        setpaddock1(event.target.value);
    }
   
   const { name, label, restart } = props;
    
    return (
        <div>
           
            <Button style={{display: bool ? 'block' : 'none' }} color="inherit" onClick={handleClickfarm} size="large" fullWidth="true">
                <Grid container spacing={0}>
                    <Grid item xs={0} sm={0} md={0}>
                        <img src={img} className="img" alt="tractor"></img>
                    </Grid>
                    <Grid item xs={3} md={0}>
                        <p>{farm2}</p>
                        <InputLabel>{paddock2}</InputLabel>
                     </Grid>
                </Grid>
            </Button>
           
                           {/* <Grid item xs={0} sm={0}>
                                <div><p>Estimated Total: 0 ha</p></div>
                           </Grid>*/}
                            <Grid item xs={0} sm={0}>
                                <span align="right"><Button variant="text" color="primary" onClick={handleClickfarm}><b>ADD</b></Button></span>
                               
                                <Dialog open={openfarm} onClose={handleClose}>
                                <DialogTitle>Farms/Paddocks</DialogTitle>
                                <DialogContent>
                                <Box component="form" sx={{ display: 'grid' }}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 420 }}>
                            <InputLabel>{label}</InputLabel>
                            <MuiSelect
                                label="Farm"
                                name="farm"
                                value={farm1}
                                onChange={handleChange}
                                displayEmpty>
                                
                                {
                                    farm_options.map(
                                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                                    )
                                }
                            </MuiSelect>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 420 }}>
                            <InputLabel>Paddock</InputLabel>
                            <MuiSelect
                                label="Paddock"
                                name="paddock"
                                value={paddock1}
                                onChange={handleChange1}
                                displayEmpty>
                                
                                {
                                    paddock_options.map(
                                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                                    )
                                }
                            </MuiSelect>
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