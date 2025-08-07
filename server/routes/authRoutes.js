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
    const {email, password} = req.body;
    
    try{
        const hash = await bcrypt.hash(password, 10);

        await db.execute('INSERT INTO usuarios (email, password) VALUES (?,?)', [email, hash]);

        res.redirect('/login');
    } catch(err) {
    console.error(err);
    res.send('Erro ao cadastrar. Tente outro e-mail');
   }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Busca o usuário pelo email
        const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [username]);

        if (rows.length === 0) {
            return res.json({ success: false, message: 'Usuário não encontrado' });
        }

        const user = rows[0];

        // Compara a senha fornecida com o hash salvo
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.json({ success: false, message: 'Senha incorreta' });
        }

        // Sucesso no login
        return res.json({ success: true, message: 'Login realizado com sucesso' });

    } catch (error) {
        console.error('Erro no login:', error);
        return res.status(500).json({ success: false, message: 'Erro interno no servidor' });
    }
});


module.exports = router;