// backend/server.js

const express = require('express');
const app = express();
const mysql = require('mysql');

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

// Szerver indítása
const port = 3000;
app.listen(port, () => {
  console.log(`A szerver fut a ${port}-es porton`);
});
