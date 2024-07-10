import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CustomTabPanel from './CustomTabPanel';
import RegisterForm from './RegisterForm';
import SubmitButton from "./SubmitButton";
import Button from "./Button";

function CustomTabs({  onSubmit }) {
  const [value, setValue] = useState(0);
  const sections = [
    {
      label: "Personal Info",
      fields: [
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
      ],
    },
    {
      label: "Bank Details",
      fields: [
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
      ],
    },
    {
      label: "Salary Details",
      fields: [
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
        {
          name: "transportationCosts",
          type: "text",
          label: "Transportation Costs",
          required: true,
        },
        {
          name: "familyAllowance",
          type: "text",
          label: "Family Allowance",
          required: true,
        },
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
      ],
    },
  ];
  const [formData, setFormData] = useState(
    sections.reduce((acc, section) => {
      section.fields.forEach(field => {
        acc[field.name] = '';
      });
      return acc;
    }, {})
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFormChange = (newFormData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...newFormData,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleClear = () => {
    setFormData(
      sections.reduce((acc, section) => {
        section.fields.forEach(field => {
          acc[field.name] = '';
        });
        return acc;
      }, {})
    );
  };



  return (
    <Box onSubmit={handleSubmit} sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        {sections.map((section, index) => (
          <Tab key={index} label={section.label} {...a11yProps(index)} />
        ))}
      </Tabs>
      {sections.map((section, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <RegisterForm fields={section.fields} formData={formData} onChange={handleFormChange} />
        </CustomTabPanel>
      ))}
     <Stack direction="row" spacing={2} sx={{ marginTop: 2,justifyContent: 'flex-end'  }}>
        <SubmitButton variant="contained" color="primary" type="submit">
          Submit
        </SubmitButton>
        <Button variant="contained" color="secondary" onClick={handleClear}>
         Clear
        </Button>
      </Stack>
    </Box>
    
  );
}

CustomTabs.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      fields: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          required: PropTypes.bool,
        })
      ).isRequired,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default CustomTabs;
