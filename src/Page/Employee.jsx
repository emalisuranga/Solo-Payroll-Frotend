import React, { useState } from 'react';
import { Box, Typography, Grid, Button, TextField, MenuItem } from '@mui/material';
import TableComponent from '../Component/Table';

const initialData = [
  { id: 1, name: 'John Doe', position: 'Developer' },
  { id: 2, name: 'Jane Smith', position: 'Designer' },
  { id: 3, name: 'Sam Johnson', position: 'Manager' },
  // Add more data as needed
];

const headers = ["ID", "Name", "Position", "Action"];

const Employee = () => {
  const [searchName, setSearchName] = useState("");
  const [searchId, setSearchId] = useState("");
  const [tableData, setTableData] = useState(initialData);

  const handleSearch = () => {
    const filteredData = initialData.filter(item =>
      (searchName === "" || item.name.toLowerCase().includes(searchName.toLowerCase())) ||
      (searchId === "" || item.id.toString() === searchId)
    );
    setTableData(filteredData);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5">ALL EMPLOYEE</Typography>
            <Button variant="contained">Add Employee</Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="Name"
              variant="outlined"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <TextField
              label="ID"
              variant="outlined"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              select
              sx={{ width: 100 }}  // Adjust the width here
            >
              {initialData.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.id}
                </MenuItem>
              ))}
            </TextField>
            <Button variant="contained" onClick={handleSearch}>Search</Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TableComponent headers={headers} data={tableData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Employee;