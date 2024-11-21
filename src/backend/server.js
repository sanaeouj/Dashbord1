const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const dataFilePath = './data.json'; // Chemin vers le fichier JSON des données

// Fonction pour charger les données depuis le fichier JSON
const loadData = () => {
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([])); // Initialise un fichier vide si inexistant
  }
  return JSON.parse(fs.readFileSync(dataFilePath));
};

// Fonction pour sauvegarder les données dans le fichier JSON
const saveData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// Endpoint pour obtenir toutes les lignes
app.get('/rows', (req, res) => {
  const data = loadData();
  res.json(data);
});

app.post('/delete', (req, res) => {
    const { ids } = req.body; // IDs des lignes à supprimer
    console.log('IDs reçus pour suppression:', ids); // Vérifie les IDs reçus
  
    let data = loadData(); // Chargement des données
  
    // Filtrer les lignes à garder
    data = data.filter((row) => !ids.includes(row.id)); // Vérifie que `ids` contient les bons types (nombres ou chaînes)
    saveData(data); // Sauvegarde des données mises à jour
  
    res.json({ success: true, data }); // Réponse de succès avec les données mises à jour
  });
  

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
