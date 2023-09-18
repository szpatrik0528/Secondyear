// main.js

function osszeadas() {
    var szam1 = parseFloat(document.getElementById("szam1").value);
    var szam2 = parseFloat(document.getElementById("szam2").value);
    var eredmeny = szam1 + szam2;
    document.getElementById("eredmeny").textContent = "Eredmény: " + eredmeny;
}

function kivonas() {
    var szam1 = parseFloat(document.getElementById("szam1").value);
    var szam2 = parseFloat(document.getElementById("szam2").value);
    var eredmeny = szam1 - szam2;
    document.getElementById("eredmeny").textContent = "Eredmény: " + eredmeny;
}
function szorzas() {
    var szam1 = parseFloat(document.getElementById("szam1").value);
    var szam2 = parseFloat(document.getElementById("szam2").value);
    var eredmeny = szam1 * szam2;
    document.getElementById("eredmeny").textContent = "Eredmény: " + eredmeny;
}

function osztas() {
    var szam1 = parseFloat(document.getElementById("szam1").value);
    var szam2 = parseFloat(document.getElementById("szam2").value);
    
    if (szam2 !== 0) {
        var eredmeny = szam1 / szam2;
        document.getElementById("eredmeny").textContent = "Eredmény: " + eredmeny;
    } else {
        document.getElementById("eredmeny").textContent = "Osztás 0-val nem lehetséges!";
    }
}