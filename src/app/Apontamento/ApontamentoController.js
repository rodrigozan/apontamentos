import { Request, Response } from 'express';
import ApontamentoService from './ApontamentoService';

class ApontamentoController {
  async createApontamento(req, res) {
    try {
      const apontamento = await ApontamentoService.createApontamento(req.body);
      res.status(201).json(apontamento);
      res.end()
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar apontamento' });
      res.end()
    }
  }

  async getAllApontamentos(req, res) {
    try {
      const apontamentos = await ApontamentoService.getAllApontamentos();
      res.status(200).json(apontamentos);
      res.end()
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar apontamentos' });
      res.end()
    }
  }

  async getApontamentoById(req, res) {
    try {
      const apontamento = await ApontamentoService.getApontamentoById(req.params.id);
      if (apontamento) {
        res.status(200).json(apontamento);
        res.end()
      } else {
        res.status(404).json({ error: 'apontamento não encontrado' });
        res.end()
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar apontamento' });
      res.end()
    }
  }

  async updateApontamento(req, res) {
    try {
      const apontamento = await ApontamentoService.updateApontamento(req.params.id, req.body);
      if (apontamento) {
        res.status(200).json(apontamento);
        res.end()
      } else {
        res.status(404).json({ error: 'apontamento não encontrado' });
        res.end()
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar apontamento' });
      res.end()
    }
  }

  async deleteApontamento(req, res) {
    try {
      await ApontamentoService.deleteApontamento(req.params.id);
      res.status(204).send();
      res.end()
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar apontamento' });
      res.end()
    }
  }
}

export default new ApontamentoController();