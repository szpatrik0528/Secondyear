const mysql = require('mysql');
const express = require('express');
const app = express();

// MySQL adatbázis csatlakozás konfigurációja
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // A saját MySQL felhasználóneved
  password: '', // A saját jelszavad
  database: 'tagdij', // Az adatbázis neve, amiben dolgozol
});

// Adatbázis csatlakozás
connection.connect((err) => {
  if (err) {
    console.error('Hiba a MySQL csatlakozás során: ' + err.stack);
    return;
  }
  console.log('Sikeresen csatlakozva a MySQL-hez az azonosító: ' + connection.threadId);
});

// Új ügyfél hozzáadása
app.post('/ugyfel', (req, res) => {
  const { name, email } = req.body;
  const INSERT_CUSTOMER_QUERY = `INSERT INTO ugyfel (azon, nev, szulev, irszam, orsz) VALUES (?, ?, ?, ?, ?)`;
  connection.query(INSERT_CUSTOMER_QUERY, [azon, nev, szulev, irszam, orsz], (error, results, fields) => {
    if (error) throw error;
    res.send('Új ügyfél hozzáadva az adatbázishoz');
  });
});

// Összes ügyfél lekérdezése
app.get('/ugyfel', (req, res) => {
  const SELECT_ALL_CUSTOMERS_QUERY = 'SELECT * FROM ugyfel';
  connection.query(SELECT_ALL_CUSTOMERS_QUERY, (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

// Egy adott ügyfél lekérdezése
app.get('/ugyfel/:azon', (req, res) => {
  const { customerId } = req.params;
  const SELECT_SINGLE_CUSTOMER_QUERY = 'SELECT * FROM ugyfel WHERE azon = ?';
  connection.query(SELECT_SINGLE_CUSTOMER_QUERY, [azon], (error, results, fields) => {
    if (error) throw error;
    res.json(results[0]);
  });
});

// Egyéb kezelések...

// Szerver figyelése
app.listen(3000, () => {
  console.log('A szerver fut a 3000-es porton');
});
