var _var1 = 1;
let _let1 = 2;
const _const1 = 3; 

if (true) {
    _var1 = 4;
    _let1 = 5;
    let _let2 = 7;
    // _const1 = 3;
}

console.log(_var1, _let1, _const1, _let2);


function mutasdSzinesKepe() {
    const feketeFeherKepElem = document.getElementById('feketeFeherKep');
    
    const szinesKepElem = new Image();
    szinesKepElem.src = 'szines.jpg'; 
    szinesKepElem.alt = 'Színes kép';
    
    feketeFeherKepElem.parentNode.replaceChild(szinesKepElem, feketeFeherKepElem);
  }
  
  
  
  