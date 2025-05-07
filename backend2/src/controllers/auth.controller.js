import { User } from "../models/user.model.js";
import TempUser from "../models/tempuser.model.js";
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




















// PARA LA APLICACION MOBILE
// Solicitar código para registro
export const requestRegisterCode = async (req, res) => {
  const { email } = req.body;

  try {
    // Verificar si el correo ya está registrado en usuarios reales
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Este correo ya está registrado." });
    }

    // Generar un código de verificación
    const verificationCode = generateVerificationCode(); // ejemplo: devuelve "123456"
    const verificationExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutos

    // Eliminar registros temporales anteriores si existen
    await TempUser.deleteOne({ email });

    // Guardar en la colección temporal
    const newTempUser = new TempUser({ email, verificationCode, verificationExpires });
    await newTempUser.save();

    // Enviar el código por correo
    await sendVerificationEmail(email, verificationCode);

    res.status(200).json({ message: "Código de verificación enviado." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al generar el código." });
  }
};

// Verificar el código y registrar al usuario
export const verifyRegisterCode = async (req, res) => {
  const { email, codigo, password, nombre } = req.body;

  try {
    // Buscar el usuario temporal
    const tempUser = await TempUser.findOne({ email });

    if (!tempUser) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    // Verificar código
    if (tempUser.verificationCode !== codigo) {
      return res.status(400).json({ message: "Código incorrecto." });
    }

    // Verificar expiración
    if (new Date(tempUser.verificationExpires) < new Date()) {
      return res.status(400).json({ message: "El código ha expirado." });
    }

    // Hashear contraseña y crear usuario final
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      username: nombre,
      password: hashedPassword,
    });

    await newUser.save(); // Guardamos el usuario real
    await TempUser.deleteOne({ email }); // Eliminamos al usuario temporal

    // Crear el token
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    

    res.status(200).json({ user: newUser, token }); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al verificar el código." });
  }
};

// Solicitar código para login
export const requestLoginCode = async (req, res) => {
  const { email } = req.body;

  try {
    // Buscar al usuario por correo
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    // Generar un código de verificación
    const verificationCode = generateVerificationCode();
    const verificationExpires = new Date();
    verificationExpires.setMinutes(verificationExpires.getMinutes() + 10); // Código válido por 10 minutos

    // Guardar el código temporalmente
    user.verificationCode = verificationCode;
    user.verificationExpires = verificationExpires;
    await user.save();

    // Enviar el código por correo
    await sendVerificationEmail(email, verificationCode);

    res.status(200).json({ message: "Código de verificación enviado." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al generar el código." });
  }
};


// Verificar código y login
export const verifyLoginCode = async (req, res) => {
  const { email, verificationCode, password } = req.body;

  try {
    // Buscar al usuario
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    // Verificar si el código de verificación es correcto y si no ha expirado
    if (user.verificationCode !== verificationCode) {
      return res.status(400).json({ message: "Código incorrecto." });
    }

    if (new Date(user.verificationExpires) < new Date()) {
      return res.status(400).json({ message: "El código ha expirado." });
    }

    // Verificar la contraseña
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Contraseña incorrecta." });
    }

    // Generar JWT
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({ message: "Login exitoso.", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al verificar el código o la contraseña." });
  }
};

