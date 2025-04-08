import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import { generateVerificationCode } from "../utils/GenerateVerificationCode.js";
import { sendVerificationEmail } from "../utils/sendVerificactionEmail.js";
import { response } from "express";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
// export const register = async (req, res) => {
//   const { email, password, username } = req.body;

//   try {
//     const passwordHash = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       username,
//       email,
//       password: passwordHash,
//     });

//     const userFound = await newUser.save();
//     const token = await createAccessToken({ id: userFound._id });
//     res.cookie("token", token);
//     //res.json nos va devolver los datos que vayamos a usar en el frontend
//     res.json({
//       id: userFound._id,
//       username: userFound.username,
//       email: userFound.email,
//       createdAd: userFound.createdAt,
//       updateAt: userFound.updatedAt,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const register = async (req, res) => {
  const { email, password, username, captcha, role } = req.body;
  console.log(req.body);
  if (!captcha) {
    return res.status(400).json({ message: "reCAPTCHA es obligatorio" });
  }
  try {
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: "6LcSyQQrAAAAACgW6vVqSLgxoSM967J2VAlyUzrm",
          response: captcha,
        }),
      }
    ).then((res) => res.json());
    if (!recaptchaResponse.success) {
      return res.status(400).json({ message: "reCAPTCHA inválido" });
    }
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
      role:role||"Usuario"
    });

    const userFound = await newUser.save();
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

// export const register = async (req, res) => {
//   const { email, password, username } = req.body;

//   try {
//     const passwordHash = await bcrypt.hash(password, 10);
//     const verificationCode = generateVerificationCode();

//     const newUser = new User({
//       username,
//       email,
//       password: passwordHash,
//       verificationCode, // Guardamos el código en la BD
//       isVerified: false, // Usuario no verificado al inicio
//     });

//     const userFound = await newUser.save();
//     await sendVerificationEmail(email, verificationCode); // Enviar el correo

//     res.json({
//       message: "Registro exitoso. Revisa tu correo para verificar tu cuenta.",
//       id: userFound._id,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const register = async (req, res) => {
//   try {
//     console.log("Datos recibidos:", req.body); // 👀 Verificar datos entrantes

//     const { email, password, username } = req.body;

//     if (!email || !password || !username) {
//       return res
//         .status(400)
//         .json({ message: "Todos los campos son obligatorios" });
//     }

//     const passwordHash = await bcrypt.hash(password, 10);
//     const newUser = new User({
//       username,
//       email,
//       password: passwordHash,
//     });

//     const userFound = await newUser.save();
//     console.log("Usuario guardado en MongoDB:", userFound); // 👀 Verificar usuario guardado

//     const token = await createAccessToken({ id: userFound._id });
//     res.cookie("token", token, { httpOnly: true });

//     res.json({
//       id: userFound._id,
//       username: userFound.username,
//       email: userFound.email,
//       createdAt: userFound.createdAt,
//       updatedAt: userFound.updatedAt,
//     });
//   } catch (error) {
//     console.error("Error en registro:", error); // 👀 Verificar errores en la consola
//     res.status(500).json({ message: error.message });
//   }
// };

// export const login = async (req, res) => {
//   const { email, password } = req.body;
//   console.log(req.body);
//   try {
//     //buscamos si el usuario existe
//     const userFound = await User.findOne({ email });

//     if (!userFound) return res.status(400).json({ message: "User not found" });

//     //verificamos si la contraseña es correcta
//     const isMatch = await bcrypt.compare(password, userFound.password);

//     if (!isMatch)
//       return res.status(400).json({ message: "Incorrect password" });

//     //del usuario encontrado vamos a crear un token
//     const token = await createAccessToken({ id: userFound._id });
//     res.cookie("token", token);
//     //res.json nos va devolver los datos que vayamos a usar en el frontend
//     res.json({
//       id: userFound._id,
//       username: userFound.username,
//       email: userFound.email,
//       createdAd: userFound.createdAt,
//       updateAt: userFound.updatedAt,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const login = async (req, res) => {
  const { email, password, captcha } = req.body;
  console.log(req.body);
  if (!captcha) {
    return res.status(400).json({ message: "reCAPTCHA es obligatorio" });
  }
  try {
    //Validacion de reCAPTCHA con Google
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: "6LcSyQQrAAAAACgW6vVqSLgxoSM967J2VAlyUzrm",
          response: captcha,
        }),
      }
    ).then((res) => res.json());
    if (!recaptchaResponse.success) {
      return res.status(400).json({ message: "reCAPTCHA inválido" });
    }

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
    console.error("Error en login", error);
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
export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });
    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "Unauthorized" });
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
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

export const sendVerificationCode = async (req, res) => {
  const { email } = req.body;

  // Buscar usuario
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

  // Generar código de verificación
  const verificationCode = generateVerificationCode();
  user.verificationCode = verificationCode;
  user.codeExpires = Date.now() + 10 * 60 * 1000; // Expira en 10 min

  // Guardar el código en la base de datos
  await user.save();

  // Enviar el código al correo del usuario
  await sendVerificationEmail(email, verificationCode);

  res.json({ message: "Código de verificación enviado" });
};

export const verifyEmail = async (req, res) => {
  const { email, verificationCode } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });
    if (user.verificationCode !== verificationCode)
      return res.status(400).json({ message: "Código incorrecto" });

    user.isVerified = true;
    user.verificationCode = null;
    await user.save();

    res.json({ message: "Cuenta verificada con éxito" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
