import React, { useState } from "react";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import BackButton from "../../Component/BackButton";
import CustomTabs from '../../Component/Tabs';
import RegisterForm from '../../Component/RegisterForm';


const AddEmployee = () => {

  const handleSubmit = (formData) => {
    console.log(formData);
  };

  const tabs = [
    {
      label: "Personal Info",
      content: <RegisterForm onSubmit={handleSubmit} />
    },
    {
      label: "Account Details",
      content: <RegisterForm onSubmit={handleSubmit} />
    },
    {
      label: "Other Info",
      content: <RegisterForm onSubmit={handleSubmit} />
    }
  ];

  return (
    <React.Fragment>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ mb: 4, mt: 2 }}
      >
        <BackButton />
        <Typography variant="h4">Register Form</Typography>
      </Stack>
      {/* <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="row">
          <InputField
            type="text"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            required
            sx={{ marginBottom: 4 }}
          />
          <InputField
            type="text"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            required
            sx={{ marginBottom: 4 }}
          />
        </Stack>
        <InputField
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          sx={{ marginBottom: 4 }}
        />
        <InputField
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          sx={{ marginBottom: 4 }}
        />
        <InputField
          type="date"
          label="Date of Birth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          fullWidth
          required
          sx={{ marginBottom: 4 }}
        />
        <SubmitButton variant="outlined" color="secondary" type="submit">
          Register
        </SubmitButton>
      </form> */}
      <CustomTabs tabs={tabs} />
    </React.Fragment>
    
  );
};

export default AddEmployee;
