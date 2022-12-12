"use strict";
function tabuada(number) {
    const multiplicationNumber = [];
    const multiplicationOtherNumbers = [];
    for (let i = 1; i <= 10; i++) {
        multiplicationNumber.push(number * i);
        multiplicationOtherNumbers.push((number + 1) * i);
        multiplicationOtherNumbers.push((number + 2) * i);
    }
    multiplicationOtherNumbers.sort(function (a, b) {
        return a - b;
    });
}
tabuada(5);
function PontodeOnibus(paradas) {
    let passageirosEntram = [];
    let passageirosSaem = [];
    let passageirosFinal = 0;
    paradas.forEach(passageiros => {
        passageirosEntram.push(passageiros[0]);
        passageirosSaem.push(passageiros[1]);
    });
    let somaPassageirosEntram = 0;
    for (let i = 0; i < passageirosEntram.length; i++) {
        somaPassageirosEntram += passageirosEntram[i];
    }
    let somaPassageirosSaem = 0;
    for (let i = 0; i < passageirosSaem.length; i++) {
        somaPassageirosSaem += passageirosSaem[i];
    }
    passageirosFinal = somaPassageirosEntram - somaPassageirosSaem;
    return passageirosFinal;
}
PontodeOnibus([[5, 0], [10, 3], [3, 7], [5, 3]]);
function bingo(numeros) {
    let numerosBingo = [2, 9, 14, 7, 15];
    for (let i = 0; i < numerosBingo.length; i++) {
        let numerosCorretos = numerosBingo[i];
        if (numeros.includes(numerosCorretos)) {
            return 'GANHOU';
        }
        else {
            return 'PERDEU';
        }
    }
}
bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]);
//# sourceMappingURL=array.js.map