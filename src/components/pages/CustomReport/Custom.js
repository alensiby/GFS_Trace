import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';
import { Segment } from 'semantic-ui-react';
import ReportTableDetails from './ReportTableDetails';
import { Grid } from '@mui/material';

function Custom() {
  const [field, setfield] = React.useState("");
  const [value, setValue] = React.useState([null, null]);
  const handleChange = (event) => {
    setfield(event.target.value);
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <h1>Custom Reports</h1>
        </Grid>
        <Grid item xs={3}>
          <br />
          <select class="ui dropdown" style={{ width: 200, backgroundColor: 'green', color: 'white' }} onChange={handleChange}>
            <option value="" >Farms</option>
            <option value={2} >Paddocks</option>
            <option value={3} >Equipment</option>
            <option value={4} >Grain</option>
            <option value={5}>Chemicals</option>
            <option value={6} >Fuel</option>
            <option value={7}>Fertilisers</option>
          </select>
        </Grid>

        <Grid item xs={5}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div>
              <Typography sx={{ mt: 2, mb: 1 }}>Date Range </Typography>
              <DateRangePicker
                calendars={1}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField variant="standard" {...startProps}/>
                    <Box sx={{ mx: 2 }}> ~ </Box>
                    <TextField variant="standard" {...endProps} />
                  </React.Fragment>
                )}

              />
            </div>
          </LocalizationProvider>
        </Grid>
      </Grid>
      <br />
      <br />
      {/* <Segment attached='bottom'> */}
      <div><ReportTableDetails dataValue={field} /></div>
      {/* </Segment> */}
    </div>
  )
}

export default Custom
