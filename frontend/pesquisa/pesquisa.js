const apiUrlAuth = 'https://trabalho2-mashup-apis-jml51.onrender.com/auth'
const apiUrl= 'https://trabalho2-mashup-apis-jml51.onrender.com/api'

//estaAutenticado()


async function estaAutenticado(){
    const res = await fetch(`${apiUrlAuth}/autenticado`)

    if(res.url != null){
        window.location.assign(res.url)
        return 0
    }

    const credenciais = await res.json()
    
}



async function todosCambios(){
    const res = await fetch(`${apiUrl}/cambioApi`)
    
    const info = await res.json()


    const lista = document.getElementById("lista_de_cambios")

    lista.innerHTML=""

    for (moedas in (info.quotes)){
        let elem = document.createElement("li")

        elem.innerHTML= moedas+ " para euro " + (info.quotes[moedas]);

        lista.appendChild(elem)
    }
}


const btnContry = document.getElementById("btnContry")
btnContry.addEventListener("click", paises)
btnContry.addEventListener("click", todosCambios)



async function paises(){

    const countryInput = document.getElementById("countryInput").value
    const lista_pais   = document.getElementById("lista_pais")

    const info = await fetch(`${apiUrl}/paisesApi/${countryInput}`)

    const pais = await info.json()

    console.log(info)
    console.log(pais)

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














