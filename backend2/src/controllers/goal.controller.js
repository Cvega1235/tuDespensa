import userGoal from "../models/goal.model.js";

// guardar objetivo
export const createGoal = async (req, res) => {
  const { goal } = req.body;
  console.log("req.user:", req.user);
  const userId = req.user.userId; //para agarrar el id del usuario logeado usamos

  try {
    const newGoal = new userGoal({
      goal,
      user: userId,
  });

  const savedGoal = await newGoal.save();
  res.status(201).json({message: "Objetivo Guardado" , data: savedGoal});
  } catch (error) {
    res.status(500).json({ message: "Error al guardar el objetivo", details: error });
  }
};

// Buscar
export const getGoal = async (req, res) => {
  const userId = req.user.userId;
  
  try {
    const goal = await userGoal.findOne({ user: userId });
    if (!goal) return res.status(404).json({ message: 'Objetivo no encontrado' });
    res.json(goal);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el objetivo', error });
  }
};
  

// Actualizar Objetivos
export const updateGoal = async (req, res) => {
  const userId = req.user.userId;
  
  try {
    const goal = await userGoal.findOneAndUpdate(
      { user: userId },
      req.body,
      { new: true }
    );
  
  if (!goal) return res.status(404).json({ message: 'Objetivo no encontrado' });  
    res.json(goal);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el objetivo', error });
  }
};

// Eliminar Objetivos
// EL ELIMINAR EL OBJETIVO NO SERA UTILIZADO EN EL FRONTEND, YA QUE ESTA SIENDO UTILIZADO PARA PRUEBAS
// YA QUE NO DAREMOS LA OPCION DE ELIMINAR EL OBJETIVO POR LO NECESARIO QUE ES
export const deleteGoal = async (req, res) => {
  const userId = req.user.userId;

  try {
    const goal = await userGoal.findOneAndDelete({ user: userId });

    if (!goal) return res.status(404).json({ message: 'Objetivo no encontrado' });
    res.json({ message: 'Objetivo eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el objetivo', error });
  }
}