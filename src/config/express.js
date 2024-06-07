import express from 'express';

import db from '../db/mongoose';

const app = express();

db();

app.get('/list', (req, res) => {
    const info = req.body
    console.log('Bom, entrou na rota get')
    res.json('Entrou na rota get')
})

app.post('/create', (req, res) => {
    const info = req.body
    console.log('Bom, entrou na rota post')
    res.json('Entrou na rota post')
})

export default app;