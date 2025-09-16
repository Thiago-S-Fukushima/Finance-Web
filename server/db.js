const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1', 
    port: 3306,
    user: 'root',
    password: 'Fukushima2002',
    database: 'Finance',
  },
});

module.exports = knex;
  
  module.exports = knex // Alterado o meio de conexão para o Knex