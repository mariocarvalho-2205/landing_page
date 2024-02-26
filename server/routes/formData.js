// routes/formData.js
const express = require('express');
const FormData = require('../models/FormData');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).send(formData);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Rota para cadastro de usuário
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).send(user);
    console.log('Teste bem-sucedido! Rota acessada.');
  } catch (error) {
    console.error('Erro no cadastro:', error);
    res.status(400).send('Erro ao cadastrar usuário');
  }
});

// Rota para teste do registro de usuário /api/formData/test/register
router.get('/test/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash('password', 10); // Aqui você pode usar a senha que desejar
    const user = new User({ username: 'Mario', password: 1234567890 });
    await user.save();
    res.send('Teste bem-sucedido! Usuário registrado.');
  } catch (error) {
    console.error('Erro no teste de registro de usuário:', error);
    res.status(500).send('Erro interno no servidor');
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).send('Usuário não encontrado');
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).send('Senha inválida');
    }

    res.send('Login bem-sucedido! Redirecionando para a rota de usuários...');
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).send('Erro interno no servidor');
  }
});

router.get('/test', async (req, res) => {
  try {
    const formData = new FormData({
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@example.com',
      phone_number: '1234567890',
      subject: 'Example subject',
      something: 'Example message',
    });
    await formData.save();
    res.send('Teste bem-sucedido!');
  } catch (error) {
    console.error('Erro no teste:', error);
    res.status(500).send('Erro interno no servidor');
  }
});

module.exports = router;
