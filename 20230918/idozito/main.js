const kijelzo = document.querySelector('#kijelzo');
var szam =0;
function szamol(){
    kijelzo.innerHTML = szam.toString();
    szam += 1;
}

setInterval(szamol, 100000);