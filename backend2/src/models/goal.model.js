import mongoose from "mongoose";

const userGoalSchema = new mongoose.Schema({
    goal: {
        type: String,
        enum: ['Bajar de peso', 'Ganar masa muscular', 'Mantener peso'],
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
});

const userGoal = mongoose.model("UserGoal", userGoalSchema);
export default userGoal;