import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getGoal, createGoal, updateGoal, deleteGoal } from "../controllers/goal.controller.js";

const router = Router()

//llamamos a authRequired antes para ver que el usuario este logeado

//guardar objetivo
router.post('/goal', authRequired, createGoal );

//buscar objetivo
router.get('/goal', authRequired, getGoal );

//actualizar objetivo
router.put('/goal', authRequired, updateGoal );

//eliminar objetivo
router.delete('/goal', authRequired, deleteGoal );

export default router;