const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Fukushima2002',
    database: 'finance'
});

connection.connect((err) => {
    if(err) {
        console.log('Erro ao conectar ao MySQL', err);
    } else {
        console.log ('Conectado ao MySQL');
    }
});

module.exports = connection;
