# ERP USE Web

Sistema de gestão empresarial desenvolvido para atender às necessidades de controle e administração de empresas.

## Funcionalidades

- Gestão de Usuários
- Controle de Produtos e Estoque
- Gestão de Vendas
- Cadastro e Gestão de Clientes
- Relatórios e Análises

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- JWT para autenticação
- Cors para segurança

## Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:
```bash
cd erp-use-sistemas
npm install
```

3. Configure as variáveis de ambiente:
- Crie um arquivo `.env` baseado no exemplo
- Configure as variáveis necessárias

4. Inicie o servidor:
```bash
npm run dev
```

## Estrutura do Projeto

```
erp-use-sistemas/
├── src/
│   ├── routes/
│   │   ├── usuarios.js
│   │   ├── produtos.js
│   │   ├── vendas.js
│   │   └── clientes.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Rotas da API

### Usuários
- GET /api/usuarios - Lista todos os usuários
- GET /api/usuarios/:id - Obtém um usuário específico
- POST /api/usuarios - Cria novo usuário
- PUT /api/usuarios/:id - Atualiza usuário
- DELETE /api/usuarios/:id - Remove usuário

### Produtos
- GET /api/produtos - Lista todos os produtos
- GET /api/produtos/:id - Obtém um produto específico
- POST /api/produtos - Cria novo produto
- PUT /api/produtos/:id - Atualiza produto
- DELETE /api/produtos/:id - Remove produto
- GET /api/produtos/categoria/:categoria - Busca produtos por categoria
- PATCH /api/produtos/:id/estoque - Atualiza estoque

### Vendas
- GET /api/vendas - Lista todas as vendas
- GET /api/vendas/:id - Obtém uma venda específica
- POST /api/vendas - Cria nova venda
- PUT /api/vendas/:id - Atualiza venda
- DELETE /api/vendas/:id - Cancela venda
- GET /api/vendas/relatorio/periodo - Relatório por período
- GET /api/vendas/relatorio/cliente/:clienteId - Relatório por cliente
- POST /api/vendas/:id/finalizar - Finaliza venda

### Clientes
- GET /api/clientes - Lista todos os clientes
- GET /api/clientes/:id - Obtém um cliente específico
- POST /api/clientes - Cria novo cliente
- PUT /api/clientes/:id - Atualiza cliente
- DELETE /api/clientes/:id - Desativa cliente
- GET /api/clientes/:id/historico-compras - Histórico de compras
- GET /api/clientes/busca/documento/:documento - Busca por CPF/CNPJ
- PATCH /api/clientes/:id/credito - Atualiza status de crédito

## Contribuição

Para contribuir com o projeto:
1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

MIT
