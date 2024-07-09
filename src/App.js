import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import Employee from "./Page/Employee";
import AddProduct from "./Page/AddProduct";
import Settings from "./Page/Settings";
import AddEmployee from "./Page/Employee/AddEmployee";
import SideBar from "./Component/SideBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <SideBar />
          <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "40px" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/addemployee" element={<AddEmployee />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </>
  );
}
