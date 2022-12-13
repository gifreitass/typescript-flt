"use strict";
const objects = require('../objetos');
test('É esperado que retorne os objetos com a marca BMW', () => {
    const pesquisaMarcaCarro = objects.pesquisaMarcaCarro([{ marca: 'Fiat', ano: 2021, cor: 'preto' }, { marca: 'BMW', ano: 2021, cor: 'preto' }, { marca: 'Ford', ano: 2021, cor: 'preto' }, { marca: 'BMW', ano: 2016, cor: 'vermelho' }], 'BMW');
    expect(pesquisaMarcaCarro).toEqual([{ marca: 'BMW', ano: 2021, cor: 'preto' }, { marca: 'BMW', ano: 2016, cor: 'vermelho' }]);
});
test('É esperado que retorne null caso a marca escolhida não esteja em nenhum dos objetos', () => {
    const pesquisaMarcaCarro = objects.pesquisaMarcaCarro([{ marca: 'Fiat', ano: 2021, cor: 'preto' }, { marca: 'BMW', ano: 2021, cor: 'preto' }, { marca: 'Ford', ano: 2021, cor: 'preto' }, { marca: 'BMW', ano: 2016, cor: 'vermelho' }], 'Fusca');
    expect(pesquisaMarcaCarro).toBeNull();
});
test('É esperado que retorne um array com as marcas de cada carro sem nenhuma marca se repetir', () => {
    const marcasDisponiveis = objects.marcasDisponiveis([{ marca: 'Fiat', ano: 2021, cor: 'preto' }, { marca: 'BMW', ano: 2021, cor: 'preto' }, { marca: 'Ford', ano: 2021, cor: 'preto' }, { marca: 'BMW', ano: 2016, cor: 'vermelho' }]);
    expect(marcasDisponiveis).toEqual(['Fiat', 'BMW', 'Ford']);
});
test('É esperado que retorne null caso nenhuma marca seja informada', () => {
    const marcasDisponiveis = objects.marcasDisponiveis([]);
    expect(marcasDisponiveis).toBeNull();
});
test('É esperado que retorne um array de objetos com apenas a marca e o ano dos carros', () => {
    const propriedadesCarros = objects.propriedadesCarros([
        { marca: 'Fiat', ano: 2021, cor: 'preto' },
        { marca: 'BMW', ano: 2021, cor: 'preto' },
        { marca: 'Ford', ano: 2021, cor: 'preto' },
        { marca: 'BMW', ano: 2016, cor: 'vermelho' }
    ], ['marca', 'ano']);
    expect(propriedadesCarros).toEqual([
        { marca: 'Fiat', ano: 2021 },
        { marca: 'BMW', ano: 2021 },
        { marca: 'Ford', ano: 2021 },
        { marca: 'BMW', ano: 2016 }
    ]);
});
test('É esperado que retorne null caso uma propriedade que não existe seja informada', () => {
    const propriedadesCarros = objects.propriedadesCarros([], []);
    expect(propriedadesCarros).toBeNull();
});
//# sourceMappingURL=objetos.test.js.map