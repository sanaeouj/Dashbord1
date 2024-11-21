import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';

const Invoices = () => {
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  // Charger les données au montage du composant
  useEffect(() => {
    const fetchRows = async () => {
      try {
        const response = await axios.get('http://localhost:5000/rows');
        setRows(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des lignes:', error);
      }
    };

    fetchRows();
  }, []);

  // Fonction pour supprimer les lignes sélectionnées
  const handleDelete = async () => {
    try {
      const response = await axios.post('http://localhost:5000/delete', { ids: selectedRows });
      console.log('Réponse de suppression:', response.data);
      setRows((prevRows) => prevRows.filter((row) => !selectedRows.includes(row.id)));
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };
  

  return (
    <Box sx={{ height: 650, width: '98%', mx: 'auto' }}>
      {/* Bouton Supprimer */}
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleDelete}
        >
          Supprimer
        </Button>
      </Box>

      {/* Tableau de données */}
      <DataGrid
        checkboxSelection
        rows={rows}
        columns={[
          { field: 'id', headerName: 'ID', width: 90 },
          { field: 'Name', headerName: 'Nom', flex: 1 },
          { field: 'Email', headerName: 'Email', flex: 1 },
          { field: 'Age', headerName: 'Âge', flex: 1 },
          { field: 'Phone', headerName: 'Téléphone', flex: 1 },
          { field: 'Access', headerName: 'Accès', flex: 1 },
        ]}
        components={{ Toolbar: GridToolbar }}
        onSelectionModelChange={(ids) => setSelectedRows(ids.map(Number))} // Assure que les IDs sont des nombres
      />
    </Box>
  );
};

export default Invoices;
