import React, { useState } from "react";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import BackButton from "../../Component/BackButton";
import CustomTabs from "../../Component/Tabs";
import RegisterForm from "../../Component/RegisterForm";

const AddEmployee = () => {
  const handleSubmit = (formData) => {
    console.log(formData);
  };

  const tabs = [
    {
      label: "Personal Info",
      content: (
        <RegisterForm
          fields={[
            {
              name: "firstName",
              type: "text",
              label: "First Name",
              required: true,
            },
            {
              name: "lastName",
              type: "text",
              label: "Last Name",
              required: true,
            },
            { name: "phone", type: "text", label: "Phone", required: true },
            { name: "address", type: "text", label: "Address", required: true },
            {
              name: "dateOfBirth",
              type: "date",
              label: "Date of Birth",
              required: true,
            },
            {
              name: "joinDate",
              type: "date",
              label: "Join Date",
              required: true,
            },
            {
              name: "department",
              type: "text",
              label: "Department",
              required: true,
            },
          ]}
          onSubmit={handleSubmit}
          submitButtonText="Register"
        />
      ),
    },
    {
      label: "Bank Details",
      content: (
        <RegisterForm
          fields={[
            {
              name: "bankAccountNumber",
              type: "text",
              label: "Bank Account Number",
              required: true,
            },
            {
              name: "bankName",
              type: "text",
              label: "Bank Name",
              required: true,
            },
            {
              name: "branchCode",
              type: "text",
              label: "Branch Code",
              required: true,
            },
          ]}
          onSubmit={handleSubmit}
          submitButtonText="Register"
        />
      ),
    },
    {
      label: "Salary Details",
      content: (
        <RegisterForm
          fields={[
            {
              name: "basicSalary",
              type: "text",
              label: "Basic Salary",
              required: true,
            },
            {
              name: "overtimePay",
              type: "text",
              label: "Overtime Pay",
              required: true,
            },
            { name: "transportationCosts", type: "text", label: "Transportation Costs", required: true },
            { name: "familyAllowance", type: "text", label: "Family Allowance", required: true },
            {
              name: "attendanceAllowance",
              type: "text",
              label: "Attendance Allowance",
              required: true,
            },
            {
              name: "leaveAllowance",
              type: "text",
              label: "Leave Allowance",
              required: true,
            },
            {
              name: "specialAllowance",
              type: "text",
              label: "Special Allowance",
              required: true,
            },
          ]}
          onSubmit={handleSubmit}
          submitButtonText="Register"
        />
      ),
    },
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
