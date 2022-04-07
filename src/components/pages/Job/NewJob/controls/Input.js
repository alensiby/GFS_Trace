import { TextField } from '@material-ui/core'
import React from 'react'

function Input(props) {
    const { name, label, value, onChange } = props
    return (
        <TextField           
            variant="standard"
            name={name}
            label={label}
            value="JESTEENA JOSE"
            InputProps={{
                readOnly: true,
              }}
        />
    )
}

export default Input
