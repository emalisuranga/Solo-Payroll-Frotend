import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import InputField from './InputField';
import Grid from "@mui/material/Grid";

const RegisterForm = ({ fields, onChange }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    const newFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(newFormData);
    onChange(newFormData);
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


