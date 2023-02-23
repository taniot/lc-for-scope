'use strict';


/*

CICLO FOR

*/

//ciclo for incrementale

for(let i = 0; i < 10; i++){
    console.log(i);
}

//ciclo for decrementale

for(let i = 9; i >= 5; i--){
    console.log(i);
}

//stampo numeri pari


for(let i = 1; i <= 100; i++){
    if(i % 2 === 0) {
        console.log('pari');
    }
}

//inietto testo -> HTML

const ul = document.querySelector("ul.list");
 
for (let index = 0; index < 10; index++) {
  const element = `<li class="box box--${index}">${index}</li>`;
  ul.innerHTML += element;
}

//inietto HTML Element -> HTML

const ul = document.querySelector("ul.list");

for (let index = 0; index < 10; index++) {
    const elementoLista = document.createElement('li');

    elementoLista.addEventListener('click', function(){
        alert('ciao');
    })

    elementoLista.classList.add(`class-${index}`);

    elementoLista.append('Elemento');
    ul.append(elementoLista);
}


//SCOPE

let test = 0;

if(1 === 1) {
    let test = 1;
  
}

console.log(test);



