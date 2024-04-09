import express from 'express';
import {
  createCliente,
  getAllClientes,
  updateCliente,
  deleteCliente,
} from '../controllers/clienteController.js';
import {
  validarCreateCliente,
  validarDeleteCliente,
  validarUpdateCliente,
} from '../middlewares/clienteMiddleware.js';

// eslint-disable-next-line new-cap
const router = express.Router();

// Rota para criar um novo cliente
router.post('/', validarCreateCliente, createCliente);

// Rota para obter todos os clientes
router.get('/', getAllClientes);

// Rota para atualizar um cliente existente
router.put('/:id', validarUpdateCliente, updateCliente);

// Rota para excluir um cliente
router.delete('/:id', validarDeleteCliente, deleteCliente);

export default router;
