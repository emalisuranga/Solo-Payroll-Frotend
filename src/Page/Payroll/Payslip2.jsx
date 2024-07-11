import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const CustomTableCell = styled(TableCell)({
  border: "2px solid black", // Add outline to each cell
  width: "150px", // Set the width of each cell
  padding: "8px", // Adjust padding to fit within 150px
  boxSizing: "border-box", // Ensure padding and border are included in width
});

const ThreeRowTable = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        mt: 4,
      }}
    >
      <Paper>
        <Table sx={{ width: "450px" }}>
          <TableBody>
            <TableRow>
              <CustomTableCell>
                <Typography variant="h6" align="center">
                  株式会社SOLA
                </Typography>
              </CustomTableCell>
            </TableRow>
            <TableRow>
              <CustomTableCell>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2">令和6年6月支給分</Typography>
                  <Typography variant="body2">給料明細書</Typography>
                </Box>
              </CustomTableCell>
            </TableRow>
            <TableRow>
              <CustomTableCell>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1">ガヤシャン</Typography>
                  <Typography variant="body1">殿</Typography>
                </Box>
              </CustomTableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Box sx={{ mt: 4 }}>
          <Table sx={{ width: "250px" }}>
            <TableBody>
              <TableRow>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    部門名
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center"></Typography>
                </CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    役職名
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center"></Typography>
                </CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    社員NO
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    12
                  </Typography>
                </CustomTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Paper>
    </Box>
  );
};

export default ThreeRowTable;
