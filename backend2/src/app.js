import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
console.log("frontend URL:", process.env.IP_LOCAL_FRONTEND);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.IP_LOCAL_FRONTEND,
    //origin: "https://frontend-production-29e6.up.railway.app",
    credentials: true,
  })
);

app.use("/api", authRoutes);

app.use("/api", tasksRoutes); //prueba de validar token y que este logeado el usuario para entrar ahi

app.use("/api", userRoutes);
export default app;
