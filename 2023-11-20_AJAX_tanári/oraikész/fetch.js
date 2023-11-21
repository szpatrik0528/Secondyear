const inputid = document.querySelector("#id");
const inputUsername = document.querySelector("#username");
const inputDarab = document.querySelector("#darab");
const buttonCreate = document.querySelector('#create');
const buttonRead = document.querySelector("#read");
const buttonUpdate = document.querySelector('#update');
const buttonDelete = document.querySelector('#delete');
const body = document.getElementsByTagName("body")[0];
const cards = document.querySelector("#cards");

window.addEventListener("load", getAllUsers, false); //-- a lap betöltésekor is ...
// -- buttonCreate.addEventListener("click", getAllUsers);

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

function showAllUsers(users){
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
}

async function betoltInputMezobe(id) {
    let url = `https://retoolapi.dev/Hfa9uy/data/${id}`;
    try {
        const response = await fetch(url);
        const users = await response.json();
        inputid.value = users.id;
        inputUsername.value = users.username;
        inputDarab.value = users.darab;
        location.href = "#formEleje";
    } catch (error) {
        console.log(error);
    }
}

// -- új user létrehozása ----------------------------------------------------------------
buttonCreate.addEventListener("click", async () => {
    let url = `https://retoolapi.dev/Hfa9uy/data`;
    let data = {
        username: inputUsername.value,
        darab: inputDarab.value
    };
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data),
        });
        const user = await response.json();
        beviteliMezoAlaphelyzetbe();
        console.log(user);
        getAllUsers();
    } catch (error) {
        console.log(error);
    }
});

//-- user törlés ----------------------------------------------------------------
buttonCreate.addEventListener("click", async () => {
    let url = `https://retoolapi.dev/Hfa9uy/data`;
    try {
        const response = await fetch(url, {
            method: "DELETE",
        });
        const user = await response.json();
        beviteliMezoAlaphelyzetbe();
        getAllUsers();
        inputid.value = "";
        inputUsername.value = "";
        inputDarab.value = "1";
    } catch (error) {
        console.log(error);
    }
});

//-- user update ----------------------------------------------------------------
buttonCreate.addEventListener("click", async () => {
    let url = `https://retoolapi.dev/Hfa9uy/data`;
    let data = {
        username: inputUsername.value,
        darab: inputDarab.value
    };
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data),
        });
        const user = await response.json();
        beviteliMezoAlaphelyzetbe();
        getAllUsers();
    } catch (error) {
        console.log(error);
    }
});