import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/users.controller.js";
const router = Router();

//aqui llamamos a authRequired antes para ver que el usuario este logeado
//router.get('/tasks', authRequired, (req, res) => res.send('tasks'))

//este es un ejemplo para hacer el crud
router.get("/users", authRequired, getUsers);

// router.get("/tasks/:id", authRequired, getTask);

// router.post("/tasks", authRequired, createTasks);

router.delete("/user/:id", authRequired, deleteUser);

router.put("/user/:id", authRequired, updateUser);

export default router;
