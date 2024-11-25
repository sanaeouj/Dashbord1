const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample data endpoint
const rows = [
  { id: 1, Name: 'John Doe', Email: 'john@example.com', Age: 30, Phone: '123-456-7890', Access: 'Admin' },
  // Add more sample data here
];

app.get('/rows', (req, res) => {
  res.json(rows);
});

app.post('/delete', (req, res) => {
  const { ids } = req.body;
  // Here you can implement your logic to delete items based on the provided ids
  res.json({ message: 'Deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
