import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Paper,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import InputField from "../../Component/InputField";

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
      <Paper
        sx={{
          width: "100%", // Ensure Paper takes full width of Box
          maxWidth: "100%", // Max width if needed
          p: 2, // Padding
        }}
      >
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

        <Grid container spacing={2} sx={{ mt: 6 }}>
          <Grid item xs={5}>
            <Typography variant="body2" align="left">
              令和6年6月支給分
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" align="left">
              給料明細書
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Table sx={{ width: 1000 }}>
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
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    部門名
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center"></Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    部門名
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center"></Typography>
                </CustomTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          {/* First Table */}
          <Grid item xs={8}>
            <Table sx={{ height: 100 }}>
              <TableBody>
                {/* First Row */}
                <TableRow>
                  <CustomTableCell rowSpan={4}>
                    <Typography variant="body2" align="center">
                      Row 1, Col 1
                    </Typography>
                  </CustomTableCell>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 1, Col 2
                    </Typography>
                  </CustomTableCell>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 1, Col 3
                    </Typography>
                  </CustomTableCell>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 1, Col 4
                    </Typography>
                  </CustomTableCell>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 1, Col 5
                    </Typography>
                  </CustomTableCell>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 1, Col 6
                    </Typography>
                  </CustomTableCell>
                </TableRow>

                {/* Second Row */}
                <TableRow>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 2, Col 2
                    </Typography>
                  </CustomTableCell>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 2, Col 3
                    </Typography>
                  </CustomTableCell>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 2, Col 4
                    </Typography>
                  </CustomTableCell>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 2, Col 5
                    </Typography>
                  </CustomTableCell>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 2, Col 6
                    </Typography>
                  </CustomTableCell>
                </TableRow>

                {/* Third Row */}
                <TableRow>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 3, Col 2
                    </Typography>
                  </CustomTableCell>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 3, Col 3
                    </Typography>
                  </CustomTableCell>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 3, Col 4
                    </Typography>
                  </CustomTableCell>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 3, Col 5
                    </Typography>
                  </CustomTableCell>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 3, Col 6
                    </Typography>
                  </CustomTableCell>
                </TableRow>
                <TableRow>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 2, Col 2
                    </Typography>
                  </CustomTableCell>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 2, Col 3
                    </Typography>
                  </CustomTableCell>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 2, Col 4
                    </Typography>
                  </CustomTableCell>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 2, Col 5
                    </Typography>
                  </CustomTableCell>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 2, Col 6
                    </Typography>
                  </CustomTableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>

          {/* Second Table */}
          <Grid item xs={4}>
            <Table sx={{ height: 153, width: "100%" }}>
              <TableBody>
                <TableRow>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 1
                    </Typography>
                  </CustomTableCell>
                </TableRow>
                <TableRow>
                  <CustomTableCell>
                    <Typography variant="body2" align="center">
                      Row 2
                    </Typography>
                  </CustomTableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>

        <Grid sx={{ mt: 2 }}>
          <Table sx={{ height: 100 }}>
            <TableBody>
              {/* First Row */}
              <TableRow>
                <CustomTableCell rowSpan={4}>
                  <Typography variant="body2" align="center">
                    Row 1, Col 1
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 2
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 3
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 4
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 5
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 6
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 5
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 6
                  </Typography>
                </CustomTableCell>
              </TableRow>

              {/* Second Row */}
              <TableRow>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 2
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 3
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 4
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 5
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 6
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 5
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 6
                  </Typography>
                </CustomTableCell>
              </TableRow>

              {/* Third Row */}
              <TableRow>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 3, Col 2
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 3, Col 3
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 3, Col 4
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 3, Col 5
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 3, Col 6
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 5
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 6
                  </Typography>
                </CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 2
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 3
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 4
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 5
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 6
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 5
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 6
                  </Typography>
                </CustomTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>

        <Grid sx={{ mt: 2 }}>
          <Table sx={{ height: 100 }}>
            <TableBody>
              {/* First Row */}
              <TableRow>
                <CustomTableCell rowSpan={4}>
                  <Typography variant="body2" align="center">
                    Row 1, Col 1
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 2
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 3
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 4
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 5
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 6
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 5
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 6
                  </Typography>
                </CustomTableCell>
              </TableRow>

              {/* Second Row */}
              <TableRow>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 2
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 3
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 4
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 5
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 6
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 5
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 6
                  </Typography>
                </CustomTableCell>
              </TableRow>

              {/* Third Row */}
              <TableRow>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 3, Col 2
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 3, Col 3
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 3, Col 4
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 3, Col 5
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 3, Col 6
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 5
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 6
                  </Typography>
                </CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 2
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 3
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 4
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 5
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 2, Col 6
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 5
                  </Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography variant="body2" align="center">
                    Row 1, Col 6
                  </Typography>
                </CustomTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
        <InputField
          type="text"
          label="備考"
          name="remarks"
          value=""
          fullWidth
          sx={{ mt: 4 }}
          rows={15}
          maxRows={15}
        />
      </Paper>
    </Box>
  );
};

export default ThreeRowTable;
