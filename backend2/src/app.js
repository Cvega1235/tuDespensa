import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import goalRoutes from "./routes/goal.routes.js";
import informationRoutes from "./routes/information.routes.js";
import userRoutes from "./routes/user.routes.js";



const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    // origin: "https://frontend-production-29e6.up.railway.app",
    credentials: true,
  })
);

app.use("/api", authRoutes);

app.use("/api", tasksRoutes); //prueba de validar token y que este logeado el usuario para entrar ahi

app.use("/api", goalRoutes);

app.use("/api", informationRoutes);

app.use("/api", userRoutes);

export default app;
