const inputid = document.querySelector("#id");
const inputUsername = document.querySelector("#username");
const inputDarab = document.querySelector("#darab");
const buttonRead = document.querySelector("#read");
const body = document.getElementsByTagName("body")[0];

body.addEventListener("load", getAllUsers, false); //-- a lap betöltésekor is ...
buttonRead.addEventListener("click", getAllUsers);

async function getAllUsers() {
    let endpoint = "https://retoolapi.dev/Hfa9uy/data";
    try {
        const response = await fetch(endpoint);
        const users = await response.json();
        console.log(users);    
    } catch (error) {
        console.log(error);
    }
    
}