// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const formDataRouter = require('./routes/formData');

// rootadmin / admin

const app = express();

// Conecta ao banco de dados
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

// Configura o middleware para analisar o corpo das solicitações
app.use(bodyParser.json());

// Configura a rota para receber os dados do formulário
app.use('/api/formData', formDataRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
