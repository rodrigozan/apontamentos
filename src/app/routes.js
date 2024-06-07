import express, { Router } from 'express';

import UserController from './User/UserController';
import ApontamentoController from './Apontamento/ApontamentoController';

const router = express.Router();

router.post('/users/', UserController.createUser);
router.get('/users/', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

router.post('/apontamentos/', ApontamentoController.createApontamento);
router.get('/apontamentos/', ApontamentoController.getAllApontamentos);
router.get('/apontamentos/:id', ApontamentoController.getApontamentoById);
router.put('/apontamentos/:id', ApontamentoController.updateApontamento);
router.delete('/apontamentos/:id', ApontamentoController.deleteApontamento);

export default router;