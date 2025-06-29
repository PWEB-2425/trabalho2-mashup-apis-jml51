const express = require('express');
const session = require('express-session');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
//e239c326546ec994d2ec6a4d7aec5575

https://api.exchangeratesapi.io/v1/latest ? access_key = e239c326546ec994d2ec6a4d7aec5575

// Cria uma instância do Express
const app = express();

app.use(cors());

// Permite receber dados de formulários via POST
app.use(express.urlencoded({ extended: true }));
// Configura sessões para autenticação
app.use(session({ secret: process.env.SECRET || "12345" }));
// Permite receber dados em JSON
app.use(express.json());

start();
// Rota pública de exemplo
app.get('/about', (req, res) => {
    res.send('Sobre nós');
});

app.get("/alunos", async (req, res) => {
    alunos = await collection.find().toArray();
    //console.log(alunos);
    res.json(alunos);
})

app.use(express.static('public'));

let db; // instância da ligacao à BD MongoDB
let collection; // Coleção de users

// Função para conectar ao MongoDB e iniciar o servidor
async function start() {
    console.log('Iniciando aplicação...');
    try { 
        // Cria um novo cliente MongoDB usando a string de conexão do .env ou padrão local
        const client = new MongoClient(process.env.DB || 'mongodb+srv://jose:8854@academicos.pbgpkff.mongodb.net/?retryWrites=true&w=majority&appName=auth');
        await client.connect(); // Estabelece conexão com base de dados
        console.log('Ligado ao MongoDB');
        db = client.db('auth'); // Seleciona a base de dados 'usersdb'
        collection = db.collection('alunos'); // Seleciona a coleção 'users'
        // Inicia o servidor Express na porta definida no .env ou 3001
        return app.listen(process.env.PORT || 3001, () => {
            const port = process.env.PORT || 3001;
            console.log("Servidor em http://localhost:3001");
        });
    }
    catch (error) {
        // Mostra erro caso não consiga ligar BD e/ou servidor
        console.error('Erro ao iniciar', error);
    }
}


app.use('/pesquisa.html', verify_auth,(req, res, next) => {
    if (req.session.username) {
        next();
    } else {
        res.redirect('/login.html');
    }
});



app.post('/login', async (req, res) => {
    const nomeL = req.body.nomeL;
    const passwordL = req.body.passwordL;

    // Procura nomeL na base de dados
    userdb = await collection.findOne({ nome: nomeL, password: passwordL });
    
    if (userdb) {
        // nomeL autenticado com sucesso
        console.log(`Utilizador ${nomeL} autenticado com sucesso.`);
        req.session.nomeL = nomeL;

        return res.redirect('/segredo');    
    } else {  
        // Falha na autenticação
        console.log(`Falha na autenticação para o usuário ${nomeL}.`);
        return res.redirect('./login.html');
    }
})


app.post('/', async (req, res) => {
    const nomeL = req.body.nomeL;
    const passwordL = req.body.passwordL;
   

    // Procura nomeL na base de dados

    if (nomeL != "" || passwordL != "") {
        registerBtn.onsubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: nomeL,
                password: passwordL
            })
        });
        if (res.ok) alert('Registado! Faça login.');
        else alert('Erro no registo.');
    };
    }
});

function verify_auth(req, res, next) {
    if (req.session.nome) {
        next();
    } else {
        res.status(401).redirect('/login.html');
    }
}

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login.html');
});


