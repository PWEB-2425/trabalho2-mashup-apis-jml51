const apiCambio = "https://api.exchangeratesapi.io/v1/latest?access_key=e239c326546ec994d2ec6a4d7aec5575"


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