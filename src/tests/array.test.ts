const arrays = require('../array')

test('É esperado que 10 passageiros ainda estejam no ônibus', () => {
    const pontoDeOnibus = arrays.pontoDeOnibus([[5,0], [10, 3], [3,7], [5,3]])
    expect(pontoDeOnibus).toBe(10)
})

test('É esperado que o resultado seja GANHOU', () => {
    const bingo = arrays.bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10])
    expect(bingo).toBe('GANHOU')
})