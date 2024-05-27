let homeEl = document.getElementById('homeText');
let gustEl = document.getElementById('gustText');

homeEl.textContent = Number(0);
gustEl.textContent = Number(0);


function house(n){
    homeEl.textContent = Number(homeEl.textContent) + n;
}

function gust(n){
    gustEl.textContent = Number(gustEl.textContent) + n;
}