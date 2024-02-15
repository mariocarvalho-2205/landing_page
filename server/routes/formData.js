// routes/formData.js
const express = require('express');
const FormData = require('../models/FormData');

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
