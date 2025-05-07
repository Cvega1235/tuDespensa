import information from "../models/information.model.js";

// Crear y guardar informacion del usuario para las recetas y el calculo
export const createInformation = async (req, res) => {
  const { Estatura, Peso, Edad, Genero } = req.body;
  console.log("Información recibida del usuario:", { Estatura, Peso, Edad, Genero });
  console.log("Usuario logueado:", req.user);

  const userId = req.user.userId; 

  try {
    const newInfo = new information({
      Estatura,
      Peso,
      Edad,
      Genero,
      user: userId,
    });

    const savedInformation = await newInfo.save();
    console.log("Información guardada:", savedInformation);

    res.status(201).json({ message: "Información guardada", data: savedInformation });
  } catch (error) {
    console.error("Error al guardar información:", error);
    res.status(500).json({ message: "Error al guardar la información", error });
  }
};


// Buscar
export const getInformation = async (req, res) => {
  const userId = req.user.userId; //para agarrar el id del usuario logeado usamos
  
  try {
    const info = await information.find({ user: userId });
    if (!info) return res.status(404).json({ message: "Información no encontrada" });
    res.json(info);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la información", error });
  }
};

// Actualizar Informacion
export const updateInformation = async (req, res) => {
  const userId = req.user.userId;

  try {
    // Buscar el documento asociado al usuario
    const info = await information.findOne({ user: userId });

    if (!info) {
      return res.status(404).json({ message: "Información no encontrada" });
    }

    // Actualizar usando el _id del documento encontrado
    const updated = await information.findByIdAndUpdate(
      info._id,
      req.body,
      { new: true }
    );

    res.json({ message: "Información actualizada", data: updated });
  } catch (error) {
    console.error("Error al actualizar:", error);
    res.status(500).json({ message: "Error al actualizar", error });
  }
};

// Eliminar Objetivos
// EL ELIMINAR EL OBJETIVO NO SERA UTILIZADO EN EL FRONTEND, YA QUE ESTA SIENDO UTILIZADO PARA PRUEBAS
// YA QUE NO DAREMOS LA OPCION DE ELIMINAR EL OBJETIVO POR LO NECESARIO QUE ES
export const deleteInformation = async (req, res) => {
  const userId = req.user.userId;

  try {
    const info = await information.findOneAndDelete({ user: userId });

    if (!info) return res.status(404).json({ message: "Información no encontrada" });
    res.json({ message: "Información eliminada", data: info });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la información", error });
  }
};