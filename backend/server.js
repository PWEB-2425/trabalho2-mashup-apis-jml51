const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();




const authRoutes = require('./routes/routes_auth');
const apiRoutes = require('./routes/routes_api');


const app = express();
app.use(cors());
app.use(express.json());
app.use(session({
    secret: process.env.SECRET || "12345", 
    resave: false,                        
    saveUninitialized: false,             
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000  } 
                
}));

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);



mongoose.connect(
    process.env.MONGO_URI ||'mongodb+srv://jose:8854@academicos.pbgpkff.mongodb.net/?retryWrites=true&w=majority&appName=academicos',{
        dbName:'auth'
    })
    .then(() => console.log('Ligação à base de dados com sucesso!'))
    .catch(err => console.log('Erro na ligação à base de dados:', err));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor a correr em http://localhost:${PORT}`);
});

app.get('/login', (req, res) => {
    // Set session data
    req.session.user ={ id: 1, username: 'example' };
    const ses =JSON.stringify(req.session.user)
    console.log(ses)
    res.send('Logged in');
});