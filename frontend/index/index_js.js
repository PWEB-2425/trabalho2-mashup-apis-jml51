const apiUrlAuth = 'http://localhost:3000/auth'



const btnLogin = document.getElementById("submitL")
btnLogin.addEventListener("click", login )


async function login(){

    const credenciais = {} 

    credenciais.nome= document.getElementById("nomeL").value
    credenciais.password= document.getElementById("passwordL").value

    const credenciais_json= JSON.stringify(credenciais)

    const res = await fetch(`${apiUrlAuth}/login`,
        {
            method:'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: credenciais_json
        })

    
    if(res == true){
        redirect("../filmes.html")
    }else{
        
    }
}

