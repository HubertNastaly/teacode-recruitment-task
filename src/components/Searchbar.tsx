import { TextField, TextFieldProps } from '@mui/material'

export const Searchbar = (textFieldProps: TextFieldProps) => {
  return (
    <TextField {...textFieldProps} label="Search" fullWidth variant="outlined" color="primary" />
  )
}
