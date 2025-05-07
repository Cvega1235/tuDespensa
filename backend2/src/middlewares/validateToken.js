/* import jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from "../config.js"

export const authRequired = (req, res, next) => {
    const {token} = req.cookies;

    if(!token)
        return res.status(401).json({message: 'No token, authorization denied'});
    
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if(err) return res.status(403).json({message: 'Invalid token'});
        //guardamos los datos del usuario en user
        //lo que nos devuelve es: id, iat, exp
        req.user = user
        next();
    }) 
} */
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
  console.log("Entró al middleware authRequired"); // <-- Esto debe aparecer en consola

  const authHeader = req.headers.authorization;
  console.log("authHeader:", authHeader); // <-- Esto debe imprimir el token completo

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });

    req.user = user.userId;
    next();
  });
};


    
      
