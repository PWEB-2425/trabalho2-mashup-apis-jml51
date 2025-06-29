const apiUrl = "http://localhost:3001"

const submitL = document.getElementById("submitL");
submitL.addEventListener("click",  login)

async function login() {
    

    const alunos = {}

    alunos.nome =           document.getElementById("nomeL").value;
    alunos.apelido =        document.getElementById("passwordL").value;
    
    console.log(alunos);

    alunos_json= JSON.stringify(alunos)

    console.log(alunos_json)

    
    const resposta = await fetch(`${apiUrl}/login`, {method: "POST",headers: { 'Content-Type': 'application/json' }, body: alunos_json})

}

async function regitar() {
    const alunos = {}

    alunos.nome =           document.getElementById("nomeR").value;
    alunos.apelido =        document.getElementById("passwordR").value;
    
    console.log(alunos);

    alunos_json= JSON.stringify(alunos)

    const resposta = await fetch(`${apiUrl}/registar`, {method: "POST",headers: { 'Content-Type': 'application/json' }, body: alunos_json})

}
    