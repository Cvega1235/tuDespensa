import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks, getTask, createTasks, updateTasks, deleteTasks, } from "../controllers/tasks.controller.js";

const router = Router()

//aqui llamamos a authRequired antes para ver que el usuario este logeado
//router.get('/tasks', authRequired, (req, res) => res.send('tasks'))


//este es un ejemplo para hacer el crud
router.get('/tasks', authRequired, getTasks );

router.get('/tasks/:id', authRequired, getTask );

router.post('/tasks', authRequired, createTasks );

router.delete('/tasks/:id', authRequired, deleteTasks );

router.put('/tasks/:id', authRequired, updateTasks );

export default router;