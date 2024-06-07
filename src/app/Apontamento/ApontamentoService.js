import Apontamento, { Apontamento as ApontamentoModel } from './ApontamentoModel';

class ApontamentoService {
  async createApontamento(apontamento) {
    return await Apontamento.create(apontamento);
  }

  async getAllApontamentos() {
    return await Apontamento.find();
  }

  async getApontamentoById(id) {
    return await Apontamento.findById(id);
  }

  async updateApontamento(id, apontamento) {
    return await Apontamento.findByIdAndUpdate(id, apontamento, { new: true });
  }

  async deleteApontamento(id) {
    await Apontamento.findByIdAndDelete(id);
  }
}

export default new ApontamentoService();