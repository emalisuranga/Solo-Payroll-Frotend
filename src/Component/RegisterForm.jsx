import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import InputField from './InputField';
import Grid from "@mui/material/Grid";

const RegisterForm = ({ fields, formData, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <form>
    <Grid container spacing={2}>
        {fields.map((field, index) => (
          <Grid item xs={6} key={field.name}>
            <InputField
              type={field.type}
              label={field.label}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              fullWidth
              required={field.required}
              sx={{ marginBottom: 4 }}
            />
          </Grid>
        ))}
      </Grid>
    </form>
  );
};

export default RegisterForm;


