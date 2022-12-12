const submit: HTMLElement | null = document.getElementById('submit')

const brand = document.getElementById('brand') as HTMLInputElement
const year = document.getElementById('year') as HTMLInputElement 
const color = document.getElementById('color') as HTMLInputElement
const price = document.getElementById('price') as HTMLInputElement
const automatic = document.getElementById('automatic') as HTMLInputElement

//SALVAR OS VALORES DOS INPUTS EM UM OBJETO
function submitForm(){
    let carros: iCarros = {
        marca: brand.value,
        ano: year.value,
        valor: price.value,
        cor: color.value,
        automatico: automatic.value
    }

    // console.log(carros)
    updateCarrosLocalStorage(carros)
}

//criar uma interface para usar a mesma tipagem
interface iCarros {
    marca: string;
    ano: string;
    valor: string;
    cor: string;
    automatico: string
}

//SALVAR O OBJETO NO LOCAL STORAGE
function updateCarrosLocalStorage(carrosObj: iCarros){
    window.localStorage.setItem('carro', JSON.stringify(carrosObj))
}

if(submit !== null){
submit.addEventListener('click', submitForm)
}

//PEGAR DO LOCAL STORAGE E EXIBIR NO CONSOLE
function getCarrosLocalStorage(){
    let carrosString: string | null  = localStorage.getItem('carro')
    if(carrosString === null){
        return
    }
    let carrosObj: iCarros = JSON.parse(carrosString)

    console.log(carrosObj)
}

window.addEventListener('load', getCarrosLocalStorage)

