const express = require('express');
const router = express.Router();

// Listar todas as vendas
router.get('/', (req, res) => {
  res.json({ message: 'Listar todas as vendas' });
});

// Obter uma venda específica
router.get('/:id', (req, res) => {
  res.json({ message: `Obter venda ${req.params.id}` });
});

// Criar nova venda
router.post('/', (req, res) => {
  res.json({ message: 'Criar nova venda' });
});

// Atualizar venda
router.put('/:id', (req, res) => {
  res.json({ message: `Atualizar venda ${req.params.id}` });
});

// Cancelar venda
router.delete('/:id', (req, res) => {
  res.json({ message: `Cancelar venda ${req.params.id}` });
});

// Relatório de vendas por período
router.get('/relatorio/periodo', (req, res) => {
  res.json({ message: 'Relatório de vendas por período' });
});

// Relatório de vendas por cliente
router.get('/relatorio/cliente/:clienteId', (req, res) => {
  res.json({ message: `Relatório de vendas do cliente ${req.params.clienteId}` });
});

// Finalizar venda
router.post('/:id/finalizar', (req, res) => {
  res.json({ message: `Finalizar venda ${req.params.id}` });
});

module.exports = router;
