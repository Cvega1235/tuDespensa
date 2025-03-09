import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    //para que lo que vayamos a crear este ligado al usuario logeado, es decir la tarea va ser de dicho usuario
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},
{
    timestamps: true,
}
);

export default mongoose.model("Task", taskSchema);