async function getAllUsers() {
  let endpoint = "https://retoolapi.dev/Hfa9uy/data";
  try {
      const response = await fetch(endpoint);
      const users = await response.json();
      showAllUsers(users);    
  } catch (error) {
      console.log(error);
  }
  
}

function showAllUsers() {
  let html = "";
    users.forEach(user => {
        html += `
        <div class="card" style="width: 18rem;">
        <img src="noimage.jpg" class="card-img-top" alt="noimage.jpg">
        <div class="card-body">
            <h5 class="card-title">${user.id}.${user.username}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <p class="card-text">Darab: ${user.darab}</p>
            <button class="btn btn-primary" onclick="betoltInputMezobe(${user.id})">Kiválaszt</button>
        </div>
    </div>
        `;
    });
    cards.innerHTML = html;
};

// AJAX GET kérés az összes ügyfél lekérdezésére
fetch('/clients')
  .then(response => response.json())
  .then(data => {
    // Kezeld a kapott adatokat, frissítsd a felhasználói felületet
    console.log('Összes ügyfél:', data);
    // Például: updateTable(data);
  })
  .catch(error => console.error('Hiba az összes ügyfél lekérdezésekor:', error));

// ID változója az adott ügyfél azonosítója
const clientId = 1; // Példa az ügyfél azonosítójára

// AJAX GET kérés az adott ügyfél lekérdezésére
fetch(`/clients/${clientId}`)
  .then(response => response.json())
  .then(data => {
    // Kezeld a kapott adatokat
    console.log('Adott ügyfél:', data);
  })
  .catch(error => console.error('Hiba az adott ügyfél lekérdezésekor:', error));

// Ügyfél adatok az insert alapján
const formData = {
  azon: '[value-1]',
  nev: '[value-2]',
  szulev: '[value-3]',
  irszam: '[value-4]',
  orsz: '[value-5]'
};

// AJAX POST kérés az új ügyfél rögzítésére
fetch('/clients', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
.then(response => response.text())
.then(message => {
  console.log('Válasz az új ügyfél rögzítésére:', message);
})
.catch(error => console.error('Hiba az új ügyfél rögzítésekor:', error));
