const express = require('express');
const router = express.Router();

// Listar todos os clientes
router.get('/', (req, res) => {
  res.json({ message: 'Listar todos os clientes' });
});

// Obter um cliente específico
router.get('/:id', (req, res) => {
  res.json({ message: `Obter cliente ${req.params.id}` });
});

// Criar novo cliente
router.post('/', (req, res) => {
  res.json({ message: 'Criar novo cliente' });
});

// Atualizar cliente
router.put('/:id', (req, res) => {
  res.json({ message: `Atualizar cliente ${req.params.id}` });
});

// Desativar cliente
router.delete('/:id', (req, res) => {
  res.json({ message: `Desativar cliente ${req.params.id}` });
});

// Buscar histórico de compras do cliente
router.get('/:id/historico-compras', (req, res) => {
  res.json({ message: `Histórico de compras do cliente ${req.params.id}` });
});

// Buscar por CPF/CNPJ
router.get('/busca/documento/:documento', (req, res) => {
  res.json({ message: `Buscar cliente pelo documento ${req.params.documento}` });
});

// Atualizar status de crédito
router.patch('/:id/credito', (req, res) => {
  res.json({ message: `Atualizar status de crédito do cliente ${req.params.id}` });
});

module.exports = router;
