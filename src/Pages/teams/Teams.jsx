import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material"; // Importation des icônes nécessaires
import {rows} from './data';
const Teams = () => {
  const theme = useTheme(); // Accéder au thème pour les couleurs

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
        const access = row.Access; // Récupérer la valeur de la cellule "Access"

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
              ? theme.palette.primary.light 
              : access === 'User' 
              ? theme.palette.secondary.light 
              : theme.palette.success.light, // Utiliser une couleur par défaut si aucun cas n'est trouvé
          }}>
            {/* Affichage conditionnel des icônes */}
            {access === "Admin" && <AdminPanelSettingsOutlined sx={{color:'#FFF'}} fontSize="small" />}
            {access === "Manager" && <LockOpenOutlined  sx={{color:'#FFF'}} fontSize="small" />}
            {access === "User" && <SecurityOutlined sx={{color:'#FFF'}}  fontSize="small" />}
            <Typography sx={{ fontSize: "13px" ,color:'#FFF' }} variant="body1">{access}</Typography> 
          </Box>
        );
      },
    },
  ];



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

export default Teams;
