const apiPais = "https://restcountries.com/v3.1/name"



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
