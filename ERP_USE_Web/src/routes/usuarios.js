const express = require('express');
const router = express.Router();

// Listar todos os usuários
router.get('/', (req, res) => {
  res.json({ message: 'Listar todos os usuários' });
});

// Obter um usuário específico
router.get('/:id', (req, res) => {
  res.json({ message: `Obter usuário ${req.params.id}` });
});

// Criar novo usuário
router.post('/', (req, res) => {
  res.json({ message: 'Criar novo usuário' });
});

// Atualizar usuário
router.put('/:id', (req, res) => {
  res.json({ message: `Atualizar usuário ${req.params.id}` });
});

// Deletar usuário
router.delete('/:id', (req, res) => {
  res.json({ message: `Deletar usuário ${req.params.id}` });
});

module.exports = router;
