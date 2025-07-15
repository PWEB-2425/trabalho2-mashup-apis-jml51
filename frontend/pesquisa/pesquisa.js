const apiUrlAuth = 'http://localhost:3000/auth'
const apiUrl= 'http://localhost:3000/api'

estaAutenticado()
//todosCambios()


async function estaAutenticado(){
    const res = fetch(`${apiUrlAuth}/autenticado`)

    console.log(res)
}



async function todosCambios(){
    const res = await fetch(`${apiUrl}/cambioApi`)
    
    const info = await res.json()

    console.log(res)
    console.log(info)

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
const btnContry = document.getElementById("btnContry")
btnContry.addEventListener("click", paises)


async function paises(){

    const countryInput = document.getElementById("countryInput").value
    const lista_pais   = document.getElementById("lista_pais")

    const info = await fetch(`${apiUrl}/paisesApi/${countryInput}`)

    const pais = await info.json()

    if(pais[0] == null){
        lista_pais.innerHTML=
            `
                <li>pais nao encontardo</li>
            `
    }else{
        lista_pais.innerHTML=
            `
                <li>capital: ${pais[0].capital}</li>
                <li>fronteira com: ${pais[0].borders}</li>
                <li>continete: ${pais[0].continents}</li>
            `
        
    }
}














