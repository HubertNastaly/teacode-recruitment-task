import { TextField, TextFieldProps } from '@mui/material'

export const Searchbar = (textFieldProps: TextFieldProps) => {
  return (
    <TextField {...textFieldProps} fullWidth variant="outlined" />
  )
}
