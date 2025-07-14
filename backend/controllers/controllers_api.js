const apiCambio = "https://api.exchangeratesapi.io/v1/latest?access_key=e239c326546ec994d2ec6a4d7aec5575"
const apiPais = "https://restcountries.com/v3.1/name"

exports.cambioApi = async(req,res) =>{

    const moedas = await fetch(apiCambio)

    const info = await moedas.json()

    console.log(info)
    console.log(moedas)

    res.json(moedas)
}

exports.paisesApi =async(req, res) =>{

    const pais = req.params.pais

    const info = await fetch(`${apiPais}/${pais}`)

    const paisInfo = await info.json()

    res.json(paisInfo)

}