const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors()); // Engedélyezzük a CORS-t

app.use(bodyParser.json());

let clients = []; // Adatbázis szimulációja

// Összes ügyfél lekérdezése
app.get('/clients', (req, res) => {
  res.json(clients);
});

// Egy adott ügyfél lekérdezése
app.get('/clients/:id', (req, res) => {
  const clientId = req.params.id;
  const client = clients.find(c => c.id === parseInt(clientId));
  if (!client) {
    res.status(404).send('Ügyfél nem található');
  } else {
    res.json(client);
  }
});

// Új ügyfél hozzáadása
app.post('/clients', (req, res) => {
  const newClient = req.body;
  clients.push(newClient);
  res.json(newClient);
});

// Ügyfél törlése
app.delete('/clients/:id', (req, res) => {
  const clientId = req.params.id;
  clients = clients.filter(c => c.id !== parseInt(clientId));
  res.send('Ügyfél törölve');
});

// Ügyfél adatainak módosítása
app.put('/clients/:id', (req, res) => {
  const clientId = req.params.id;
  const updatedClient = req.body;
  clients = clients.map(c => (c.id === parseInt(clientId) ? updatedClient : c));
  res.json(updatedClient);
});

app.listen(port, () => {
  console.log(`A szerver fut a http://localhost:${port} címen`);
});
