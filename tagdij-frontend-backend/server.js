// app.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Egyszerű memóriában tárolt adatbázis
let clients = [];

app.use(bodyParser.json());

// Összes ügyfél lekérdezése
app.get('/ugyfel', (req, res) => {
  res.json(clients);
});

// Egy adott ügyfél lekérdezése
app.get('/ugyfel/:id', (req, res) => {
  const clientId = req.params.id;
  const client = clients.find(c => c.id === parseInt(clientId));
  if (client) {
    res.json(client);
  } else {
    res.status(404).json({ message: 'Ügyfél nem található' });
  }
});

// Új ügyfél hozzáadása
app.post('/ugyfel', (req, res) => {
  const newClient = req.body;
  newClient.id = clients.length + 1;
  clients.push(newClient);
  res.status(201).json(newClient);
});

// Ügyfél törlése
app.delete('/ugyfel/:id', (req, res) => {
  const clientId = req.params.id;
  clients = clients.filter(c => c.id !== parseInt(clientId));
  res.json({ message: 'Ügyfél törölve' });
});

// Ügyfél adatainak törlése
app.patch('/ugyfel/:id', (req, res) => {
  const clientId = req.params.id;
  const updatedClient = req.body;
  clients = clients.map(c => (c.id === parseInt(clientId) ? { ...c, ...updatedClient } : c));
  res.json({ message: 'Ügyfél adatai módosítva' });
});

app.listen(port, () => {
  console.log(`Szerver fut a http://localhost:${port} címen`);
});
