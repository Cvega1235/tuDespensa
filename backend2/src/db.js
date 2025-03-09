import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://andysejas444:zIDYk2oBQWCvnsv0@pikachu.tbrrj.mongodb.net/?retryWrites=true&w=majority&appName=Pikachu");
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
};