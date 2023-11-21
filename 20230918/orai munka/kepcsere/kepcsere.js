<<<<<<< HEAD
//-- globális konstansok és változók megadása
const kep = document.querySelector('#kep');
const gomb = document.querySelector('#szinesGomb');
var allapot= "feketefeher"

//--események hozzárendelése
gomb.addEventListener('click',kepcsere);
kep.addEventListener('mouseover',szinesbe);
//-- eseménykezelő függvények
function kepcsere(){
    if(allapot == "feketefeher"){
        kep.src = "szines.jpg";
        gomb.innerHTML = "fekete feher";
        allapot="szines";
    }else{
        kep.src = "fekete.jpg";
        gomb.innerHTML = "szines";
        allapot = "feketefeher"
    }
}

function szinesbe(){
    if(allapot == "feketefeher"){
        kep.src = "szines.jpg";
        allapot = "szines"
    }else{
        kep.src = "fekete.jpg";
        allapot = "feketefeher"
    }
=======
//-- globális konstansok és változók megadása
const kep = document.querySelector('#kep');
const gomb = document.querySelector('#szinesGomb');
var allapot= "feketefeher"

//--események hozzárendelése
gomb.addEventListener('click',kepcsere);
kep.addEventListener('mouseover',szinesbe);
//-- eseménykezelő függvények
function kepcsere(){
    if(allapot == "feketefeher"){
        kep.src = "szines.jpg";
        gomb.innerHTML = "fekete feher";
        allapot="szines";
    }else{
        kep.src = "fekete.jpg";
        gomb.innerHTML = "szines";
        allapot = "feketefeher"
    }
}

function szinesbe(){
    if(allapot == "feketefeher"){
        kep.src = "szines.jpg";
        allapot = "szines"
    }else{
        kep.src = "fekete.jpg";
        allapot = "feketefeher"
    }
>>>>>>> 6d4d05ec0ab675e636dff503e46415f0b3fcc633
}