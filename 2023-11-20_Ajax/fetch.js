const inputid= document.querySelector('#id');
const inputusername= document.querySelector('#username');
const inputdarab = document.querySelector('#darab');
const buttonRead = document.querySelector('#read');
const body = document.getElementsByTagName('body')[0];
const cards = document.querySelector("#cards");

body.addEventListener('load', getAllUsers);
buttonRead.addEventListener("click", getAllUsers);

async function getAllUsers(){
    let endpoints = "https://retoolapi.dev/tcfyNA/data"
    const response = await fetch(endpoints);
    try {
        const response = await fetch(endpoints);
        const users = await response.json();
        showAllUsers(users);
    } catch (error){
        console.log(error);
    }
}

function showAllUsers(params){
    params.forEach(user => {
        appendCard(user)
        
    })
}

function appendCard(){
    cards.
}