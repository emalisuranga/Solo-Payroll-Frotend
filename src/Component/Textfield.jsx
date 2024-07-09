import React from 'react';
import { TextField } from '@mui/material';

const InputField = ({ type, label, value, onChange, fullWidth, required, sx }) => {
  return (
    <TextField
      type={type}
      variant='outlined'
      color='secondary'
      label={label}
      onChange={onChange}
      value={value}
      fullWidth={fullWidth}
      required={required}
      sx={sx}
    />
  );
};

export default InputField;
