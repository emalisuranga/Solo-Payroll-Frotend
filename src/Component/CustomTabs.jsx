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

function CustomTabs({ sections, onSubmit }) {
  const [value, setValue] = useState(0);
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
        <Button variant="outlined" color="primary" onClick={handleClear}>
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
