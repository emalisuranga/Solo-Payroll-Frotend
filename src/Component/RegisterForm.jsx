import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import Button from "./Button";

const RegisterForm = ({ fields, onSubmit, submitButtonText, clearButtonText }) => {
  const initialFormState = Object.fromEntries(
    fields.map((field) => [field.name, ""])
  );

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const handleClear = () => {
    setFormData(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
        <SubmitButton variant="contained" color="primary" type="submit">
          {submitButtonText}
        </SubmitButton>
        <Button variant="contained" color="secondary" onClick={handleClear}>
          {clearButtonText}
        </Button>
      </Stack>
    </form>
  );
};

export default RegisterForm;
