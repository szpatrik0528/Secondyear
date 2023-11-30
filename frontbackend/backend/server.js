// backend/server.js

const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

app.use(cors({
  origin: 'https://127.0.0.1_5500',
  method: 'POST, GET, PUT, DELETE, HEAD, PATCH',
  credentials: true,
  optionsSuccessStatus: 204,
}));

// Adatbázis kapcsolat
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tagdij'
});

// Adatbázis kapcsolódás
connection.connect((err) => {
  if (err) {
    console.error('Hiba az adatbázis csatlakozásakor: ', err);
    return;
  }
  console.log('Sikeres adatbázis csatlakozás');
});

// backend/server.js
app.get('/ugyfel', (req, res) => {
  const query = 'SELECT * FROM ugyfel'; // Update with your actual table name
  connection.query(query, (err, results) => {
      if (err) {
          console.error('Error fetching all :', err);
          res.status(500).json({ error: 'Internal Server Error' });
      } else {
          res.json(results);
      }
  });
});

// Szerver indítása
const port = 3000;
app.listen(port, () => {
  console.log(`A szerver fut a ${port}-es porton`);
});
