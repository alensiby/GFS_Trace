import React,{useState} from 'react'
import {makeStyles} from '@material-ui/core';


function Useform(initialValues) {

    const [values, setValues] = useState(initialValues);
    
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    return {
        values,
        setValues,
        handleInputChange

    }
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '100%',
            margin: theme.spacing(1)
        }
    }
}))

function Form(props) {
    const classes=useStyles();
    return (
        <div>
            <form className={classes.root} autoComplete="off">
{props.children}
            </form>
        </div>
    )
}

export {Useform,Form}

