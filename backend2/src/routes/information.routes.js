import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getInformation, createInformation, updateInformation, deleteInformation } from "../controllers/information.controller.js";

const router = Router()

//llamamos a authRequired antes para ver que el usuario este logeado
//guardar informacion
router.post('/information', authRequired, createInformation );

//buscar informacion
router.get('/information', authRequired, getInformation );

//actualizar informacion
router.put('/information', authRequired, updateInformation );

//eliminar informacion
router.delete('/information', authRequired, deleteInformation );

export default router;