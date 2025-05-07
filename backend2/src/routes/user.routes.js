// src/routes/user.routes.js o en auth.routes.js

import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { User } from "../models/user.model.js";

const router = Router();

router.get("/profile", authRequired, async (req, res) => {
    console.log("req.user:", req.user); // <-- Agregado
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

    res.json({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role, // si tienes roles
    });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el perfil" });
  }
});

export default router;