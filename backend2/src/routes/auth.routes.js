import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
  verifyToken,
  requestRegisterCode,
  verifyRegisterCode,
  requestLoginCode,
  verifyLoginCode
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", logout);

router.get("/verify", verifyToken);

//PARA LA APP MOVILE
router.post("/register/request-code", requestRegisterCode);
router.post("/register/verify-code", verifyRegisterCode);

router.post("/login-mobile/request-code", requestLoginCode);
router.post("/login-mobile/verify-code", verifyLoginCode);


//para una ruta protegida, vamos a necesitar una ruta que tengamos que proteger, por ejemplo
//lo vamos a usar despues para todo lo que vayamos a usar en el homePage
router.get("/profile", authRequired, profile);

export default router;
