const express = require('express');
const UserData = require('./userData');

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
      const userData = new UserData(req.body);
      await userData.save();
      res.status(201).send(userData);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  router.get('/login/test', async (req, res) => {
    try {
      const userData = new UserData({
        user_name: 'Mario',
        password: '123456',
      });
      await userData.save();
      res.send('Teste Login bem-sucedido!');
    } catch (error) {
      console.error('Erro no teste Login:', error);
      res.status(500).send('Erro interno no servidor');
    }
  });

  module.exports = router