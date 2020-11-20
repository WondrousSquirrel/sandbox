import express from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import logger from './services/logger';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("combined", { stream: logger.stream }));

export default app;