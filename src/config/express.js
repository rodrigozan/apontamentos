import express from 'express';
import cors from 'cors'

import db from '../db/mongoose';
import routes from '../app/routes';

const app = express();

db();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', routes)

export default app;