const apiCambio = "https://api.exchangeratesapi.io/v1/latest?access_key=e239c326546ec994d2ec6a4d7aec5575"
const apiUrlAuth = 'http://localhost:3000/auth'

estaAutenticado()
async function estaAutenticado(){
    const res = fetch(`${apiUrlAuth}/autenticado`)
}




















/*
async function todosCambios(){
    const res = await fetch(apiCambio)

    const info = await res.json()

   

    const lista = document.getElementById("lista_de_cambios")

    lista.innerHTML=""

    
    for (moedas in (info.rates)){
        let elem = document.createElement("li")

        

        elem.innerHTML=
            "moeda:" + moedas+ "    " +
            "cambio para euro" + (info.rates[moedas]);

        lista.appendChild(elem)
    }
}
todosCambios()


async function paisP(){

    const nomeP = document.getElementById("nomeP").value

    const res = await fetch(`${apiPais}/${nomeP}`)

    const info = await res.json()

    console.log(info[0])

    const lista = document.getElementById("lista_de_cambios")

    document.getElementById("nome").innerHTML = "nome: " + info[0].altSpellings[2]
    document.getElementById("capital").innerHTML = "capital: " +info[0].capital[0]
    document.getElementById("currencies").innerHTML = "fronteira com: " +info[0].borders[0]
    document.getElementById("population").innerHTML = "continete:" +info[0].continents[0]


}

const btnPesquisa = document.getElementById("btnPesquisa")
btnPesquisa.addEventListener("click",paisP)
*/