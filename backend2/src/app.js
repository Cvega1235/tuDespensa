import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from './routes/tasks.routes.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: "http://localhost:5173", // El origen de tu frontend
      credentials: true, // Esto es necesario si usas cookies o autenticación basada en sesión
    })
  );

app.use("/api", authRoutes);

app.use("/api", tasksRoutes); //prueba de validar token y que este logeado el usuario para entrar ahi

export default app;