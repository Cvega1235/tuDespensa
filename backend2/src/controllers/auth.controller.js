import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

// export const register = async (req, res) => {
//     const {email, password, username} = req.body;

//     try {

//         const passwordHash = await bcrypt.hash(password, 10)

//         const newUser = new User({
//             username,
//             email,
//             password: passwordHash,
//         })

//         const userFound = await newUser.save();
//         const token = await createAccessToken({id: userFound._id});
//         res.cookie('token', token);
//         //res.json nos va devolver los datos que vayamos a usar en el frontend
//         res.json({
//             id: userFound._id,
//             username: userFound.username,
//             email: userFound.email,
//             createdAd: userFound.createdAt,
//             updateAt: userFound.updatedAt,
//         })
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// };
export const register = async (req, res) => {
  try {
    console.log("Datos recibidos:", req.body); // 👀 Verificar datos entrantes

    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userFound = await newUser.save();
    console.log("Usuario guardado en MongoDB:", userFound); // 👀 Verificar usuario guardado

    const token = await createAccessToken({ id: userFound._id });
    res.cookie("token", token, { httpOnly: true });

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    console.error("Error en registro:", error); // 👀 Verificar errores en la consola
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    //buscamos si el usuario existe
    const userFound = await User.findOne({ email });

    if (!userFound) return res.status(400).json({ message: "User not found" });

    //verificamos si la contraseña es correcta
    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    //del usuario encontrado vamos a crear un token
    const token = await createAccessToken({ id: userFound._id });
    res.cookie("token", token);
    //res.json nos va devolver los datos que vayamos a usar en el frontend
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAd: userFound.createdAt,
      updateAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  //para cerrar la sesion vamos a eliminar la cookie
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json({ message: "User not found" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updateAt: userFound.updatedAt,
  });
};
