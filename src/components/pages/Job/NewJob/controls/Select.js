import { FormControl, Grid, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import React from 'react'

export default function Select(props) {

    const { name, label, value, onChange, options,restart } = props;
    const [img, setimg] = React.useState();
    const [status, setstatus] = React.useState('');
    var d = 3;

    const handleChange = (event) => {
        setstatus(event.target.value);
        d = event.target.value;
        setimg(options[d - 1].icon);
    }
    return (
        <Grid container spacing={0} alignItems="center">
            <Grid item>
                <br />
                {img}
            </Grid>
            <Grid item xs={12} md={10}>
                <FormControl
                    variant="standard">
                    <InputLabel>{label}</InputLabel>
                    <MuiSelect
                        label={label}
                        name={name}
                        value={status}
                        onChange={handleChange}
                        inputProps={{ readOnly:restart }}>
                        {
                            options.map(
                                item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                            )
                        }
                    </MuiSelect>
                </FormControl>
            </Grid>
        </Grid>
    )
}
