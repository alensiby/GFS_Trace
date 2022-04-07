import React, { useState } from "react";

import { Button, Dialog, DialogActions, DialogContent, TextField } from '@material-ui/core'

import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';


import { InputLabel, MenuItem, Grid, Select as MuiSelect } from '@material-ui/core';
import { LocalMovies } from "@material-ui/icons";

export default function Chemicals() {

  const [chemical, setchemical] = React.useState("");
  const [rate, setrate] = React.useState("");
  const [batch, setbatch] = React.useState("");
  const [unit, setunit] = React.useState("");
  const [actives, setactives] = React.useState("");
  const [res, setres] = React.useState("");
    
  const [bool, setbool] = React.useState(false);
  const [helper, sethelper] = React.useState("");
  const [open, setOpen] = React.useState(false);
  
  const chemical_options =[
      {id:'1', chem:'Chem1', actives: "active1", resgroup: "res1", rate: "12", unit: "L/ha"},
      {id:'2', chem:'Chem2', actives: "active2", resgroup: "res2", rate: "20", unit: "Kg/ha"},
   
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
     

   
  const handleClose= () => {
      setOpen(false);

  };

  const handleChange1 = (event, value) => {
       
    setunit(event.target.value);
    
   
};

const handleClickchemical = (event) => {
  setOpen(true)
}

const handleOk = (event) => {
  setchemical(chemical);
  
}
const handleChange = (e, index) => {
  setchemical(chemical_options[index].chem);
  setrate( chemical_options[index].rate);
  setactives( chemical_options[index].actives);
  setunit( chemical_options[index].unit);
  setres( chemical_options[index].resgroup);
  
};
  




  
  return (
   <div> 
     <span align="right"><Button variant="text" color="primary" onClick={handleClickchemical}><b>ADD</b></Button></span>
         <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Chemicals/Additives</DialogTitle>
                <DialogContent>
                  <Box component="form" sx={{ display: 'grid' }}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 420 }}>
                    <InputLabel>Chemical</InputLabel>
                      <MuiSelect
                          label="Chemical"
                          name="chem"
                          value={chemical}
                          displayEmpty>
                          
                          {
                              chemical_options.map(
                                (item, index) => (<MenuItem key={item.id} value={item.chem} onClick={(event) => handleChange(event, index)}>{item.chem}</MenuItem>)
                              )
                          }
                      </MuiSelect>
                  </FormControl>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 420 }}>
                  <Grid >
                          <TextField
                          
                              variant="standard"
                              name="actives"
                              
                              label="Actives"
                              value={actives}
                              
                              error={bool}
                              helperText={helper}
                              autocomplete="off"
                              
                              InputProps={
                                {readOnly: true,}
                              }
                              style = {{width: 420}}
                          />
                      </Grid>
                  </FormControl>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 420 }}>
                  <Grid >
                          <TextField
                              variant="standard"
                              name="res"
                              
                              label="Resistance Group"
                              value={res}
                             
                              error={bool}
                              helperText={helper}
                              autocomplete="off"
                              
                              InputProps={
                                {readOnly: true,}
                              }
                              style = {{width: 420}}
                          />
                      </Grid>
                  </FormControl>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 420 }}>
                  <Grid >
                          <TextField
                              variant="standard"
                              name="batch"
                              type="number"
                              label="Batch No."
                              value={batch}
                              onChange={handleChange1}
                              error={bool}
                              helperText={helper}
                              autocomplete="off"
                              style = {{width: 420}}
                            
                          />
                      </Grid>
                  </FormControl>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 420 }}>
                  <Grid container alignItems="flex-end">
                      <Grid >
                          <TextField
                              variant="standard"
                              name="rate"
                              type="number"
                              label="Application rate"
                              value={rate}
                              
                              error={bool}
                              helperText={helper}
                              autocomplete="off"
                              style = {{width: 340}}
                          />
                      </Grid>
                        <Grid >
                          <InputLabel>Unit</InputLabel>
                              <MuiSelect
                                  maxLength={200}
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
   </div>        
                            
  )     
}
