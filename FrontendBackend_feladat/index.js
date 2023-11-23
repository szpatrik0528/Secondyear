const express = require('express');
const path = require('path');
const app = express();

const mysql = require('mysql');
const db = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'tagdij'
    }
);
db.connect((err) => {
    if (err) throw err;
    console.log('Connected');
});

app.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, './index.html');
    res.sendFile(filePath);
});



app.listen(1337, () =>{
    console.log('server is running!')
});