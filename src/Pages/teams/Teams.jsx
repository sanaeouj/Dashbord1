import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import { rows } from './data'; // Ensure that rows contains data
import Header from "../../Components/Header";

const Teams = () => {
  const theme = useTheme();

  const columns = [
    { 
      field: "id", 
      headerName: "ID", 
      width: 90, 
      align: "center", 
      headerAlign: "center" 
    },
    { 
      field: "Name", 
      headerName: "Name", 
      flex: 1, 
      align: "center", 
      headerAlign: "center" 
    },
    { 
      field: "Email", 
      headerName: "Email", 
      flex: 1, 
      align: "center", 
      headerAlign: "center" 
    },
    { 
      field: "Age", 
      headerName: "Age", 
      flex: 1, 
      align: "center", 
      headerAlign: "center" 
    },
    { 
      field: "Phone", 
      headerName: "Phone", 
      flex: 1, 
      align: "center", 
      headerAlign: "center" 
    },
    { 
      field: "Access", 
      headerName: "Access", 
      flex: 1, 
      align: "center", 
      headerAlign: "center", 
      renderCell: ({ row }) => {
        const access = row.Access;

        return (
          <Box sx={{
            p: '5px', 
            m: '10px', 
            width: '109px', 
            borderRadius: '3px', 
            textAlign: 'center', 
            display: 'flex', 
            justifyContent: 'space-evenly',
            backgroundColor: access === 'Admin' 
              ? theme.palette.primary.dark 
              : access === 'User' 
              ? theme.palette.secondary.dark 
              : theme.palette.success.dark,
          }}>
            {access === "Admin" && <AdminPanelSettingsOutlined sx={{ color: '#FFF' }} fontSize="small" />}
            {access === "Manager" && <LockOpenOutlined sx={{ color: '#FFF' }} fontSize="small" />}
            {access === "User" && <SecurityOutlined sx={{ color: '#FFF' }} fontSize="small" />}
            <Typography sx={{ fontSize: "13px", color: '#FFF' }} variant="body1">{access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: "600px", width: "80%" }}>
      <Header Title="TEAM" subTitle="Managing the Team Members" />
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        aria-label="Manage team table"
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
            backgroundColor: theme.palette.mode === "dark" ? "black" : theme.palette.primary.light,
            color: theme.palette.mode === "dark" ? "white" : theme.palette.mode === "light" ? "black" : "white",
          },
          "& .MuiDataGrid-toolbarContainer": {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.mode === "dark" ? "white" : "black",
          },
        }}
      />
    </Box>
  );
};

export default Teams;
