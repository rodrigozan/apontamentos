import dotenv from 'dotenv';
import app from './config/express';

dotenv.config();

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});