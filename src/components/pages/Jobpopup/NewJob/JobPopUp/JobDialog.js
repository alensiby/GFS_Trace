import { Button } from '@mui/material'
import React from 'react'
import Jobnew from './Jobnew'
//import Icon from '@mui/material/Icon';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import SampleContextProvider from '../context/SampleContext';
import { Icon} from 'semantic-ui-react';
import { fontWeight } from '@mui/system';
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
            
        <button  onClick={handleClickOpen} class="circular ui icon button green" style={{"margin-left": "20px"}}> 
     
 <Icon inverted name='white plus'/>
</button>
            <Dialog open={open} onClose={handleClose} maxWidth="lg" scroll="paper">
                <DialogTitle sx={{fontSize:24, fontWeight:'large'}}>Job Details</DialogTitle>
                <DialogContent><SampleContextProvider>
                    <Jobnew />
                </SampleContextProvider>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>CANCEL</Button>
                    <Button onClick={handleClose}>SAVE</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
