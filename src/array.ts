function tabuada (number: number){
    const multiplicationNumber: number[] = []
    const multiplicationOtherNumbers: number[] = []
    for (let i = 1; i <= 10; i++) {
        multiplicationNumber.push(number * i)
        multiplicationOtherNumbers.push((number + 1) * i)
        multiplicationOtherNumbers.push((number + 2) * i)
    }

    multiplicationOtherNumbers.sort(function(a,b){
        return a-b
    })
}

tabuada(5)


function pontoDeOnibus(paradas: number[][]): number{
    let passageirosEntram: number[] = []
    let passageirosSaem: number[] = []
    let passageirosFinal: number = 0

    paradas.forEach(passageiros => {
        passageirosEntram.push(passageiros[0])
        passageirosSaem.push(passageiros[1])
    });

    let somaPassageirosEntram: number = 0
    for (let i = 0; i < passageirosEntram.length; i++) {
        somaPassageirosEntram += passageirosEntram[i]
    }

    let somaPassageirosSaem: number = 0
    for (let i = 0; i < passageirosSaem.length; i++) {
        somaPassageirosSaem += passageirosSaem[i]
    }

    passageirosFinal = somaPassageirosEntram - somaPassageirosSaem

    return passageirosFinal
}

pontoDeOnibus([[5,0], [10, 3], [3,7], [5,3]])


function bingo(numeros: number[]){
    let numerosBingo: number[] = [2, 9, 14, 7, 15]
    
    for (let i = 0; i < numerosBingo.length; i++) {
        let numerosCorretos: number = numerosBingo[i];
        if(numeros.includes(numerosCorretos)){
            return 'GANHOU'
        } else {
            return 'PERDEU'
        }        
    }

}

bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]) 

module.exports = {tabuada, pontoDeOnibus, bingo}