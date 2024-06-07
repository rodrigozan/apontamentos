// src/database.js
import mongoose from 'mongoose';

const db = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/apontamentos');
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB', error);
    process.exit(1); // Sair do processo com erro
  }
};

export default db;
