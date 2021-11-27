import { Button } from '@mui/material'
import React from 'react'
import Jobedit from './Jobedit'
import Icon from '@mui/material/Icon';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import SampleContextProvider from '../context/SampleContext';
import { fontWeight } from '@mui/system';
import EyeIcon from 'mdi-react/EyeIcon';
export default function JobDialog() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        setOpen(false);

    };

    return (
        <div>
           
                <EyeIcon onClick={handleClickOpen} style={{"color":"grey", "cursor":"pointer","margin": "0px"}}/>
        
            <Dialog open={open} onClose={handleClose} maxWidth="lg" scroll="paper">
                <DialogTitle sx={{fontSize:24, fontWeight:'large'}}>Job Details</DialogTitle>
                <DialogContent>
                <SampleContextProvider>
                    <Jobedit />
                </SampleContextProvider>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>DELETE</Button>
                    <Button onClick={handleClose}>CANCEL</Button>
                    <Button onClick={handleClose}>SAVE</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
