import { Router } from "express";
import { register, login, logout, profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import {registerSchema, loginSchema} from "../schemas/auth.schema.js"

const router = Router();

router.post('/register', validateSchema(registerSchema) ,register);

router.post('/login', validateSchema(loginSchema) ,login);

router.post('/logout', logout);

//para una ruta protegida, vamos a necesitar una ruta que tengamos que proteger, por ejemplo
//lo vamos a usar despues para todo lo que vayamos a usar en el homePage
router.get('/profile', authRequired, profile);

export default router;