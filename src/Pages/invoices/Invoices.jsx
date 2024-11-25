import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { rows as externalRows } from './data'; // Importation des données depuis data.js

const Invoices = () => {
  const [rows, setRows] = useState(externalRows); // Utilisation des données importées depuis data.js
  const [selectedRows, setSelectedRows] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  // Fonction pour ouvrir la boîte de dialogue de confirmation
  const handleDeleteClick = () => {
    setOpenDialog(true); // Ouvre la boîte de dialogue de confirmation
  };

  // Fonction pour supprimer les lignes sélectionnées
  const handleDelete = () => {
    setRows((prevRows) => prevRows.filter((row) => !selectedRows.includes(row.id)));
    setSelectedRows([]); // Réinitialise la sélection après suppression
    setOpenDialog(false); // Ferme la boîte de dialogue
  };

  const handleClose = () => {
    setOpenDialog(false); // Ferme la boîte de dialogue sans supprimer
  };

  return (
    <Box sx={{ height: 650, width: '98%', mx: 'auto' }}>
      {/* Bouton Supprimer */}
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleDeleteClick}
          disabled={selectedRows.length === 0} // Désactiver le bouton s'il n'y a pas de sélection
        >
          Supprimer
        </Button>
      </Box>

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
        onSelectionModelChange={(newSelection) => {
          setSelectedRows(newSelection); // Met à jour l'état avec les IDs sélectionnés
        }}
        selectionModel={selectedRows} // Assure que la sélection est reflétée dans le DataGrid
      />

      {/* Boîte de dialogue de confirmation */}
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Confirmation de suppression</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Êtes-vous sûr de vouloir supprimer les lignes sélectionnées ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleDelete} color="error">
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Invoices;