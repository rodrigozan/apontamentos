import { Request, Response } from 'express';
import UserService from './UserService';

class UserController {
  async createUser(req, res) {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
      res.end()
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuário' });
      res.end()
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
      res.end()
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuários' });
      res.end()
    }
  }

  async getUserById(req, res) {
    try {
      const user = await UserService.getUserById(req.params.id);
      if (user) {
        res.status(200).json(user);
        res.end()
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
        res.end()
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuário' });
      res.end()
    }
  }

  async updateUser(req, res) {
    try {
      const user = await UserService.updateUser(req.params.id, req.body);
      if (user) {
        res.status(200).json(user);
        res.end()
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
        res.end()
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar usuário' });
      res.end()
    }
  }

  async deleteUser(req, res) {
    try {
      await UserService.deleteUser(req.params.id);
      res.status(204).send();
      res.end()
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar usuário' });
      res.end()
    }
  }
}

export default new UserController();