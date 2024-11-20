// src/Components/Contacts.jsx
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material"; // Importation des icônes nécessaires
import {rows,columns} from './data';
const Contacts = () => {
  const theme = useTheme(); // Accéder au thème pour les couleurs

 


  return (
     

      <Box sx={{ height: "600", width: "80%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
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
              backgroundColor: theme.palette.primary.light,
            },
          }}
        />
      </Box>
  );
};



export default Contacts;