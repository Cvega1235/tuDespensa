// controllers/user.controller.js
import { User } from '../models/user.model.js'; // con llaves


export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('username email');

    if (!user) {
      return res.status(404).json({ message: 'usuario no encontrado' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
