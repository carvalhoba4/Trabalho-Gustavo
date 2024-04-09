import express from 'express';
import {
  createProduto,
  getAllProdutos,
  updateProduto,
  deleteProduto,
} from '../controllers/produtoController.js';
import {
  validarCreateProduto,
  validarUpdateProduto,
  validarDeleteProduto,
} from '../middlewares/produtoMiddleware.js';

// eslint-disable-next-line new-cap
const router = express.Router();

// Rota para criar um novo produto
router.post('/', validarCreateProduto, createProduto);

// Rota para obter todos os produtos
router.get('/', getAllProdutos);

// Rota para atualizar um produto existente
router.put('/:id', validarUpdateProduto, updateProduto);

// Rota para excluir um produto
router.delete('/:id', validarDeleteProduto, deleteProduto);

export default router;
