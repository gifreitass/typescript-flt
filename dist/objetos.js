"use strict";
function pesquisaMarcaCarro(carro, marca) {
    const arrayMarca = carro.filter(function (marcaCarro) {
        return marcaCarro.marca === marca;
    });
    return arrayMarca;
}
console.log(pesquisaMarcaCarro([{ marca: 'Fiat', ano: 2021, cor: 'preto' }, { marca: 'BMW', ano: 2021, cor: 'preto' }, { marca: 'Ford', ano: 2021, cor: 'preto' }, { marca: 'BMW', ano: 2016, cor: 'vermelho' }], 'BMW'));
function marcasDisponiveis(carros) {
    let marcaCarros = [];
    marcaCarros = carros.map(carro => carro.marca);
    let marcaCarrosUnicos = marcaCarros.filter((marca, index) => {
        return marcaCarros.indexOf(marca) === index;
    });
    return marcaCarrosUnicos;
}
console.log(marcasDisponiveis([{ marca: 'Fiat', ano: 2021, cor: 'preto' }, { marca: 'BMW', ano: 2021, cor: 'preto' }, { marca: 'Ford', ano: 2021, cor: 'preto' }, { marca: 'BMW', ano: 2016, cor: 'vermelho' }]));
function propriedadesCarros(carros, propriedadesCarros) {
    const propriedadesEscolhidas = carros.reduce(function (accumulator, current) {
        let propriedades = {};
        propriedadesCarros.forEach(propriedade => {
            propriedades[propriedade] = current[propriedade];
        });
        accumulator.push(propriedades);
        return accumulator;
    }, []);
    return propriedadesEscolhidas;
}
console.log(propriedadesCarros([
    { marca: 'Fiat', ano: 2021, cor: 'preto' },
    { marca: 'BMW', ano: 2021, cor: 'preto' },
    { marca: 'Ford', ano: 2021, cor: 'preto' },
    { marca: 'BMW', ano: 2016, cor: 'vermelho' }
], ['marca', 'ano']));
//# sourceMappingURL=objetos.js.map