const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/users', (req, res) => {
    // Ide helyezd el az adatbázisból vagy külső API-ból történő adatlekérést
    // Majd visszaküldöd a klienstől érkező lekérésekre válaszként
    // Példa:
    const users = [
        { id: 1, username: 'user1', darab: 5 },
        { id: 2, username: 'user2', darab: 3 },
    ];
    res.json(users);
});

// Egyéb szerveroldali logika...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`A szerver fut a ${PORT}-es porton`);
});
