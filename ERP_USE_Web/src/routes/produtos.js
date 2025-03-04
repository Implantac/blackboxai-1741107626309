const express = require('express');
const router = express.Router();

// Listar todos os produtos
router.get('/', (req, res) => {
  res.json({ message: 'Listar todos os produtos' });
});

// Obter um produto específico
router.get('/:id', (req, res) => {
  res.json({ message: `Obter produto ${req.params.id}` });
});

// Criar novo produto
router.post('/', (req, res) => {
  res.json({ message: 'Criar novo produto' });
});

// Atualizar produto
router.put('/:id', (req, res) => {
  res.json({ message: `Atualizar produto ${req.params.id}` });
});

// Deletar produto
router.delete('/:id', (req, res) => {
  res.json({ message: `Deletar produto ${req.params.id}` });
});

// Buscar produtos por categoria
router.get('/categoria/:categoria', (req, res) => {
  res.json({ message: `Buscar produtos da categoria ${req.params.categoria}` });
});

// Atualizar estoque
router.patch('/:id/estoque', (req, res) => {
  res.json({ message: `Atualizar estoque do produto ${req.params.id}` });
});

module.exports = router;
