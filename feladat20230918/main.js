const image = document.getElementById("myImage");
const screenWidth = 1820;
const screenHeight = 400;
let currentPositionX = 0;
let currentPositionY = 0;
let currentRotation = 0;
let forwardDirectionX = true;
let forwardDirectionY = true;
let completedLoops = 0; // Számláló a körök számolására

const stepSize = 5; // A kép mozgatásának sebessége (egységek / lépés)
const rotationSpeed = 90; // Elforgatás szöge (fok / lépés)
const intervalTime = 20; // Időzített ciklus időzítése (ms)
const totalLoops = 4; // Az ismétlődő körök száma

function moveImage() {
    if (completedLoops >= totalLoops) {
        // Ha elértük a négy kört, leállítjuk az animációt
        clearInterval(animationInterval);
        return;
    }

    // Mozgás és elforgatás
    if (forwardDirectionX) {
        currentPositionX += stepSize;
        currentRotation = 0; // Elforgatás jobbra
    } else {
        currentPositionY += stepSize;
        currentRotation = 90; // Elforgatás lefelé
    }
    

    // Ha elértük a képernyő szélét, változtatjuk az irányt
    if (currentPositionX >= screenWidth && forwardDirectionX) {
        forwardDirectionX = false;
        currentPositionX = screenWidth;
    } else if (currentPositionY >= screenHeight && !forwardDirectionX && forwardDirectionY) {
        forwardDirectionY = true;
        currentPositionY = screenHeight;
    } else if (currentPositionX <= 0 && !forwardDirectionX && !forwardDirectionY) {
        forwardDirectionX = true;
        currentPositionX = 0;
    } else if (currentPositionY <= 0 && forwardDirectionX && !forwardDirectionY) {
        forwardDirectionY = false;
        currentPositionY = 0;
        completedLoops++;
    }

    // Pozíció és elforgatás beállítása
    image.style.left = currentPositionX + "px";
    image.style.top = currentPositionY + "px";
    image.style.transform = `rotate(${currentRotation}deg)`;
}

// Időzített ciklus elindítása
const animationInterval = setInterval(moveImage, intervalTime);
