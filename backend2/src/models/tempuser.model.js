import mongoose from "mongoose";

const tempUserSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true 
  },
  verificationCode: { 
    type: String, 
    required: true 
  },
  verificationExpires: { 
    type: Date, 
    required: true 
  },
});

const TempUser = mongoose.model("TempUser", tempUserSchema);
export default TempUser;
