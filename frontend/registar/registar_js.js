const apiUrlAuth = 'https://trabalho2-mashup-apis-jml51.onrender.com/auth'



const btnLogin = document.getElementById("submitR")
btnLogin.addEventListener("click", registar )


async function registar(){

    const credenciais = {} 

    credenciais.nome= document.getElementById("nomeR").value
    credenciais.password= document.getElementById("passwordR").value

    const credenciais_json= JSON.stringify(credenciais)

    const res = await fetch(`${apiUrlAuth}/registar`,
        {
            method:'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: credenciais_json
        })

    

}