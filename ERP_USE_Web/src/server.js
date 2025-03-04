const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Rotas básicas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dashboard.html'));
});

// API Routes
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/produtos', require('./routes/produtos'));
app.use('/api/vendas', require('./routes/vendas'));
app.use('/api/clientes', require('./routes/clientes'));

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource was not found on this server'
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'production' 
      ? 'An unexpected error occurred' 
      : err.message
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Dashboard disponível em http://localhost:${PORT}`);
});
