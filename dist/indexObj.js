"use strict";
const submit = document.getElementById('submit');
const brand = document.getElementById('brand');
const year = document.getElementById('year');
const color = document.getElementById('color');
const price = document.getElementById('price');
const automatic = document.getElementById('automatic');
//SALVAR OS VALORES DOS INPUTS EM UM OBJETO
function submitForm() {
    let carros = {
        marca: brand.value,
        ano: year.value,
        valor: price.value,
        cor: color.value,
        automatico: automatic.value
    };
    // console.log(carros)
    updateCarrosLocalStorage(carros);
}
//SALVAR O OBJETO NO LOCAL STORAGE
function updateCarrosLocalStorage(carrosObj) {
    window.localStorage.setItem('carro', JSON.stringify(carrosObj));
}
if (submit !== null) {
    submit.addEventListener('click', submitForm);
}
//PEGAR DO LOCAL STORAGE E EXIBIR NO CONSOLE
function getCarrosLocalStorage() {
    let carrosString = localStorage.getItem('carro');
    if (carrosString === null) {
        return;
    }
    let carrosObj = JSON.parse(carrosString);
    console.log(carrosObj);
}
window.addEventListener('load', getCarrosLocalStorage);
//# sourceMappingURL=indexObj.js.map