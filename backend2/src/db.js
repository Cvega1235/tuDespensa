import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://andysejas444:zIDYk2oBQWCvnsv0@pikachu.tbrrj.mongodb.net/?retryWrites=true&w=majority&appName=Pikachu"
    );
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config(); // Carga las variables de entorno

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Database connected");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };
