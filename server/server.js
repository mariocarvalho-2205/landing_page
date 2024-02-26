// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const formDataRouter = require('./routes/formData');
const formData = require('./models/FormData');
const user = require('./models/User');

// rootadmin / admin
// mongodb+srv://<username>:<password>@cluster0.we4or8k.mongodb.net/?retryWrites=true&w=majority

const app = express();

// Configurar o servidor para permitir todas as origens
app.use(cors());

// Conecta ao banco de dados
mongoose.connect('mongodb+srv://rootadmin:admin@cluster0.we4or8k.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });


mongoose.connection.on('connected', () => {
  console.log('Conexão estabelecida com o MongoDB Atlas');
});


mongoose.connection.on('error', (err) => {
  console.error('Erro ao conectar ao MongoDB Atlas:', err);
});

// Configura o middleware para analisar o corpo das solicitações
app.use(bodyParser.json());

// Configura a rota para receber os dados do formulário
app.use('/api/formData', formDataRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
