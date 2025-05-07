import dotenv from "dotenv";


import app from './app.js';
import { connectDB } from './db.js';

dotenv.config();
connectDB();
app.listen(4000)
console.log('Server on port', 4000)
