const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcrypt');
const db = require('../db');

//Mostrar formulário de cadastro.
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/register.html'));
});

//Processar cadastro.
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    const hash = await bcrypt.hash(password, 10);

    await db('users').insert({
      email: email,
      password: hash
    });

    res.json({ success: true, message: 'Usuário cadastrado com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Erro ao cadastrar usuário' });
  }
});

//Processar login.
router.post('/login', async (req, res) => {
  const {email, password} = req.body;

  try {
    // Buscar o usuário pelo email
    const users = await db('users').where({ email: email });
    const user = users[0]; // pega o primeiro usuário encontrado

    if (!user) {
      return res.status(401).json({ success: false, message: 'Usuário não encontrado' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if(!passwordMatch) {
      return res.status(401).json ({ success:false, message: 'Senha incorreta'});
    }

    return res.json({ success: true, message: 'Login realizado com sucesso'});
  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).json({ success: false, message: 'Erro interno no servidor'});
  }
});

module.exports = router;