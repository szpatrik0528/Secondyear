<<<<<<< HEAD
const g5 = document.querySelector('#g5');

g5.addEventListener('mouseenter', mozgat);


function mozgat(){
    const randomX = Math.random() * (window.innerWidth - g5.clientWidth);
    const randomY = Math.random() * (window.innerWidth - g5.clientWidth);

    g5.style.transform = `translate(${randomX}px, ${randomY}px)`;
=======
const g5 = document.querySelector('#g5');

g5.addEventListener('mouseenter', mozgat);


function mozgat(){
    const randomX = Math.random() * (window.innerWidth - g5.clientWidth);
    const randomY = Math.random() * (window.innerWidth - g5.clientWidth);

    g5.style.transform = `translate(${randomX}px, ${randomY}px)`;
>>>>>>> 6d4d05ec0ab675e636dff503e46415f0b3fcc633
}