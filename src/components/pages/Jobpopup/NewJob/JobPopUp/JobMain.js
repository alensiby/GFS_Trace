import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import JobDialog from './JobDialog';

const useStyles=makeStyles(theme=>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3)
    }
}))
function JobMain() {
    const classes=useStyles();
    return (
        <div>
            <>
           
                <JobDialog/>
           
            </>
        </div>
    )
}

export default JobMain
