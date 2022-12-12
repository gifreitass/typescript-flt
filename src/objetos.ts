interface iCarro{
    marca: string;
    ano: number;
    cor: string
}

function pesquisaMarcaCarro(carro: iCarro[], marca: string): iCarro[]{
    const arrayMarca: iCarro[] = carro.filter(function (marcaCarro) {
        return marcaCarro.marca === marca
    })
    return arrayMarca
}

console.log(pesquisaMarcaCarro([{marca: 'Fiat', ano: 2021, cor: 'preto'}, {marca: 'BMW', ano: 2021, cor: 'preto'}, {marca: 'Ford', ano: 2021, cor: 'preto'}, {marca: 'BMW', ano: 2016, cor: 'vermelho'}], 'BMW'))


function marcasDisponiveis(carros: iCarro[]): string[]{
    let marcaCarros: string[] = []
    marcaCarros = carros.map(carro => carro.marca)

    let marcaCarrosUnicos: string[] = marcaCarros.filter((marca, index) => {
        return marcaCarros.indexOf(marca) === index
    })

    return marcaCarrosUnicos
}

console.log(marcasDisponiveis([{marca: 'Fiat', ano: 2021, cor: 'preto'}, {marca: 'BMW', ano: 2021, cor: 'preto'}, {marca: 'Ford', ano: 2021, cor: 'preto'}, {marca: 'BMW', ano: 2016, cor: 'vermelho'}]))


function propriedadesCarros(carros: iCarro[], propriedadesCarros: string[]): any[]{
    const propriedadesEscolhidas: any[] = carros.reduce(function (accumulator: any[], current){
        let propriedades: any = {}
        propriedadesCarros.forEach(propriedade => {
            propriedades[propriedade] = current[propriedade as keyof iCarro]
        });

        accumulator.push(propriedades)

        return accumulator
    }, [])
    return propriedadesEscolhidas
}

console.log(propriedadesCarros([
    {marca: 'Fiat', ano: 2021, cor: 'preto'}, 
    {marca: 'BMW', ano: 2021, cor: 'preto'}, 
    {marca: 'Ford', ano: 2021, cor: 'preto'}, 
    {marca: 'BMW', ano: 2016, cor: 'vermelho'}
    ], 
    ['marca', 'ano']))