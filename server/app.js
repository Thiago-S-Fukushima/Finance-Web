const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(express.json()); // <- necessário para o Express entender JSON no body

const PORT = 5500;

app.use(cors({
    origin: 'http://localhost:5173', // ou a porta onde o React roda
    credentials: true
}));

//conexão com o banco.
const db = require('./db');

//configuração do express.
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//sessão.
app.use(session({
    secret: '1234',
    resave: false,
    saveUninitialized: true
}));

//configuração de rotas.
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

//inicialização do servidor.
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});

app.post("/Register",  (req, res) => {
    console.log("Dados recebidos:", req.body);
    const registerUser = {
        name: req.body.name, // Capturando agora o Nome de usuário para incluir no banco
        email: req.body.email,
        password: req.body.password
    }

    db.insert(registerUser).into("users").then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
})