const express = require('express');
const app = express(); //-- http szervert tudunk vele indítani
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send("Welcome");
})

app.get('/bela', (req, res) => {
    res.send("Ez béla lapja!");
})

app.get('/bela/:id', (req, res) => {
    let id = req.params.id;
    res.send(`Ez béla lapja!, id: ${id}`);
})

app.get('/bela/:id/:name', (req, res) => {
    let id = req.params.id;
    let name = req.params.name;
    res.send(`Ez béla lapja!, id: ${id}, name: ${name}`);
})

app.post('/bela', (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    res.send(`Ez béla lapja Post! ${id}, ${name}`);
})

app.listen(3000, () =>{
    console.log('listening on port 3000');
})