import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// Importar rotas
import clientesRouter from './routes/clientes.js';
import produtosRouter from './routes/produtos.js';

const app = express();

// Configurações do middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// Definindo rotas
app.use('/clientes', clientesRouter);
app.use('/produtos', produtosRouter);
app.use('/status', (req, res) => res.send('OKs'));

export default app;
