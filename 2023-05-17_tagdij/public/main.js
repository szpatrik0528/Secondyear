const tagokLista = document.querySelector("#tagok");
const buttonSubmit = document.querySelector("#submit");
window.addEventListener('load', getTagok);
buttonSubmit.addEventListener('click', befizetes);

function getTagok() {
    let url = "http://localhost:3001/tagok";
    fetch(url).then((response) => response.json()).then((data) => tagokListaba(data));
}

function tagokListaba(data) {
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let newOption = document.createElement("option");
        let optionText = document.createTextNode(element.nev);
        newOption.appendChild(optionText);
        newOption.setAttribute("value", element.azon);
        tagokLista.appendChild(newOption);
    }
}

function befizetes() {
    let url = "http://localhost:3001/befiz";
    const data = getDataJSON();

    fetch(url, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data); //-- 200-299
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

function getDataJSON() {
    let azon = tagokLista.value;
    alert("Azon:", tagokLista);
    let osszeg = document.querySelector("#osszeg").value;
    let befizetesJSON = `{"azon":"${azon}","befiz":"${osszeg}"}`;
    return JSON.parse(befizetesJSON);
}

