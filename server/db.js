const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'Fukushima2002',
      database: 'finance',
    },
   
  });
  
  module.exports = knex // Alterado o meio de conexão para o Knex