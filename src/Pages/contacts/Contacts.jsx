import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from "./data";

const Contacts = () => {
  const theme = useTheme();

  return (
    <Box sx={{ height: 600, width: "80%", mx: "auto" }}>
      {rows?.length > 0 && columns?.length > 0 ? (
        <DataGrid
          rows={rows}
          columns={columns}
          pagination
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          aria-label="Manage team table"
          slots={{ toolbar: GridToolbar }}
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
              color: theme.palette.mode === "dark" ? "white" : "black",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.mode === "dark" ? "white" : "black",
              fontSize: 16,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.primary.light,
            },
          }}
        />
      ) : (
        <Box textAlign="center" mt={2}>
          No data available.
        </Box>
      )}
    </Box>
  );
};

export default Contacts;
